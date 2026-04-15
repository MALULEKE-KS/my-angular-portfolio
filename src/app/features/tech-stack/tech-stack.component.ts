import { Component, ChangeDetectionStrategy } from '@angular/core';

import { LucideAngularModule, Code, Database, Cloud, Bot, Layers, Cpu, Server, Shield, Zap, Wrench, Cog } from 'lucide-angular';

@Component({
    selector: 'app-tech-stack',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [LucideAngularModule],
    template: `
    <div class="min-h-screen bg-paper">
      <!-- Hero -->
      <section class="py-20 px-6 bg-ink text-white text-center">
        <p class="text-xs font-bold tracking-widest uppercase text-gold mb-4 font-mono">Systems Architecture — Q2 2026</p>
        <h1 class="text-4xl sm:text-5xl font-bold font-serif text-white mb-4">Technical Stack</h1>
        <p class="text-gray-400 text-lg max-w-xl mx-auto">Locked technology choices — each tool selected for a specific reason.</p>
      </section>

      <!-- Stack Grid -->
      <section class="py-16 px-6">
        <div class="max-w-6xl mx-auto">

          <!-- Skill Categories -->
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 mb-16">
            @for (cat of categories; track cat.title) {
              <div class="rounded-2xl border border-ink/10 bg-white p-6 hover:shadow-lg transition-all hover:-translate-y-1">
                <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-5" [style.background]="cat.bg">
                  <lucide-icon [img]="cat.icon" class="w-6 h-6" [style.color]="cat.color"></lucide-icon>
                </div>
                <h3 class="text-lg font-bold font-serif text-ink mb-1">{{ cat.title }}</h3>
                <p class="text-xs text-gray-400 mb-4">{{ cat.subtitle }}</p>
                <div class="flex flex-wrap gap-2">
                  @for (tech of cat.tech; track tech) {
                    <span class="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-mono">{{ tech }}</span>
                  }
                </div>
              </div>
            }
          </div>

          <!-- Architecture Flow -->
          <div class="mb-16">
            <h2 class="text-2xl font-bold font-serif text-ink mb-8 text-center">Architecture by Platform</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div class="rounded-2xl border-2 border-blue-500/20 bg-white p-8 hover:border-blue-500/50 transition-all">
                <div class="flex items-center gap-3 mb-6">
                  <div class="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">N</div>
                  <div>
                    <h3 class="font-bold text-ink text-lg">Next.js Systems</h3>
                    <p class="text-xs text-gray-400 font-mono">Maphophe · SyncUp</p>
                  </div>
                </div>
                <div class="space-y-2.5">
                  @for (layer of nextJsLayers; track layer.name) {
                    <div class="flex items-center gap-3">
                      <div class="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                        <span class="text-xs font-bold text-blue-600">{{ layer.initial }}</span>
                      </div>
                      <span class="text-sm text-gray-700">{{ layer.name }}</span>
                    </div>
                  }
                </div>
                <div class="mt-5 pt-4 border-t border-ink/10">
                  <p class="text-xs text-gray-400">Content-driven · SEO-critical · Full-stack unified · Vercel</p>
                </div>
              </div>

              <div class="rounded-2xl border-2 border-gold/20 bg-white p-8 hover:border-gold/50 transition-all">
                <div class="flex items-center gap-3 mb-6">
                  <div class="w-12 h-12 rounded-xl bg-gold flex items-center justify-center text-white font-bold text-xl shadow-lg">A</div>
                  <div>
                    <h3 class="font-bold text-ink text-lg">Angular + FastAPI</h3>
                    <p class="text-xs text-gray-400 font-mono">FundsLink Academy · Reserve Bank</p>
                  </div>
                </div>
                <div class="space-y-2.5">
                  @for (layer of angularLayers; track layer.name) {
                    <div class="flex items-center gap-3">
                      <div class="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                        <span class="text-xs font-bold text-gold">{{ layer.initial }}</span>
                      </div>
                      <span class="text-sm text-gray-700">{{ layer.name }}</span>
                    </div>
                  }
                </div>
                <div class="mt-5 pt-4 border-t border-ink/10">
                  <p class="text-xs text-gray-400">Enterprise-grade · AI-powered · Precision-critical · Vercel + Railway</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Tools -->
          <div class="rounded-2xl border border-ink/10 bg-white p-8">
            <div class="flex items-center gap-3 mb-6">
              <lucide-icon [img]="Wrench" class="w-6 h-6 text-gold"></lucide-icon>
              <h2 class="text-xl font-bold font-serif text-ink">Tools & Best Practices</h2>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-5 gap-3">
              @for (tool of tools; track tool) {
                <div class="flex items-center gap-2 px-4 py-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                  <lucide-icon [img]="Cog" class="w-4 h-4 text-gray-400 shrink-0"></lucide-icon>
                  <span class="text-sm text-gray-700">{{ tool }}</span>
                </div>
              }
            </div>
          </div>

        </div>
      </section>
    </div>
  `
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
  readonly Wrench = Wrench;
  readonly Cog = Cog;

  categories = [
    {
      title: 'Languages', subtitle: 'Core programming languages',
      icon: this.Code, color: '#b8860b', bg: 'rgba(184,134,11,0.1)',
      tech: ['TypeScript', 'Python', 'SQL', 'Bash/Shell', 'HTML5', 'CSS3']
    },
    {
      title: 'Frontend', subtitle: 'UI frameworks & styling',
      icon: this.Layers, color: '#2563eb', bg: 'rgba(37,99,235,0.1)',
      tech: ['Angular 18', 'Next.js 14', 'React', 'Tailwind CSS', 'Custom CSS']
    },
    {
      title: 'Backend', subtitle: 'API & server logic',
      icon: this.Server, color: '#009688', bg: 'rgba(0,150,136,0.1)',
      tech: ['FastAPI', 'Next.js API', 'Node.js', 'Django', 'REST', 'GraphQL']
    },
    {
      title: 'Databases', subtitle: 'Data storage & ORM',
      icon: this.Database, color: '#4169E1', bg: 'rgba(65,105,225,0.1)',
      tech: ['PostgreSQL', 'Prisma', 'MongoDB', 'Redis', 'Firebase']
    },
    {
      title: 'DevOps & Cloud', subtitle: 'Deployment & infrastructure',
      icon: this.Cloud, color: '#2496ED', bg: 'rgba(36,150,237,0.1)',
      tech: ['Docker', 'AWS', 'GitHub Actions', 'Linux', 'Nginx', 'Vercel']
    },
    {
      title: 'AI & Machine Learning', subtitle: 'AI integration & tooling',
      icon: this.Cpu, color: '#1C3C3C', bg: 'rgba(28,60,60,0.1)',
      tech: ['LangChain', 'OpenAI API', 'RAG Systems', 'ChromaDB', 'Pinecone']
    },
  ];

  nextJsLayers = [
    { name: 'React · Tailwind · Custom CSS · shadcn/ui', initial: 'FE' },
    { name: 'NextAuth.js — session management', initial: 'AU' },
    { name: 'Built-in API Routes — no separate server', initial: 'API' },
    { name: 'PostgreSQL via Prisma ORM', initial: 'DB' },
    { name: 'BullMQ + Redis — timers · scheduled jobs', initial: 'JQ' },
    { name: 'Vercel — one-click deployment', initial: 'DE' },
  ];

  angularLayers = [
    { name: 'Angular · TypeScript · Tailwind · Custom CSS', initial: 'FE' },
    { name: 'FastAPI (Python) — dedicated backend', initial: 'API' },
    { name: 'JWT — stateless token auth', initial: 'AU' },
    { name: 'PostgreSQL via Prisma ORM', initial: 'DB' },
    { name: 'MongoDB + Mongoose', initial: 'DOC' },
    { name: 'LangChain · ChromaDB — AI Engine', initial: 'AI' },
    { name: 'BullMQ + Redis — Reserve Bank jobs', initial: 'JQ' },
    { name: 'Vercel (Angular) · Railway (FastAPI)', initial: 'DE' },
  ];

  tools = ['Git', 'VS Code', 'Docker Compose', 'Postman', 'Vercel', 'Railway', 'Stripe', 'NextAuth.js', 'Playwright', 'Vitest'];
}
