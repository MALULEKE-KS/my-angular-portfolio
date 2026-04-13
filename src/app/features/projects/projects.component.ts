import { Component, OnInit, inject, signal } from '@angular/core';
import { ProjectService } from '../../core/services/project.service';
import { Project } from '../../core/models/api.generated';
import { ProjectCardComponent } from '../../shared/components/project-card/project-card.component';
import { ProjectSkeletonComponent } from '../../shared/components/skeleton/project-skeleton.component';
import { ErrorMessageComponent } from '../../shared/components/error-message/error-message.component';
import { LucideAngularModule, FolderOpen } from 'lucide-angular';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent, ProjectSkeletonComponent, ErrorMessageComponent, LucideAngularModule],
  template: `
    <section class="min-h-screen py-20 px-4 bg-paper">
      <div class="container mx-auto max-w-6xl">
        <div class="text-center mb-12">
          <h1 class="text-4xl lg:text-5xl font-bold font-serif text-ink mb-4">Projects</h1>
          <p class="text-lg text-muted">Completed work via GitHub repositories</p>
        </div>

        <div *ngIf="isLoading()" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <app-project-skeleton *ngFor="let i of skeletons"></app-project-skeleton>
        </div>

        <div *ngIf="isError()">
          <app-error-message [error]="error()"></app-error-message>
        </div>

        <div *ngIf="isSuccess()" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ng-container *ngIf="projects().length > 0; else noProjects">
            <app-project-card *ngFor="let project of projects()" [project]="project"></app-project-card>
          </ng-container>
          <ng-template #noProjects>
            <div class="col-span-full text-center py-12">
              <lucide-icon [img]="FolderOpen" class="w-16 h-16 text-muted mx-auto mb-4"></lucide-icon>
              <p class="text-lg text-muted">Projects coming soon</p>
            </div>
          </ng-template>
        </div>
      </div>
    </section>
  `,
})
export class ProjectsComponent implements OnInit {
  private svc = inject(ProjectService);
  
  projects = signal<Project[]>([]);
  isLoading = signal(true);
  isError = signal(false);
  isSuccess = signal(false);
  error = signal<any>(null);
  skeletons = [1, 2, 3];
  readonly FolderOpen = FolderOpen;

  ngOnInit(): void {
    this.svc.getProjects().subscribe({
      next: (data) => {
        this.projects.set(data);
        this.isLoading.set(false);
        this.isSuccess.set(true);
      },
      error: (err) => {
        this.isLoading.set(false);
        this.isError.set(true);
        this.error.set(err);
      },
    });
  }
}
