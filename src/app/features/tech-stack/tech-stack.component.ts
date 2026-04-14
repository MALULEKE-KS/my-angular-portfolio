import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Code, Database, Cloud, Bot, Layers, Cpu, Server, Shield, Zap } from 'lucide-angular';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <div class="min-h-screen bg-paper py-16 px-4">
      <div class="max-w-6xl mx-auto">

        <div class="text-center mb-16">
          <h1 class="text-4xl sm:text-5xl font-bold font-serif text-ink mb-3">Technical Stack</h1>
          <p class="text-lg text-muted max-w-2xl mx-auto">
            Locked technology stack — built across all flagship systems
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">

          <!-- Languages -->
          <div class="card p-6">
            <div class="w-12 h-12 rounded-xl bg-[#b8860b]/10 flex items-center justify-center mb-5">
              <lucide-icon [img]="Code" class="w-6 h-6 text-gold"></lucide-icon>
            </div>
            <h3 class="text-lg font-bold font-serif text-ink mb-4">Languages</h3>
            <div class="flex flex-wrap gap-2">
              <span class="skill-tag">TypeScript</span>
              <span class="skill-tag">Python</span>
              <span class="skill-tag">SQL</span>
              <span class="skill-tag">Bash/Shell</span>
              <span class="skill-tag">HTML5</span>
              <span class="skill-tag">CSS3</span>
            </div>
          </div>

          <!-- Frontend -->
          <div class="card p-6">
            <div class="w-12 h-12 rounded-xl bg-[#2563EB]/10 flex items-center justify-center mb-5">
              <lucide-icon [img]="Layers" class="w-6 h-6 text-[#2563EB]"></lucide-icon>
            </div>
            <h3 class="text-lg font-bold font-serif text-ink mb-4">Frontend</h3>
            <div class="flex flex-wrap gap-2">
              <span class="skill-tag">Angular 18</span>
              <span class="skill-tag">Next.js 14</span>
              <span class="skill-tag">React</span>
              <span class="skill-tag">Tailwind CSS</span>
              <span class="skill-tag">Custom CSS</span>
              <span class="skill-tag">shadcn/ui</span>
            </div>
          </div>

          <!-- Backend -->
          <div class="card p-6">
            <div class="w-12 h-12 rounded-xl bg-[#009688]/10 flex items-center justify-center mb-5">
              <lucide-icon [img]="Server" class="w-6 h-6 text-[#009688]"></lucide-icon>
            </div>
            <h3 class="text-lg font-bold font-serif text-ink mb-4">Backend</h3>
            <div class="flex flex-wrap gap-2">
              <span class="skill-tag">FastAPI</span>
              <span class="skill-tag">Next.js API</span>
              <span class="skill-tag">Node.js</span>
              <span class="skill-tag">Django</span>
              <span class="skill-tag">REST APIs</span>
              <span class="skill-tag">GraphQL</span>
            </div>
          </div>

          <!-- Databases -->
          <div class="card p-6">
            <div class="w-12 h-12 rounded-xl bg-[#4169E1]/10 flex items-center justify-center mb-5">
              <lucide-icon [img]="Database" class="w-6 h-6 text-[#4169E1]"></lucide-icon>
            </div>
            <h3 class="text-lg font-bold font-serif text-ink mb-4">Databases</h3>
            <div class="flex flex-wrap gap-2">
              <span class="skill-tag">PostgreSQL</span>
              <span class="skill-tag">Prisma ORM</span>
              <span class="skill-tag">MongoDB</span>
              <span class="skill-tag">Redis</span>
              <span class="skill-tag">Firebase</span>
            </div>
          </div>

          <!-- DevOps & Cloud -->
          <div class="card p-6">
            <div class="w-12 h-12 rounded-xl bg-[#2496ED]/10 flex items-center justify-center mb-5">
              <lucide-icon [img]="Cloud" class="w-6 h-6 text-[#2496ED]"></lucide-icon>
            </div>
            <h3 class="text-lg font-bold font-serif text-ink mb-4">DevOps & Cloud</h3>
            <div class="flex flex-wrap gap-2">
              <span class="skill-tag">Docker</span>
              <span class="skill-tag">AWS</span>
              <span class="skill-tag">GitHub Actions</span>
              <span class="skill-tag">Linux</span>
              <span class="skill-tag">Nginx</span>
              <span class="skill-tag">Vercel</span>
            </div>
          </div>

          <!-- AI & ML -->
          <div class="card p-6">
            <div class="w-12 h-12 rounded-xl bg-[#1C3C3C]/10 flex items-center justify-center mb-5">
              <lucide-icon [img]="Cpu" class="w-6 h-6 text-[#1C3C3C]"></lucide-icon>
            </div>
            <h3 class="text-lg font-bold font-serif text-ink mb-4">AI & Machine Learning</h3>
            <div class="flex flex-wrap gap-2">
              <span class="skill-tag">LangChain</span>
              <span class="skill-tag">OpenAI API</span>
              <span class="skill-tag">RAG Systems</span>
              <span class="skill-tag">ChromaDB</span>
              <span class="skill-tag">Pinecone</span>
            </div>
          </div>

        </div>

        <!-- Architecture Flow -->
        <div class="mt-16">
          <h2 class="text-2xl font-bold font-serif text-ink mb-6 text-center">Architecture Flow</h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

            <!-- Next.js Systems -->
            <div class="card p-8">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-10 h-10 rounded-lg bg-[#000] flex items-center justify-center">
                  <span class="text-white font-bold text-xs">N</span>
                </div>
                <div>
                  <h3 class="font-bold font-serif text-ink">Next.js Systems</h3>
                  <p class="text-xs text-muted">Maphophe Community · SyncUp</p>
                </div>
              </div>
              <div class="space-y-2">
                @for (layer of nextJsLayers; track layer.name) {
                  <div class="flex items-center gap-3">
                    <div class="w-6 h-6 rounded bg-ink/5 flex items-center justify-center shrink-0">
                      <span class="text-[10px] font-bold text-muted">{{ layer.initial }}</span>
                    </div>
                    <span class="text-sm text-muted">{{ layer.name }}</span>
                  </div>
                }
              </div>
              <div class="mt-4 pt-4 border-t border-ink/10">
                <p class="text-xs text-muted">Content-driven · SEO-critical · Full-stack unified codebase · Vercel deployment</p>
              </div>
            </div>

            <!-- Angular + FastAPI Systems -->
            <div class="card p-8">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-10 h-10 rounded-lg bg-[#DD0031] flex items-center justify-center">
                  <span class="text-white font-bold text-xs">A</span>
                </div>
                <div>
                  <h3 class="font-bold font-serif text-ink">Angular + FastAPI Systems</h3>
                  <p class="text-xs text-muted">FundsLink Academy · KSDRILL Reserve Bank</p>
                </div>
              </div>
              <div class="space-y-2">
                @for (layer of angularLayers; track layer.name) {
                  <div class="flex items-center gap-3">
                    <div class="w-6 h-6 rounded bg-gold/10 flex items-center justify-center shrink-0">
                      <span class="text-[10px] font-bold text-gold">{{ layer.initial }}</span>
                    </div>
                    <span class="text-sm text-muted">{{ layer.name }}</span>
                  </div>
                }
              </div>
              <div class="mt-4 pt-4 border-t border-ink/10">
                <p class="text-xs text-muted">Enterprise-grade · AI-powered · Precision-critical · Vercel + Railway deployment</p>
              </div>
            </div>

          </div>
        </div>

        <!-- Tools & Practices -->
        <div class="mt-12">
          <h2 class="text-2xl font-bold font-serif text-ink mb-6 text-center">Tools & Best Practices</h2>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 stagger-children">
            @for (tool of tools; track tool) {
              <div class="card p-4 text-center">
                <span class="text-sm font-medium text-ink">{{ tool }}</span>
              </div>
            }
          </div>
        </div>

      </div>
    </div>
  `,
})
export class TechStackComponent {
  readonly Code = Code;
  readonly Database = Database;
  readonly Cloud = Cloud;
  readonly Bot = Bot;
  readonly Layers = Layers;
  readonly Cpu = Cpu;
  readonly Server = Server;
  readonly Shield = Shield;
  readonly Zap = Zap;

  nextJsLayers = [
    { name: 'React · Tailwind · Custom CSS · shadcn/ui', initial: 'FE' },
    { name: 'NextAuth.js — session management', initial: 'AU' },
    { name: 'Built-in API Routes — no separate server', initial: 'API' },
    { name: 'PostgreSQL via Prisma ORM', initial: 'DB' },
    { name: 'BullMQ + Redis — timers · scheduled jobs', initial: 'JQ' },
    { name: 'Vercel — one-click deployment', initial: 'DE' },
  ];

  angularLayers = [
    { name: 'Angular · TypeScript · Tailwind · Custom CSS · Reactive Forms', initial: 'FE' },
    { name: 'FastAPI (Python) — dedicated backend', initial: 'API' },
    { name: 'JWT — stateless token auth', initial: 'AU' },
    { name: 'PostgreSQL via Prisma ORM', initial: 'DB' },
    { name: 'MongoDB + Mongoose', initial: 'DOC' },
    { name: 'LangChain · ChromaDB — AI Engine (FundsLink only)', initial: 'AI' },
    { name: 'BullMQ + Redis — Reserve Bank', initial: 'JQ' },
    { name: 'Vercel (Angular) · Railway (FastAPI)', initial: 'DE' },
  ];

  tools = ['Git', 'VS Code', 'Docker Compose', 'Postman', 'Vercel', 'Railway', 'Stripe', 'NextAuth.js', 'Playwright', 'Vitest'];
}
