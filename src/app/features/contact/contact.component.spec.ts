import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { provideRouter } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { ContactComponent } from './contact.component';
import { MessageService } from '../../core/services/message.service';
import { of, throwError } from 'rxjs';

// Mock MessageService
class MockMessageService {
  sendMessage = jasmine.createSpy('sendMessage').and.returnValue(of({ success: true }));
}

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let messageService: MockMessageService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ContactComponent,
        ReactiveFormsModule,
        LucideAngularModule
      ],
      providers: [
        { provide: MessageService, useClass: MockMessageService },
        provideRouter([])
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    messageService = TestBed.inject(MessageService) as any;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form with required fields', () => {
    expect(component.form.contains('name')).toBeTruthy();
    expect(component.form.contains('email')).toBeTruthy();
    expect(component.form.contains('message')).toBeTruthy();
  });

  it('should validate name field', () => {
    const nameControl = component.form.get('name');
    nameControl?.setValue('');
    expect(nameControl?.valid).toBeFalsy();
    expect(nameControl?.errors?.['required']).toBeTruthy();

    nameControl?.setValue('A');
    expect(nameControl?.valid).toBeFalsy();
    expect(nameControl?.errors?.['minlength']).toBeTruthy();

    nameControl?.setValue('John Doe');
    expect(nameControl?.valid).toBeTruthy();
  });

  it('should validate email field', () => {
    const emailControl = component.form.get('email');
    emailControl?.setValue('invalid-email');
    expect(emailControl?.valid).toBeFalsy();
    expect(emailControl?.errors?.['email']).toBeTruthy();

    emailControl?.setValue('test@example.com');
    expect(emailControl?.valid).toBeTruthy();
  });

  it('should validate message field', () => {
    const messageControl = component.form.get('message');
    messageControl?.setValue('Hi');
    expect(messageControl?.valid).toBeFalsy();
    expect(messageControl?.errors?.['minlength']).toBeTruthy();

    messageControl?.setValue('This is a valid message with enough content.');
    expect(messageControl?.valid).toBeTruthy();
  });

  it('should submit form successfully', () => {
    component.form.setValue({
      name: 'John Doe',
      email: 'john@example.com',
      message: 'This is a test message.'
    });

    component.onSubmit();

    expect(messageService.sendMessage).toHaveBeenCalledWith({
      name: 'John Doe',
      email: 'john@example.com',
      content: 'This is a test message.'
    });
    expect(component.isSuccess()).toBeTruthy();
    expect(component.isSubmitting()).toBeFalsy();
  });

  it('should handle form submission error', () => {
    messageService.sendMessage.and.returnValue(throwError(() => ({ status: 500 })));

    component.form.setValue({
      name: 'John Doe',
      email: 'john@example.com',
      message: 'This is a test message.'
    });

    component.onSubmit();

    expect(component.isError()).toBeTruthy();
    expect(component.isSubmitting()).toBeFalsy();
  });

  it('should reset form', () => {
    component.form.setValue({
      name: 'John Doe',
      email: 'john@example.com',
      message: 'Test message'
    });
    component.isSuccess.set(true);

    component.resetForm();

    expect(component.isSuccess()).toBeFalsy();
    expect(component.form.value).toEqual({ name: null, email: null, message: null });
  });

  it('should handle rate limiting', () => {
    messageService.sendMessage.and.returnValue(throwError(() => ({ status: 429 })));

    component.form.setValue({
      name: 'John Doe',
      email: 'john@example.com',
      message: 'Test message'
    });

    component.onSubmit();

    expect(component.isRateLimited()).toBeTruthy();
    expect(component.countdownSeconds()).toBe(60);
  });
});
