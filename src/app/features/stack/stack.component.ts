import { Component, ChangeDetectionStrategy } from '@angular/core';

import { LucideAngularModule, ArrowRight } from 'lucide-angular';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-stack',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [LucideAngularModule, RouterLink],
    template: `
    <div class="min-h-screen bg-paper pt-20 pb-16">
      <section class="px-6 pb-16">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl sm:text-5xl font-bold font-serif text-ink mb-3">Technical Stack</h1>
          <p class="text-muted">Locked technology choices — each tool selected for a specific reason.</p>
        </div>
      </section>

      <section class="px-6 pb-16">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-xs font-bold uppercase tracking-widest text-muted mb-6 text-center font-mono">Framework Assignment Logic</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="p-6 rounded-2xl border-2 border-ink/10 bg-white hover:border-ink/30 transition-all">
              <div class="w-12 h-12 rounded-xl bg-ink flex items-center justify-center text-white font-bold text-xl mb-4">N</div>
              <h3 class="font-bold text-ink text-lg mb-2">Next.js Systems</h3>
              <p class="text-sm text-muted mb-3">Maphophe &middot; SyncUp</p>
              <p class="text-sm text-muted leading-relaxed">Content-driven &middot; SEO-critical &middot; Full-stack unified codebase. Built-in API routes and NextAuth cover all needs without a separate backend.</p>
            </div>
            <div class="p-6 rounded-2xl border-2 border-red-500/20 bg-white hover:border-red-500/40 transition-all">
              <div class="w-12 h-12 rounded-xl bg-red-500 flex items-center justify-center text-white font-bold text-xl mb-4">A</div>
              <h3 class="font-bold text-ink text-lg mb-2">Angular Systems</h3>
              <p class="text-sm text-muted mb-3">This Portfolio</p>
              <p class="text-sm text-muted leading-relaxed">Complex client-side state &middot; Heavy data entry &middot; Form-intensive workflows. RxJS streams and Angular Signals handle intricate client state with precision.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="px-6 pb-16">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-xs font-bold uppercase tracking-widest text-muted mb-6 text-center font-mono">Complete Technology Map</h2>
          <div class="space-y-6">
            <div class="rounded-2xl border-2 border-ink/10 bg-white overflow-hidden">
              <div class="px-6 py-4 border-b border-ink/10 flex items-center gap-3 bg-ink text-white">
                <span class="text-xs font-bold font-mono">01</span>
                <span class="font-bold">Core Infrastructure</span>
              </div>
              <div class="p-6">
                <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
                  @for (tech of coreInfra; track tech.name) {
                    <div class="flex items-center gap-2 text-sm text-muted"><span class="w-1.5 h-1.5 rounded-full bg-ink flex-shrink-0"></span>{{ tech.name }}</div>
                  }
                </div>
              </div>
            </div>
            <div class="rounded-2xl border-2 border-ink/10 bg-white overflow-hidden">
              <div class="px-6 py-4 border-b border-ink/10 flex items-center gap-3 bg-ink text-white">
                <span class="text-xs font-bold font-mono">02</span>
                <span class="font-bold">AI & Intelligence</span>
              </div>
              <div class="p-6">
                <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
                  @for (tech of aiIntelligence; track tech.name) {
                    <div class="flex items-center gap-2 text-sm text-muted"><span class="w-1.5 h-1.5 rounded-full bg-purple-600 flex-shrink-0"></span>{{ tech.name }}</div>
                  }
                </div>
              </div>
            </div>
            <div class="rounded-2xl border-2 border-ink/10 bg-white overflow-hidden">
              <div class="px-6 py-4 border-b border-ink/10 flex items-center gap-3 bg-ink text-white">
                <span class="text-xs font-bold font-mono">03</span>
                <span class="font-bold">Data Layer</span>
              </div>
              <div class="p-6">
                <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
                  @for (tech of dataLayer; track tech.name) {
                    <div class="flex items-center gap-2 text-sm text-muted"><span class="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></span>{{ tech.name }}</div>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="px-6 pb-16">
        <div class="max-w-4xl mx-auto text-center">
          <a routerLink="/philosophy" class="inline-flex items-center gap-2 text-gold font-semibold hover:text-ink transition-colors">
            See the decision framework behind these choices <lucide-icon [img]="ArrowRight" class="w-4 h-4"></lucide-icon>
          </a>
        </div>
      </section>
    </div>
  `
})
export class StackComponent {
  readonly ArrowRight = ArrowRight;
  coreInfra = [
    { name: 'TypeScript' }, { name: 'Next.js 15' }, { name: 'Angular 18' },
    { name: 'Tailwind CSS' }, { name: 'Node.js' }, { name: 'Python' },
    { name: 'FastAPI' }, { name: 'Prisma ORM' },
  ];
  aiIntelligence = [
    { name: 'LangChain' }, { name: 'OpenAI API' }, { name: 'RAG Systems' },
    { name: 'ChromaDB' }, { name: 'Pinecone' }, { name: 'AI Agents' },
  ];
  dataLayer = [
    { name: 'PostgreSQL' }, { name: 'MongoDB' }, { name: 'Redis' },
    { name: 'Prisma' }, { name: 'Neon (Serverless)' }, { name: 'Upstash' },
  ];
}
