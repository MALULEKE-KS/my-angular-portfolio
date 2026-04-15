import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
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
          <button type="submit" 
                  class="px-6 py-3 bg-gold text-paper font-medium rounded-lg hover:bg-gold2 transition-colors min-h-[44px]">
            Save Changes
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

  onSubmit() { /* intentionally empty */ }
}
