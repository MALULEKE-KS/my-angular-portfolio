import { Component, inject, signal } from '@angular/core';

import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-profile-editor',
    imports: [ReactiveFormsModule],
    template: `
    <div class="max-w-2xl mx-auto p-8">
      <h2 class="text-2xl font-bold font-serif mb-6">Profile Settings</h2>
      <div class="card p-6">
        <form [formGroup]="form" (ngSubmit)="onSubmit()">
          <div class="mb-4">
            <label class="block text-sm font-medium mb-2">Display Name</label>
            <input type="text" formControlName="name"
                   class="w-full px-4 py-3 border border-ink/20 rounded-lg bg-paper text-base">
          </div>
          <div class="mb-4">
            <label class="block text-sm font-medium mb-2">Bio</label>
            <textarea formControlName="bio" rows="4"
                      class="w-full px-4 py-3 border border-ink/20 rounded-lg bg-paper text-base"></textarea>
          </div>
          @if (saveMessage()) {
            <div class="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg text-green-800">
              {{ saveMessage() }}
            </div>
          }
          <button type="submit"
                  [disabled]="form.invalid || isSubmitting()"
                  class="px-6 py-3 bg-gold text-paper font-medium rounded-lg hover:bg-gold2 transition-colors min-h-[44px] disabled:opacity-50 disabled:cursor-not-allowed">
            {{ isSubmitting() ? 'Saving...' : 'Save Changes' }}
          </button>
        </form>
      </div>
    </div>
  `
})
export class ProfileEditorComponent {
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    bio: new FormControl('', Validators.required)
  });

  isSubmitting = signal(false);
  saveMessage = signal<string>('');

  onSubmit() {
    if (this.form.valid) {
      this.isSubmitting.set(true);
      this.saveMessage.set('');

      // TODO: Implement actual API call to save profile
      // For now, simulate a save operation
      setTimeout(() => {
        this.saveMessage.set('Profile updated successfully!');
        this.isSubmitting.set(false);

        // Clear success message after 3 seconds
        setTimeout(() => this.saveMessage.set(''), 3000);
      }, 1000);
    }
  }
}
