import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, ExternalLink, Github, FolderOpen, ArrowRight } from 'lucide-angular';
import { ProjectCardComponent } from '../../shared/components/project-card/project-card.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterLink, LucideAngularModule, ProjectCardComponent],
  template: `
    <div class="min-h-screen bg-paper py-16 px-4">
      <div class="max-w-6xl mx-auto">

        <!-- Page header -->
        <div class="text-center mb-16">
          <h1 class="text-4xl sm:text-5xl font-bold font-serif text-ink mb-3">Projects</h1>
          <p class="text-lg text-muted max-w-2xl mx-auto">
            Production-grade systems across fintech, SaaS, healthcare, and enterprise — designed and built one at a time.
          </p>
        </div>

        <!-- Portfolio projects grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 stagger-children">
          @for (project of portfolioProjects; track project.id) {
            <app-project-card [project]="project" />
          }
        </div>

        <!-- Flagship systems -->
        <div class="mt-8">
          <div class="text-center mb-10">
            <h2 class="text-2xl sm:text-3xl font-bold font-serif text-ink mb-3">Flagship Systems</h2>
            <p class="text-muted text-base max-w-xl mx-auto">
              Four platforms designed and being built with constitutional governance — one system at a time.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-children">

            <!-- FundsLink Academy -->
            <div class="card p-7 relative overflow-hidden group">
              <div class="absolute top-0 left-0 w-full h-1 bg-[#2563EB]"></div>
              <div class="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h3 class="text-xl font-bold font-serif text-ink group-hover:text-[#2563EB] transition-colors">
                    FundsLink Academy
                  </h3>
                  <p class="text-xs font-semibold text-[#2563EB] mt-0.5">Angular · FastAPI · Python · PostgreSQL · LangChain</p>
                </div>
                <span class="badge badge-gold shrink-0">In Design</span>
              </div>
              <p class="text-sm text-muted leading-relaxed mb-5">
                National education funding platform — unifies bursaries, NSFAS, SETA funds into a single intelligent application flow with AI-powered eligibility matching. Target: Q3 2026.
              </p>
              <div class="flex flex-wrap gap-2 mb-5">
                <span class="skill-tag text-xs">Angular 18</span>
                <span class="skill-tag text-xs">FastAPI</span>
                <span class="skill-tag text-xs">Python</span>
                <span class="skill-tag text-xs">LangChain</span>
                <span class="skill-tag text-xs">PostgreSQL</span>
                <span class="skill-tag text-xs">ChromaDB</span>
              </div>
              <a href="https://github.com/KSDRILL-SA/fundslink-academy" target="_blank" rel="noopener noreferrer"
                 class="link-arrow text-sm">
                View Repository
                <lucide-icon [img]="ArrowRight" class="w-4 h-4"></lucide-icon>
              </a>
            </div>

            <!-- Maphophe Community -->
            <div class="card p-7 relative overflow-hidden group">
              <div class="absolute top-0 left-0 w-full h-1 bg-[#25D366]"></div>
              <div class="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h3 class="text-xl font-bold font-serif text-ink group-hover:text-[#25D366] transition-colors">
                    Maphophe Community System
                  </h3>
                  <p class="text-xs font-semibold text-[#25D366] mt-0.5">Next.js · NextAuth.js · PostgreSQL · Prisma</p>
                </div>
                <span class="badge badge-gold shrink-0">In Design</span>
              </div>
              <p class="text-sm text-muted leading-relaxed mb-5">
                Digital governance platform for rural villages — structured announcements, trackable service requests, community voting, and ward-level reporting. Target: Q4 2026.
              </p>
              <div class="flex flex-wrap gap-2 mb-5">
                <span class="skill-tag text-xs">Next.js 14</span>
                <span class="skill-tag text-xs">NextAuth.js</span>
                <span class="skill-tag text-xs">PostgreSQL</span>
                <span class="skill-tag text-xs">Prisma</span>
                <span class="skill-tag text-xs">PWA</span>
              </div>
              <a href="https://github.com/KSDRILL-SA/maphophe-community-system" target="_blank" rel="noopener noreferrer"
                 class="link-arrow text-sm">
                View Repository
                <lucide-icon [img]="ArrowRight" class="w-4 h-4"></lucide-icon>
              </a>
            </div>

            <!-- KSDRILL Reserve Bank -->
            <div class="card p-7 relative overflow-hidden group">
              <div class="absolute top-0 left-0 w-full h-1 bg-[#0A66C2]"></div>
              <div class="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h3 class="text-xl font-bold font-serif text-ink group-hover:text-[#0A66C2] transition-colors">
                    KSDRILL Reserve Bank
                  </h3>
                  <p class="text-xs font-semibold text-[#0A66C2] mt-0.5">Angular · FastAPI · Python · PostgreSQL · Redis</p>
                </div>
                <span class="badge badge-gold shrink-0">In Design</span>
              </div>
              <p class="text-sm text-muted leading-relaxed mb-5">
                Discipline-driven savings banking — enforced deposit schedules, savings goals with real-time progress, interest tracking, and lock periods. Target: Q1 2027.
              </p>
              <div class="flex flex-wrap gap-2 mb-5">
                <span class="skill-tag text-xs">Angular 18</span>
                <span class="skill-tag text-xs">FastAPI</span>
                <span class="skill-tag text-xs">BullMQ</span>
                <span class="skill-tag text-xs">Redis</span>
                <span class="skill-tag text-xs">PostgreSQL</span>
              </div>
              <a href="https://github.com/KSDRILL-SA/ksdrill-reserve-bank" target="_blank" rel="noopener noreferrer"
                 class="link-arrow text-sm">
                View Repository
                <lucide-icon [img]="ArrowRight" class="w-4 h-4"></lucide-icon>
              </a>
            </div>

            <!-- SyncUp -->
            <div class="card p-7 relative overflow-hidden group">
              <div class="absolute top-0 left-0 w-full h-1 bg-[#FF6F00]"></div>
              <div class="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h3 class="text-xl font-bold font-serif text-ink group-hover:text-[#FF6F00] transition-colors">
                    SyncUp
                  </h3>
                  <p class="text-xs font-semibold text-[#FF6F00] mt-0.5">Next.js · NextAuth.js · PostgreSQL · BullMQ</p>
                </div>
                <span class="badge badge-gold shrink-0">In Design</span>
              </div>
              <p class="text-sm text-muted leading-relaxed mb-5">
                Creator collaboration platform — template-based pitch flows, 10-message negotiation limit, privacy controls, and drop-based subscription management. Target: Q2 2027.
              </p>
              <div class="flex flex-wrap gap-2 mb-5">
                <span class="skill-tag text-xs">Next.js 14</span>
                <span class="skill-tag text-xs">NextAuth.js</span>
                <span class="skill-tag text-xs">BullMQ</span>
                <span class="skill-tag text-xs">Redis</span>
                <span class="skill-tag text-xs">PostgreSQL</span>
              </div>
              <a href="https://github.com/KSDRILL-SA/syncup" target="_blank" rel="noopener noreferrer"
                 class="link-arrow text-sm">
                View Repository
                <lucide-icon [img]="ArrowRight" class="w-4 h-4"></lucide-icon>
              </a>
            </div>

          </div>
        </div>

        <!-- Companies -->
        <div class="mt-16 pt-12 border-t border-ink/10">
          <div class="text-center mb-8">
            <h2 class="text-xl font-bold font-serif text-ink mb-2">My Companies</h2>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div class="card p-6 text-center">
              <div class="w-10 h-10 rounded-lg bg-[#2563EB]/10 flex items-center justify-center mx-auto mb-3">
                <span class="text-[#2563EB] font-bold text-sm">K</span>
              </div>
              <h3 class="font-bold font-serif text-ink mb-1">KSDRILL-SA</h3>
              <p class="text-xs text-muted mb-3">Technology Studio</p>
              <p class="text-sm text-muted leading-relaxed mb-4">
                Full-stack engineering, AI integration, and production deployment across multiple industries.
              </p>
              <a href="https://github.com/KSDRILL-SA" target="_blank" rel="noopener noreferrer"
                 class="link-arrow text-sm">
                <lucide-icon [img]="Github" class="w-4 h-4"></lucide-icon>
                View Organization
              </a>
            </div>
            <div class="card p-6 text-center">
              <div class="w-10 h-10 rounded-lg bg-[#FF6B6B]/10 flex items-center justify-center mx-auto mb-3">
                <span class="text-[#FF6B6B] font-bold text-sm">G</span>
              </div>
              <h3 class="font-bold font-serif text-ink mb-1">GrowthCore Solutions</h3>
              <p class="text-xs text-muted mb-3">Digital Growth Agency</p>
              <p class="text-sm text-muted leading-relaxed mb-4">
                Web development, marketing campaigns, customer acquisition, and analytics.
              </p>
              <a href="https://github.com/GrowthCore-Solutions" target="_blank" rel="noopener noreferrer"
                 class="link-arrow text-sm">
                <lucide-icon [img]="Github" class="w-4 h-4"></lucide-icon>
                View Organization
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  `,
})
export class ProjectsComponent {
  readonly ExternalLink = ExternalLink;
  readonly Github = Github;
  readonly FolderOpen = FolderOpen;
  readonly ArrowRight = ArrowRight;

