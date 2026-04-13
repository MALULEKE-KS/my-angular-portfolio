import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-16 px-4 bg-paper">
      <div class="container mx-auto max-w-3xl">
        <h1 class="text-3xl sm:text-4xl font-bold font-serif text-ink mb-6">About Me</h1>
        <div class="prose prose-lg mb-8">
          <p class="text-lg text-muted leading-relaxed">
            I am a Software Engineer and AI Systems Architect building practical digital systems through my companies.
            My work focuses on full-stack development and AI integration using modern stacks.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-6 rounded-xl border border-ink/10">
            <h2 class="text-xl font-bold font-serif text-ink mb-4">Companies</h2>
            <ul class="space-y-2 text-muted">
              <li>GrowthCore Solutions - Digital growth agency with Ngoneni Mponisi Forever</li>
              <li>AI Solutions - Custom AI systems and integrations</li>
            </ul>
          </div>
          <div class="p-6 rounded-xl border border-ink/10">
            <h2 class="text-xl font-bold font-serif text-ink mb-4">Specialties</h2>
            <ul class="space-y-2 text-muted">
              <li>Full-stack development (Next.js, Angular, Node.js)</li>
              <li>AI integration (Python, FastAPI, ML pipelines)</li>
              <li>System architecture and design</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class AboutComponent {}
