import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="min-h-[500px] flex flex-col justify-center items-center text-center px-4 pt-20 pb-24 bg-paper">
      <div class="max-w-3xl mx-auto animate-fade-in">
        <img src="/assets/profile.jpeg" alt="Kurhula Success Maluleke"
             class="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-gold mx-auto mb-8">
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-ink mb-4 leading-tight">
          Software Engineer<br><span class="text-gold">& AI Systems Architect</span>
        </h1>
        <p class="text-lg sm:text-xl text-muted mb-8 max-w-xl mx-auto leading-relaxed">
          I build scalable, production-grade digital systems across fintech, SaaS, healthcare, and enterprise domains.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a routerLink="/projects" class="inline-flex items-center justify-center px-6 py-3 bg-gold text-paper font-medium rounded-lg hover:bg-gold2 transition-colors min-h-[44px]">View Projects</a>
          <a routerLink="/contact" class="inline-flex items-center justify-center px-6 py-3 border border-ink/20 text-ink font-medium rounded-lg hover:bg-ink/5 transition-colors min-h-[44px]">Get in Touch</a>
        </div>
      </div>
    </section>
    <section class="py-16 px-4 bg-ink text-paper">
      <div class="container mx-auto max-w-4xl text-center">
        <h2 class="text-2xl sm:text-3xl font-bold font-serif mb-8">Tech Stack</h2>
        <div class="flex flex-wrap justify-center gap-3">
          <span *ngFor="let tech of techStack" class="px-4 py-2 bg-paper/10 rounded-full text-base font-mono">{{ tech }}</span>
        </div>
      </div>
    </section>
    <section class="py-16 px-4 bg-paper">
      <div class="container mx-auto max-w-3xl">
        <h2 class="text-2xl sm:text-3xl font-bold font-serif text-ink mb-6 text-center">Featured Repositories</h2>
        <div class="space-y-4">
          <div *ngFor="let repo of repos" class="p-6 rounded-xl border border-ink/10 bg-paper hover:border-gold/40 transition-colors">
            <h3 class="text-xl font-semibold text-ink mb-2">{{ repo.title }}</h3>
            <p class="text-muted mb-4">{{ repo.description }}</p>
            <a [href]="repo.url" target="_blank" class="text-gold hover:text-gold2 transition-colors">View on GitHub &rarr;</a>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class HomeComponent {
  techStack = ['TypeScript', 'Python', 'Next.js', 'Angular', 'Node.js', 'FastAPI', 'PostgreSQL', 'Tailwind CSS', 'Docker', 'AWS'];
  repos = [
    { title: ' MALULEKE-KS', url: 'https://github.com/MALULEKE-KS', description: 'Portfolio with 8 projects' },
    { title: 'GrowthCore Solutions', url: 'https://github.com/GrowthCore-Solutions', description: 'Digital growth agency' },
    { title: 'System Design Template', url: 'https://github.com/MALULEKE-KS/system-design-template', description: 'Constitutional governance framework' },
  ];
}
