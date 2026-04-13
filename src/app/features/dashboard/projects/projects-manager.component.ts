import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../../../core/services/project.service';
import { Project } from '../../../core/models/api.generated';
import { ProjectCardComponent } from '../../projects/project-card.component';
import { ProjectSkeletonComponent } from '../../../shared/components/skeleton/project-skeleton.component';

@Component({
  selector: 'app-projects-manager',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent, ProjectSkeletonComponent],
  template: `
    <section class="px-4 py-16">
      <div class="max-w-6xl mx-auto w-full">
        <h2 class="text-3xl font-bold font-serif text-ink mb-2">Projects</h2>
        <p class="text-lg text-muted mb-8">Manage your projects.</p>
        <div *ngIf="isLoading()" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <app-project-skeleton *ngFor="let i of skeletons" />
        </div>
        <div *ngIf="isSuccess()" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <app-project-card *ngFor="let project of projects()" [project]="project" />
        </div>
      </div>
    </section>
  `,
})
export class ProjectsManagerComponent implements OnInit {
  private svc = inject(ProjectService);
  projects = signal<Project[]>([]);
  isLoading = signal(true);
  isSuccess = signal(false);
  skeletons = [1, 2, 3];

  ngOnInit(): void {
    this.svc.getProjects().subscribe({
      next: (data) => { this.projects.set(data); this.isLoading.set(false); this.isSuccess.set(true); },
      error: () => { this.isLoading.set(false); }
    });
  }
}
