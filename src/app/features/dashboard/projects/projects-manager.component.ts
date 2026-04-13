import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Plus } from 'lucide-angular';
import { ProjectService } from '../../../core/services/project.service';
import { Project } from '../../../core/models/api.generated';
import { ProjectCardComponent } from '../../../shared/components/project-card/project-card.component';

@Component({
  selector: 'app-projects-manager',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, ProjectCardComponent],
  template: `
    <div class="max-w-6xl mx-auto p-8">
      <div class="flex items-center justify-between mb-8">
        <div>
          <h2 class="text-2xl font-bold font-serif">My Projects</h2>
          <p class="text-muted text-base">Manage your portfolio projects</p>
        </div>
        <button class="flex items-center gap-2 px-4 py-2 bg-gold text-paper rounded-lg hover:bg-gold2 transition-colors">
          <lucide-icon [img]="Plus" class="w-4 h-4"></lucide-icon>
          Add Project
        </button>
      </div>
      @if (isLoading()) {
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (i of [1,2,3]; track i) {
            <div class="card p-6 animate-pulse"><div class="h-48 bg-ink/5 rounded mb-4"></div><div class="h-6 bg-ink/5 rounded w-3/4 mb-2"></div><div class="h-4 bg-ink/5 rounded"></div></div>
          }
        </div>
      }
      @if (projects().length > 0) {
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (project of projects(); track project.id) {
            <app-project-card [project]="project" />
          }
        </div>
      }
      @if (!isLoading() && projects().length === 0) {
        <div class="card p-12 text-center">
          <p class="text-muted text-lg">No projects yet. Add your first project!</p>
        </div>
      }
    </div>
  `
})
export class ProjectsManagerComponent implements OnInit {
  readonly Plus = Plus;
  private svc = inject(ProjectService);
  projects = signal<Project[]>([]);
  isLoading = signal(true);
  
  ngOnInit() {
    this.svc.getProjects().subscribe({
      next: (data) => { this.projects.set(data); this.isLoading.set(false); },
      error: () => this.isLoading.set(false)
    });
  }
}
