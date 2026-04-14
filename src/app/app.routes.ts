import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { 
    path: '', 
    loadComponent: () => import('./layouts/main-layout/main-layout.component').then(m => m.MainLayoutComponent),
    children: [
      { path: '', loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent) },
      { path: 'about', loadComponent: () => import('./features/about/about.component').then(m => m.AboutComponent) },
      { path: 'projects', loadComponent: () => import('./features/projects/projects.component').then(m => m.ProjectsComponent) },
      { path: 'stack', loadComponent: () => import('./features/stack/stack.component').then(m => m.StackComponent) },
      { path: 'philosophy', loadComponent: () => import('./features/philosophy/philosophy.component').then(m => m.PhilosophyComponent) },
      { path: 'projects/:id', loadComponent: () => import('./features/projects/project-detail.component').then(m => m.ProjectDetailComponent) },
      { path: 'contact', loadComponent: () => import('./features/contact/contact.component').then(m => m.ContactComponent) },
      { path: 'tech-stack', loadComponent: () => import('./features/tech-stack/tech-stack.component').then(m => m.TechStackComponent) },
    ]
  },
  { path: 'login', loadComponent: () => import('./features/auth/login.component').then(m => m.LoginComponent) },
  { 
    path: 'dashboard', 
    loadComponent: () => import('./layouts/dashboard-layout/dashboard-layout.component').then(m => m.DashboardLayoutComponent),
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'projects', pathMatch: 'full' },
      { path: 'projects', loadComponent: () => import('./features/dashboard/projects/projects-manager.component').then(m => m.ProjectsManagerComponent) },
      { path: 'messages', loadComponent: () => import('./features/dashboard/messages/messages-viewer.component').then(m => m.MessagesViewerComponent) },
      { path: 'profile', loadComponent: () => import('./features/dashboard/profile/profile-editor.component').then(m => m.ProfileEditorComponent) },
    ]
  },
  { path: '**', loadComponent: () => import('./features/not-found/not-found.component').then(m => m.NotFoundComponent) }
];
