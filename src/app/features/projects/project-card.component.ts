import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Project } from '../../core/models/api.generated';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <article class="group relative overflow-hidden rounded-xl border border-ink/10 bg-paper hover:border-gold/40 hover:shadow-lg transition-all duration-300">
      <div *ngIf="project.imageUrl" class="aspect-video overflow-hidden">
        <img [src]="project.imageUrl" [alt]="project.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
      </div>
      <div class="p-6">
        <h3 class="text-xl font-semibold font-serif text-ink mb-2 group-hover:text-gold transition-colors">{{ project.title }}</h3>
        <p class="text-base text-muted mb-4 line-clamp-3">{{ project.description }}</p>
        <div *ngIf="project.techStack?.length" class="flex flex-wrap gap-2 mb-4">
          <span *ngFor="let tag of project.techStack" class="px-3 py-1 text-sm bg-ink/5 text-muted rounded-full">{{ tag }}</span>
        </div>
        <div class="flex items-center gap-4">
          <a [routerLink]="['/projects', project.id]" class="text-base font-medium text-gold hover:text-gold2 transition-colors">View Details</a>
          <a *ngIf="project.liveUrl" [href]="project.liveUrl" target="_blank" class="text-base text-muted hover:text-ink transition-colors">Live Demo</a>
          <a *ngIf="project.repoUrl" [href]="project.repoUrl" target="_blank" class="text-base text-muted hover:text-ink transition-colors">Repo</a>
        </div>
      </div>
    </article>
  `,
})
export class ProjectCardComponent {
  @Input() project!: Project;
}
