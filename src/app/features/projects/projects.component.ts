import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, ExternalLink, Github, FolderOpen } from 'lucide-angular';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterLink, LucideAngularModule],
  template: `
    <div class="min-h-screen bg-paper py-20 px-4">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <h1 class="text-4xl sm:text-5xl font-bold font-serif text-ink mb-4">My Projects</h1>
          <p class="text-lg text-muted">Production-grade systems across fintech, SaaS, healthcare, and enterprise</p>
        </div>

        @if (isLoading()) {
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            @for (i of skeletons; track i) {
              <div class="animate-pulse">
                <div class="h-48 bg-ink/5 rounded-xl mb-4"></div>
                <div class="h-6 bg-ink/5 rounded w-3/4 mb-2"></div>
                <div class="h-4 bg-ink/5 rounded w-full mb-2"></div>
                <div class="h-4 bg-ink/5 rounded w-5/6"></div>
              </div>
            }
          </div>
        }

        @if (isSuccess()) {
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            @for (project of projects(); track project.id) {
              <div class="group relative overflow-hidden rounded-xl border border-ink/10 bg-paper hover:border-gold/40 hover:shadow-xl transition-all duration-300">
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
                  <h3 class="text-xl font-bold font-serif text-ink mb-2 group-hover:text-gold transition-colors">{{ project.title }}</h3>
                  <p class="text-muted mb-4 line-clamp-3">{{ project.description }}</p>
                  @if (project.techStack?.length) {
                    <div class="flex flex-wrap gap-2 mb-4">
                      @for (tag of project.techStack; track tag) {
                        <span class="px-3 py-1 text-xs bg-ink/5 text-muted rounded-full font-mono">{{ tag }}</span>
                      }
                    </div>
                  }
                  <div class="flex items-center gap-4 pt-4 border-t border-ink/10">
                    <a [routerLink]="['/projects', project.id]" class="text-sm font-medium text-gold hover:text-gold2 transition-colors">
                      View Details
                    </a>
                    @if (project.liveUrl) {
                      <a [href]="project.liveUrl" target="_blank" class="text-sm text-muted hover:text-ink transition-colors flex items-center gap-1">
                        <lucide-icon [img]="ExternalLink" class="w-4 h-4"></lucide-icon>
                        Live
                      </a>
                    }
                    @if (project.repoUrl) {
                      <a [href]="project.repoUrl" target="_blank" class="text-sm text-muted hover:text-ink transition-colors flex items-center gap-1">
                        <lucide-icon [img]="Github" class="w-4 h-4"></lucide-icon>
                        Code
                      </a>
                    }
                  </div>
                </div>
              </div>
            }
          </div>
        }
      </div>
    </div>
  `,
})
export class ProjectsComponent implements OnInit {
  projects = signal([
    {
      id: '1',
      title: 'my-angular-portfolio',
      description: 'This portfolio showcasing fullstack architecture skills with Angular, Next.js, and modern web technologies.',
      techStack: ['Angular', 'TypeScript', 'Tailwind CSS', 'Lucide Icons'],
      liveUrl: 'https://my-angular-portfolio-ksdrill.zocomputer.io',
      repoUrl: 'https://github.com/MALULEKE-KS/my-angular-portfolio',
      imageUrl: null,
      featured: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: '2',
      title: 'GrowthCore Solutions',
      description: 'Digital growth agency platform with AI-powered analytics, automation tools, and enterprise-grade scalability.',
      techStack: ['Next.js', 'FastAPI', 'PostgreSQL', 'Redis', 'LangChain'],
      liveUrl: 'https://growthcore-solutions.vercel.app',
      repoUrl: 'https://github.com/GrowthCore-Solutions',
      imageUrl: null,
      featured: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: '3',
      title: 'Healthcare Management System',
      description: 'HIPAA-compliant healthcare platform with patient records, appointment scheduling, and telemedicine features.',
      techStack: ['Django', 'React', 'PostgreSQL', 'Docker', 'AWS'],
      liveUrl: null,
      repoUrl: null,
      imageUrl: null,
      featured: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: '4',
      title: 'Fintech Payment Platform',
      description: 'Real-time payment processing system with multi-currency support, fraud detection, and banking integrations.',
      techStack: ['Node.js', 'FastAPI', 'MongoDB', 'Redis', 'Kubernetes'],
      liveUrl: null,
      repoUrl: null,
      imageUrl: null,
      featured: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: '5',
      title: 'AI RAG Pipeline',
      description: 'Retrieval-augmented generation system with semantic search, embeddings, and intelligent document processing.',
      techStack: ['Python', 'FastAPI', 'LangChain', 'ChromaDB', 'Next.js'],
      liveUrl: null,
      repoUrl: 'https://github.com/MALULEKE-KS/ai-rag-pipeline',
      imageUrl: null,
      featured: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: '6',
      title: 'SaaS Analytics Dashboard',
      description: 'Real-time analytics platform with custom dashboards, automated reporting, and business intelligence features.',
      techStack: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind CSS', 'Vercel'],
      liveUrl: null,
      repoUrl: null,
      imageUrl: null,
      featured: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ]);
  isLoading = signal(false);
  isError = signal(false);
  isSuccess = signal(true);
  skeletons = [1, 2, 3];

  ngOnInit(): void {}
  
  readonly ExternalLink = ExternalLink;
  readonly Github = Github;
  readonly FolderOpen = FolderOpen;
}
