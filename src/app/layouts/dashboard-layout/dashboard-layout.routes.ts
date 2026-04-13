import { Routes } from '@angular/router';
import { DashboardLayoutComponent } from './dashboard-layout.component';

export const dashboardLayoutRoutes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      { path: '', redirectTo: 'projects', pathMatch: 'full' },
      { path: 'projects', loadComponent: () => import('../../features/dashboard/projects/projects-manager.component').then(m => m.ProjectsManagerComponent) },
      { path: 'messages', loadComponent: () => import('../../features/dashboard/messages/messages-viewer.component').then(m => m.MessagesViewerComponent) },
      { path: 'profile', loadComponent: () => import('../../features/dashboard/profile/profile-editor.component').then(m => m.ProfileEditorComponent) },
    ],
  },
];
