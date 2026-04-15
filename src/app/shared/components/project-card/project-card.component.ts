import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, Github, ExternalLink } from 'lucide-angular';

@Component({
    selector: 'app-project-card',
    imports: [RouterLink, LucideAngularModule],
    template: `
    <article class="card-border group relative overflow-hidden rounded-2xl bg-paper border border-ink/10
                     hover:border-gold/40 hover:shadow-[0_0_30px_rgba(184,134,11,0.15)]
                     transition-all duration-500 hover:-translate-y-1">
      <div class="aspect-[16/9] overflow-hidden bg-gradient-to-br from-gold/10 to-amber-100/20">
        @if (project.imageUrl) {
          <img loading="lazy" [src]="project.imageUrl" [alt]="project.title"
               class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
        } @else {
          <div class="w-full h-full flex items-center justify-center">
            <svg class="w-16 h-16 text-gold/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.155m-16.5 0a2.25 2.25 0 0 0 1.5 0m-16.5 0h15m0 0H4.5A2.25 2.25 0 0 0 2.25 12v6.75m16.5-6.75v6.75m0 0H4.5m0 0h15" />
            </svg>
          </div>
        }
      </div>
      <div class="p-6">
        <div class="flex items-start justify-between gap-3 mb-3">
          <h3 class="text-xl font-bold font-serif text-ink group-hover:text-gold transition-colors leading-tight">
            {{ project.title }}
          </h3>
          @if (project.featured) {
            <span class="shrink-0 text-xs font-bold px-2 py-1 bg-gold text-paper rounded-full uppercase tracking-wider">
              Featured
            </span>
          }
        </div>
        <p class="text-muted text-sm leading-relaxed mb-4 line-clamp-3">{{ project.description }}</p>
        @if (project.techStack?.length) {
          <div class="flex flex-wrap gap-1.5 mb-5">
            @for (tag of project.techStack; track tag) {
              <span class="text-xs px-2.5 py-1 bg-ink text-paper rounded-md font-mono
                          group-hover:bg-gold group-hover:text-paper transition-colors">
                {{ tag }}
              </span>
            }
          </div>
        }
        <div class="flex items-center gap-4 pt-4 border-t border-ink/10">
          <a [routerLink]="['/projects', project.id]"
             class="text-sm font-semibold text-gold hover:text-gold2 transition-colors">
            View Details
          </a>
          @if (project.liveUrl) {
            <a [href]="project.liveUrl" target="_blank" rel="noopener noreferrer"
               class="text-sm text-muted hover:text-ink flex items-center gap-1 transition-colors">
              <lucide-icon [img]="ExternalLink" class="w-3.5 h-3.5"></lucide-icon>
              Live
            </a>
          }
          @if (project.repoUrl) {
            <a [href]="project.repoUrl" target="_blank" rel="noopener noreferrer"
               class="text-sm text-muted hover:text-ink flex items-center gap-1 transition-colors">
              <lucide-icon [img]="Github" class="w-3.5 h-3.5"></lucide-icon>
              Code
            </a>
          }
        </div>
      </div>
    </article>
  `,
    styles: [`
    :host { display: block; }
    .card-border {
      box-shadow: 0 1px 3px rgba(14,14,14,0.06);
    }
  `]
})
export class ProjectCardComponent {
  @Input({ required: true }) project!: { id: string; title: string; description: string; techStack?: string[]; liveUrl?: string | null; repoUrl?: string | null; imageUrl?: string | null; featured: boolean };
  readonly Github = Github;
  readonly ExternalLink = ExternalLink;
}
