import { Component, inject } from '@angular/core';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { ScrollRevealStaggerDirective } from '../../shared/directives/scroll-reveal-stagger.directive';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, ArrowRight, Check } from 'lucide-angular';

@Component({
  selector: 'app-philosophy',
  standalone: true,
  imports: [CommonModule, RouterLink, LucideAngularModule, ScrollRevealDirective, ScrollRevealStaggerDirective],
  template: `
    <div class="min-h-screen bg-paper pt-20 pb-16">
      <section class="px-6 pb-12">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl sm:text-5xl font-bold font-serif text-[#181717] mb-3">System Design Philosophy</h1>
          <p class="text-[#374151]">How I think about building software — principles over hype.</p>
        </div>
      </section>

      <section class="px-6 pb-16">
        <div class="max-w-4xl mx-auto">
          <div class="space-y-6">
            <div class="rounded-2xl border-2 border-[#181717]/10 bg-white p-8 md:p-10">
              <h2 class="text-xl font-bold text-[#181717] mb-6 pb-4 border-b border-[#181717]/10">Architecture</h2>
              <div class="space-y-4">
                <div class="flex items-start gap-3">
                  <lucide-icon [img]="Check" class="w-5 h-5 text-[#B8860B] flex-shrink-0 mt-0.5"></lucide-icon>
                  <p class="text-[#374151] text-sm leading-relaxed">Production systems need to be boring. Reliable infrastructure, predictable behavior, and straightforward debugging trump novelty.</p>
                </div>
                <div class="flex items-start gap-3">
                  <lucide-icon [img]="Check" class="w-5 h-5 text-[#B8860B] flex-shrink-0 mt-0.5"></lucide-icon>
                  <p class="text-[#374151] text-sm leading-relaxed">Architecture should match the problem. Distributed microservices make sense at scale; a well-structured monolith handles most early-stage products better.</p>
                </div>
                <div class="flex items-start gap-3">
                  <lucide-icon [img]="Check" class="w-5 h-5 text-[#B8860B] flex-shrink-0 mt-0.5"></lucide-icon>
                  <p class="text-[#374151] text-sm leading-relaxed">Data gravity is real. Push compute to where the data lives. Keep related services close to reduce latency and operational complexity.</p>
                </div>
              </div>
            </div>

            <div class="rounded-2xl border-2 border-[#181717]/10 bg-white p-8 md:p-10">
              <h2 class="text-xl font-bold text-[#181717] mb-6 pb-4 border-b border-[#181717]/10">Code Standards</h2>
              <div class="space-y-4">
                <div class="flex items-start gap-3">
                  <lucide-icon [img]="Check" class="w-5 h-5 text-[#B8860B] flex-shrink-0 mt-0.5"></lucide-icon>
                  <p class="text-[#374151] text-sm leading-relaxed">Explicit over implicit. Prefer readable, traceable logic over clever shortcuts. Code is read far more than it is written.</p>
                </div>
                <div class="flex items-start gap-3">
                  <lucide-icon [img]="Check" class="w-5 h-5 text-[#B8860B] flex-shrink-0 mt-0.5"></lucide-icon>
                  <p class="text-[#374151] text-sm leading-relaxed">TypeScript across all JavaScript environments — frontend, backend, scripts, and tooling. One type system eliminates an entire class of bugs.</p>
                </div>
                <div class="flex items-start gap-3">
                  <lucide-icon [img]="Check" class="w-5 h-5 text-[#B8860B] flex-shrink-0 mt-0.5"></lucide-icon>
                  <p class="text-[#374151] text-sm leading-relaxed">Testing as documentation. Tests that read like specifications serve as executable documentation and prevent regression without slowing velocity when done well.</p>
                </div>
              </div>
            </div>

            <div class="rounded-2xl border-2 border-[#181717]/10 bg-white p-8 md:p-10">
              <h2 class="text-xl font-bold text-[#181717] mb-6 pb-4 border-b border-[#181717]/10">Project Intake Logic</h2>
              <div class="overflow-x-auto">
                <table class="w-full text-sm">
                  <thead>
                    <tr class="border-b border-[#181717]/10">
                      <th class="text-left py-3 px-4 font-bold text-[#181717]">Signal</th>
                      <th class="text-left py-3 px-4 font-bold text-[#181717]">Technology</th>
                      <th class="text-left py-3 px-4 font-bold text-[#181717]">Why</th>
                    </tr>
                  </thead>
                  <tbody class="text-[#374151]">
                    @for (row of intakeLogic; track row.signal) {
                      <tr class="border-b border-[#181717]/5 hover:bg-[#181717]/[0.02]">
                        <td class="py-3 px-4 font-medium">{{ row.signal }}</td>
                        <td class="py-3 px-4">{{ row.tech }}</td>
                        <td class="py-3 px-4 text-xs">{{ row.why }}</td>
                      </tr>
                    }
                  </tbody>
                </table>
              </div>
            </div>

            <div class="rounded-2xl border-2 border-[#181717]/10 bg-white p-8 md:p-10">
              <h2 class="text-xl font-bold text-[#181717] mb-6 pb-4 border-b border-[#181717]/10">Non-Negotiables</h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                @for (item of nonNegotiables; track item) {
                  <div class="flex items-center gap-3">
                    <lucide-icon [img]="Check" class="w-5 h-5 text-[#B8860B] flex-shrink-0"></lucide-icon>
                    <span class="text-[#374151] text-sm">{{ item }}</span>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="px-6 pb-16">
        <div class="max-w-4xl mx-auto text-center">
          <a routerLink="/contact" class="inline-flex items-center gap-2 text-[#B8860B] font-semibold hover:text-[#181717] transition-colors">
            Start a conversation <lucide-icon [img]="ArrowRight" class="w-4 h-4"></lucide-icon>
          </a>
        </div>
      </section>
    </div>
  `,
})
export class PhilosophyComponent {
  readonly ArrowRight = ArrowRight;
  readonly Check = Check;
  intakeLogic = [
    { signal: 'Content + SEO', tech: 'Next.js', why: 'SSR + ISR for Google indexing' },
    { signal: 'Complex client state', tech: 'Angular', why: 'RxJS + Signals for heavy reactive flows' },
    { signal: 'AI endpoints', tech: 'FastAPI', why: 'Async Python + native LLM library support' },
    { signal: 'AI RAG pipelines', tech: 'LangChain + ChromaDB', why: 'Document chunking + embedding search' },
    { signal: 'Heavy data entry', tech: 'Django + React', why: 'Admin panel + DRF for internal tools' },
    { signal: 'Transactional data', tech: 'PostgreSQL', why: 'ACID + relational integrity' },
    { signal: 'Document storage', tech: 'MongoDB', why: 'Flexible schema + JSON-native API' },
    { signal: 'Caching + queues', tech: 'Redis', why: 'Sub-ms reads + job queuing via BullMQ' },
    { signal: 'AI embeddings', tech: 'Pinecone', why: 'Managed vector search at scale' },
    { signal: 'Form-heavy flows', tech: 'Angular Reactive Forms', why: 'Complex validation without boilerplate' },
  ];
  nonNegotiables = [
    'TypeScript across every layer',
    'Semantic HTML for accessibility',
    'Mobile-first responsive design',
    'Performance budgets on every route',
    'HTTPS enforced on all connections',
    'Rate limiting on all public endpoints',
    'Input validation client and server',
    'Sensible error handling and logging',
    'GitHub Actions CI/CD on every push',
    'Separation of config and secrets',
  ];
}
