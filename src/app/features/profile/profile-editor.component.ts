import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="py-12 px-4 container mx-auto max-w-2xl">
      <h1 class="text-2xl font-bold font-serif text-ink mb-8">Profile</h1>
      <form [formGroup]="form" class="space-y-6">
        <div>
          <label for="bio" class="block text-base font-medium text-ink mb-2">Bio</label>
          <textarea id="bio" formControlName="bio" rows="4"
            class="w-full px-4 py-3 border border-ink/20 rounded-lg text-base text-ink bg-paper focus:outline-none focus:ring-2 focus:ring-gold transition-colors"></textarea>
        </div>
        <button type="submit"
          class="px-6 py-3 bg-gold text-paper font-medium rounded-lg hover:bg-gold2 transition-colors min-h-[44px]">
          Save
        </button>
      </form>
    </div>
  `,
})
export class ProfileEditorComponent {
  form = new FormGroup({
    bio: new FormControl('', [Validators.required]),
  });
}
