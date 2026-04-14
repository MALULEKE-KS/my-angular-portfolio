import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { LucideAngularModule, ExternalLink, Github, ArrowLeft, Calendar, FolderOpen } from 'lucide-angular';

interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  liveUrl: string | null;
  repoUrl: string | null;
  imageUrl: string | null;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}

const PROJECTS: Project[] = [
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
];

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, LucideAngularModule],
  template: `
    <div class="min-h-screen bg-paper py-20 px-4">
      @if (project()) {
        <div class="max-w-3xl mx-auto">
          <!-- Back -->
          <a routerLink="/projects" class="inline-flex items-center gap-2 text-muted hover:text-gold transition-colors mb-8">
            <lucide-icon [img]="ArrowLeft" class="w-4 h-4"></lucide-icon>
            Back to Projects
          </a>

          <!-- Hero Image -->
          @if (project()!.imageUrl) {
            <div class="aspect-video rounded-2xl overflow-hidden mb-8 border border-ink/10">
              <img loading="lazy" [src]="project()!.imageUrl" [alt]="project()!.title" class="w-full h-full object-cover">
            </div>
          } @else {
            <div class="aspect-video rounded-2xl bg-gradient-to-br from-gold/20 to-amber-100/30 flex items-center justify-center mb-8 border border-ink/10">
              <lucide-icon [img]="FolderOpen" class="w-20 h-20 text-gold/30"></lucide-icon>
            </div>
          }

          <!-- Header -->
          <div class="mb-6">
            <h1 class="text-3xl sm:text-4xl font-bold font-serif text-ink mb-3">{{ project()!.title }}</h1>
            <div class="flex items-center gap-2 text-muted text-sm">
              <lucide-icon [img]="Calendar" class="w-4 h-4"></lucide-icon>
              <span>Updated {{ project()!.updatedAt | date:'mediumDate' }}</span>
              @if (project()!.featured) {
                <span class="ml-2 px-2 py-0.5 bg-gold/10 text-gold rounded-full text-xs font-medium">Featured</span>
              }
            </div>
          </div>

          <!-- Description -->
          <p class="text-lg text-muted leading-relaxed mb-8">{{ project()!.description }}</p>

          <!-- Tech Stack -->
          <div class="mb-8">
            <h2 class="text-xl font-bold font-serif text-ink mb-4">Tech Stack</h2>
            <div class="flex flex-wrap gap-2">
              @for (tech of project()!.techStack; track tech) {
                <span class="px-4 py-2 bg-ink text-paper rounded-lg text-sm font-mono">{{ tech }}</span>
              }
            </div>
          </div>

          <!-- Links -->
          <div class="flex flex-wrap gap-4 pt-6 border-t border-ink/10">
            @if (project()!.liveUrl) {
              <a [href]="project()!.liveUrl" target="_blank"
                 class="inline-flex items-center gap-2 px-6 py-3 bg-gold text-paper font-bold rounded-xl hover:bg-gold2 transition-colors">
                <lucide-icon [img]="ExternalLink" class="w-5 h-5"></lucide-icon>
                View Live
              </a>
            }
            @if (project()!.repoUrl) {
              <a [href]="project()!.repoUrl" target="_blank"
                 class="inline-flex items-center gap-2 px-6 py-3 border-2 border-ink text-ink font-bold rounded-xl hover:bg-ink hover:text-paper transition-colors">
                <lucide-icon [img]="Github" class="w-5 h-5"></lucide-icon>
                View Code
              </a>
            }
          </div>
        </div>
      } @else {
        <div class="max-w-3xl mx-auto text-center py-20">
          <lucide-icon [img]="FolderOpen" class="w-16 h-16 text-muted/40 mx-auto mb-4"></lucide-icon>
          <h2 class="text-2xl font-bold font-serif text-ink mb-2">Project Not Found</h2>
          <p class="text-muted mb-8">This project doesn't exist or has been removed.</p>
          <a routerLink="/projects" class="inline-flex items-center gap-2 px-6 py-3 bg-gold text-paper font-bold rounded-xl hover:bg-gold2 transition-colors">
            <lucide-icon [img]="ArrowLeft" class="w-4 h-4"></lucide-icon>
            Browse Projects
          </a>
        </div>
      }
    </div>
  `,
})
export class ProjectDetailComponent {
  private route = inject(ActivatedRoute);
  project = signal<Project | null>(null);

  readonly ArrowLeft = ArrowLeft;
  readonly ExternalLink = ExternalLink;
  readonly Github = Github;
  readonly Calendar = Calendar;
  readonly FolderOpen = FolderOpen;

  constructor() {
    const id = this.route.snapshot.paramMap.get('id');
    this.project.set(PROJECTS.find(p => p.id === id) ?? null);
  }
}