  portfolioProjects = [
    {
      id: '1',
      title: 'my-angular-portfolio',
      description: 'Angular portfolio with standalone components, lazy loading, Tailwind CSS, and custom CSS for heavy visual work. Live on Vercel.',
      techStack: ['Angular 18', 'TypeScript', 'Tailwind CSS', 'Custom CSS', 'Lucide Icons'],
      liveUrl: 'https://my-angular-portfolio.vercel.app',
      repoUrl: 'https://github.com/MALULEKE-KS/my-angular-portfolio',
      imageUrl: null,
      featured: true,
    },
    {
      id: '2',
      title: 'my-nextjs-portfolio',
      description: 'Next.js portfolio with NextAuth, API routes, and server-side rendering. Live on Vercel.',
      techStack: ['Next.js 14', 'TypeScript', 'NextAuth.js', 'Tailwind CSS'],
      liveUrl: 'https://my-nextjs-portfolio.vercel.app',
      repoUrl: 'https://github.com/MALULEKE-KS/my-nextjs-portfolio',
      imageUrl: null,
      featured: true,
    },
    {
      id: '3',
      title: 'GrowthCore Solutions',
      description: 'Digital growth agency platform with AI-powered analytics, automation tools, and enterprise-grade scalability.',
      techStack: ['Next.js', 'FastAPI', 'PostgreSQL', 'Redis', 'LangChain'],
      liveUrl: 'https://growthcore-solutions.vercel.app',
      repoUrl: 'https://github.com/GrowthCore-Solutions',
      imageUrl: null,
      featured: true,
    },
    {
      id: '4',
      title: 'AI RAG Pipeline',
      description: 'Retrieval-augmented generation system with semantic search, embeddings, and intelligent document processing.',
      techStack: ['Python', 'FastAPI', 'LangChain', 'ChromaDB', 'Next.js'],
      repoUrl: 'https://github.com/MALULEKE-KS/ai-rag-pipeline',
      imageUrl: null,
      featured: false,
    },
  ];
}