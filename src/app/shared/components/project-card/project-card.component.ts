import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, ExternalLink, Github, FolderOpen } from 'lucide-angular';
import { Project } from '../../../core/models/api.generated';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [RouterLink, CommonModule, LucideAngularModule],
  template: `
    <article class="group relative overflow-hidden rounded-xl border border-ink/10 bg-paper hover:border-gold/40 hover:shadow-lg transition-all duration-300">
      @if (project.imageUrl) {
        <div class="aspect-video overflow-hidden">
          <img [src]="project.imageUrl" [alt]="project.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
        </div>
      } @else {
        <div class="aspect-video bg-gradient-to-br from-gold/20 to-amber-100/30 flex items-center justify-center">
          <lucide-icon [img]="FolderOpen" class="w-16 h-16 text-gold/40"></lucide-icon>
        </div>
      }
      <div class="p-6">
        <h3 class="text-xl font-semibold font-serif text-ink mb-2 group-hover:text-gold transition-colors">{{ project.title }}</h3>
        <p class="text-base text-muted mb-4 line-clamp-3">{{ project.description }}</p>
        @if (project.techStack.length) {
          <div class="flex flex-wrap gap-2 mb-4">
            @for (tag of project.techStack; track tag) {
              <span class="px-3 py-1 text-sm bg-ink/5 text-muted rounded-full font-mono">{{ tag }}</span>
            }
          </div>
        }
        <div class="flex items-center gap-4 pt-4 border-t border-ink/10">
          <a [routerLink]="['/projects', project.id]" class="text-sm font-medium text-gold hover:text-gold2 transition-colors">
            View Details
          </a>
          @if (project.liveUrl) {
            <a [href]="project.liveUrl" target="_blank" rel="noopener" class="text-sm text-muted hover:text-ink transition-colors flex items-center gap-1">
              <lucide-icon [img]="ExternalLink" class="w-4 h-4"></lucide-icon>
              Live
            </a>
          }
          @if (project.repoUrl) {
            <a [href]="project.repoUrl" target="_blank" rel="noopener" class="text-sm text-muted hover:text-ink transition-colors flex items-center gap-1">
              <lucide-icon [img]="Github" class="w-4 h-4"></lucide-icon>
              Code
            </a>
          }
        </div>
      </div>
    </article>
  `,
})
export class ProjectCardComponent {
  @Input({ required: true }) project!: Project;
  readonly ExternalLink = ExternalLink;
  readonly Github = Github;
  readonly FolderOpen = FolderOpen;
}
