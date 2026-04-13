import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageService } from '../../core/services/message.service';
import { SendMessageRequest } from '../../core/models/api.generated';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  template: `
    <section class="min-h-screen py-20 px-4 bg-paper">
      <div class="container mx-auto max-w-6xl">
        
        <!-- Header -->
        <div class="text-center mb-16">
          <h1 class="text-4xl lg:text-6xl font-bold font-serif text-ink mb-4">Get in Touch</h1>
          <p class="text-xl text-muted">Let's build something extraordinary together</p>
        </div>
        
        <div class="grid lg:grid-cols-2 gap-12">
          
          <!-- Left - Contact Info -->
          <div class="space-y-8">
            <div>
              <h2 class="text-2xl font-bold font-serif text-ink mb-6">Contact Information</h2>
              <div class="space-y-4">
                <a [href]="'mailto:' + contact.email" 
                   class="flex items-center gap-4 p-4 rounded-xl bg-ink/5 hover:bg-gold/10 transition-colors group">
                  <span class="text-2xl">📧</span>
                  <div>
                    <div class="text-sm text-muted">Email</div>
                    <div class="font-semibold text-ink group-hover:text-gold transition-colors">{{ contact.email }}</div>
                  </div>
                </a>
                
                <a [href]="contact.whatsapp" target="_blank"
                   class="flex items-center gap-4 p-4 rounded-xl bg-ink/5 hover:bg-green-500/10 transition-colors group">
                  <span class="text-2xl">💬</span>
                  <div>
                    <div class="text-sm text-muted">WhatsApp</div>
                    <div class="font-semibold text-ink group-hover:text-green-500 transition-colors">+27 64 070 8649</div>
                  </div>
                </a>
                
                <a [href]="contact.linkedin" target="_blank"
                   class="flex items-center gap-4 p-4 rounded-xl bg-ink/5 hover:bg-blue-500/10 transition-colors group">
                  <span class="text-2xl">💼</span>
                  <div>
                    <div class="text-sm text-muted">LinkedIn</div>
                    <div class="font-semibold text-ink group-hover:text-blue-500 transition-colors">kurhula-success-maluleke</div>
                  </div>
                </a>
                
                <a [href]="contact.github" target="_blank"
                   class="flex items-center gap-4 p-4 rounded-xl bg-ink/5 hover:bg-white/10 transition-colors group">
                  <span class="text-2xl">⚡</span>
                  <div>
                    <div class="text-sm text-muted">GitHub</div>
                    <div class="font-semibold text-ink group-hover:text-white transition-colors">MALULEKE-KS</div>
                  </div>
                </a>
              </div>
            </div>
            
            <!-- Companies -->
            <div>
              <h3 class="text-xl font-bold font-serif text-ink mb-4">Companies</h3>
              <div class="space-y-3">
                <div class="p-4 rounded-xl bg-ink text-paper">
                  <div class="font-bold">⚡ KSDRILL-SA</div>
                  <div class="text-sm opacity-80">Technology Studio</div>
                </div>
                <div class="p-4 rounded-xl bg-ink text-paper">
                  <div class="font-bold">📈 GrowthCore Solutions</div>
                  <div class="text-sm opacity-80">Digital Growth Agency</div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Right - Contact Form -->
          <div class="p-8 rounded-2xl bg-ink text-paper shadow-2xl">
            <h2 class="text-2xl font-bold font-serif mb-6">Send a Message</h2>
            
            <form [formGroup]="form" (ngSubmit)="onSubmit()" novalidate class="space-y-6">
              <div>
                <label for="name" class="block text-sm font-medium mb-2 opacity-90">Name</label>
                <input id="name" type="text" formControlName="name" 
                       class="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-paper placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-gold transition-colors"
                       placeholder="Your name">
                @if (nameInvalid) {
                  <p class="text-red-400 text-sm mt-2">Name is required</p>
                }
              </div>
              
              <div>
                <label for="email" class="block text-sm font-medium mb-2 opacity-90">Email</label>
                <input id="email" type="email" formControlName="email" 
                       class="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-paper placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-gold transition-colors"
                       placeholder="you@example.com">
                @if (emailInvalid) {
                  <p class="text-red-400 text-sm mt-2">Valid email is required</p>
                }
              </div>
              
              <div>
                <label for="message" class="block text-sm font-medium mb-2 opacity-90">Message</label>
                <textarea id="message" formControlName="message" rows="5"
                          class="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-paper placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-gold transition-colors resize-none"
                          placeholder="Tell me about your project..."></textarea>
                @if (messageInvalid) {
                  <p class="text-red-400 text-sm mt-2">Message is required (min 10 characters)</p>
                }
              </div>
              
              @if (isSuccess()) {
                <div class="p-4 rounded-lg bg-green-500/20 text-green-400 text-center">
                  ✓ Message sent successfully!
                </div>
              }
              
              @if (isError()) {
                <div class="p-4 rounded-lg bg-red-500/20 text-red-400 text-center">
                  ✗ Failed to send message. Please try again.
                </div>
              }
              
              <button type="submit" [disabled]="isSubmitting()"
                      class="w-full py-4 px-6 bg-gold text-paper font-bold rounded-lg hover:bg-gold2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed min-h-[52px]">
                @if (!isSubmitting()) { Send Message }
                @if (isSubmitting()) { Sending... }
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ContactComponent implements OnInit {
  private svc = inject(MessageService);
  
  contact = {
    email: 'kurhula04s@gmail.com',
    whatsapp: 'https://wa.me/27640708649',
    linkedin: 'https://za.linkedin.com/in/kurhula-success-maluleke-32153231a',
    github: 'https://github.com/MALULEKE-KS'
  };
  
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required, Validators.minLength(10)])
  });
  
  isSubmitting = signal(false);
  isError = signal(false);
  isSuccess = signal(false);
  
  get name() { return this.form.get('name'); }
  get email() { return this.form.get('email'); }
  get message() { return this.form.get('message'); }
  get nameInvalid() { return this.name?.invalid && this.name?.touched; }
  get emailInvalid() { return this.email?.invalid && this.email?.touched; }
  get messageInvalid() { return this.message?.invalid && this.message?.touched; }
  
  ngOnInit(): void {}
  
  onSubmit(): void {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;
    
    this.isSubmitting.set(true);
    this.isError.set(false);
    this.isSuccess.set(false);
    
    const req: SendMessageRequest = this.form.value as SendMessageRequest;
    this.svc.sendMessage(req).subscribe({
      next: () => {
        this.isSubmitting.set(false);
        this.isSuccess.set(true);
        this.form.reset();
      },
      error: () => {
        this.isSubmitting.set(false);
        this.isError.set(true);
      }
    });
  }
}
