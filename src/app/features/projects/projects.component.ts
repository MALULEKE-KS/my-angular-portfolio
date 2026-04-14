import { Component, inject, signal } from '@angular/core';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { ScrollRevealStaggerDirective } from '../../shared/directives/scroll-reveal-stagger.directive';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Github, ExternalLink, ArrowRight, CheckCircle, Lock, Play, Star } from 'lucide-angular';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterLink, LucideAngularModule, ScrollRevealDirective, ScrollRevealStaggerDirective],
  template: `
    <div class="min-h-screen bg-paper pt-20 pb-16">
      <section class="px-6 pb-12">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl sm:text-5xl font-bold font-serif text-[#181717] mb-3">Projects & Systems</h1>
          <p class="text-[#374151]">Organized by GitHub organization. All flagship systems in sequential build phase.</p>
        </div>
      </section>

      <section class="px-6">
        <div class="max-w-4xl mx-auto">
          <div class="flex gap-6 mb-8 border-b border-[#181717]/10">
            <button (click)="activeTab.set('ksdrill')"
                    [class]="activeTab() === 'ksdrill' ? 'text-blue-600 border-b-2 border-blue-600 pb-3 font-semibold text-sm' : 'text-[#374151] pb-3 text-sm hover:text-[#181717]'">
              KSDRILL-SA
            </button>
            <button (click)="activeTab.set('growthcore')"
                    [class]="activeTab() === 'growthcore' ? 'text-[#FF6B6B] border-b-2 border-[#FF6B6B] pb-3 font-semibold text-sm' : 'text-[#374151] pb-3 text-sm hover:text-[#181717]'">
              GrowthCore Solutions
            </button>
          </div>

          @if (activeTab() === 'ksdrill') {
            <div>
              <div class="flex items-center gap-3 mb-2">
                <div class="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">K</div>
                <div>
                  <h2 class="text-xl font-bold text-[#181717]">KSDRILL-SA</h2>
                  <a href="https://github.com/KSDRILL-SA" target="_blank" rel="noopener" class="text-xs text-[#374151] font-mono hover:text-blue-600">github.com/KSDRILL-SA</a>
                </div>
              </div>
              <p class="text-sm text-[#374151] mb-6 leading-relaxed">Technology organization. 4 flagship systems fully designed and entering sequential build phase.</p>

              <div class="flex flex-wrap gap-3 mb-10">
                <span class="flex items-center gap-1.5 px-3 py-1.5 bg-green-50 text-green-700 text-xs font-semibold rounded-full">
                  <lucide-icon [img]="CheckCircle" class="w-3.5 h-3.5"></lucide-icon> Design: COMPLETE
                </span>
                <span class="flex items-center gap-1.5 px-3 py-1.5 bg-green-50 text-green-700 text-xs font-semibold rounded-full">
                  <lucide-icon [img]="Lock" class="w-3.5 h-3.5"></lucide-icon> Architecture: LOCKED
                </span>
                <span class="flex items-center gap-1.5 px-3 py-1.5 bg-orange-50 text-orange-700 text-xs font-semibold rounded-full">
                  <lucide-icon [img]="Play" class="w-3.5 h-3.5"></lucide-icon> Build: STARTING Q2 2026
                </span>
              </div>

              <div class="space-y-6">
                @for (sys of ksdrillSystems; track sys.name) {
                  <div class="rounded-2xl border-2 p-6 bg-white" [class]="'hover:border-' + sys.colorClass + '/60 transition-all border-' + sys.colorClass + '/30'">
                    <div class="flex items-start justify-between mb-4">
                      <div class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-white text-sm bg-[#181717]">K</div>
                        <div>
                          <h3 class="font-bold text-[#181717] text-lg">{{ sys.name }}</h3>
                          <p class="text-xs font-mono text-blue-600">{{ sys.category }}</p>
                        </div>
                      </div>
                      <a [href]="sys.repo" target="_blank" rel="noopener" class="flex items-center gap-1 text-xs text-[#374151] hover:text-[#181717]">
                        <lucide-icon [img]="Github" class="w-4 h-4"></lucide-icon> Source
                      </a>
                    </div>
                    <div class="mb-3">
                      <span class="text-xs font-bold uppercase tracking-wider text-[#181717]/50">Problem</span>
                      <p class="text-sm text-[#374151] mt-1 leading-relaxed">{{ sys.problem }}</p>
                    </div>
                    <div class="mb-4">
                      <span class="text-xs font-bold uppercase tracking-wider text-[#181717]/50">Solution</span>
                      <p class="text-sm text-[#374151] mt-1 leading-relaxed">{{ sys.solution }}</p>
                    </div>
                    <div class="flex flex-wrap gap-2 mb-4">
                      @for (tech of sys.stack; track tech) {
                        <span class="px-2.5 py-1 bg-[#f3f4f6] text-[#374151] text-xs rounded-md font-mono">{{ tech }}</span>
                      }
                    </div>
                    <div class="p-4 bg-[#f8f9fa] rounded-xl mb-4">
                      <span class="text-xs font-bold uppercase tracking-wider text-[#181717]/50 mb-3 block">Architecture</span>
                      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                        @for (layer of sys.archLayers; track layer.label) {
                          <div>
                            <span class="font-semibold text-[#181717] block mb-0.5">{{ layer.label }}</span>
                            <span class="text-[#374151]">{{ layer.detail }}</span>
                          </div>
                        }
                      </div>
                    </div>
                    <div class="flex flex-wrap gap-3 text-xs font-medium">
                      <span class="px-2.5 py-1 rounded-full bg-green-100 text-green-700">Design: COMPLETE</span>
                      <span class="px-2.5 py-1 rounded-full bg-orange-100 text-orange-700">Build: {{ sys.buildStart }}</span>
                      <span class="px-2.5 py-1 rounded-full bg-blue-100 text-blue-700">Target: {{ sys.target }}</span>
                    </div>
                  </div>
                }

                <div class="p-6 rounded-2xl border-2 border-[#181717]/10 bg-[#181717] text-white">
                  <div class="flex items-start gap-4">
                    <div class="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                      <lucide-icon [img]="Star" class="w-5 h-5 text-blue-400"></lucide-icon>
                    </div>
                    <div>
                      <h3 class="font-bold mb-2">System Design Template</h3>
                      <p class="text-sm text-white/70 mb-4 leading-relaxed">Every platform is built under a locked constitutional framework — 10 constitutions, 355 rules covering team process, code quality, and production deployment.</p>
                      <code class="text-xs bg-white/10 px-3 py-2 rounded-lg block mb-3 font-mono overflow-x-auto block">git clone https://github.com/MALULEKE-KS/system-design-template.git .system-design</code>
                      <a href="https://github.com/MALULEKE-KS/system-design-template" target="_blank" rel="noopener" class="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:text-blue-300">
                        View on GitHub <lucide-icon [img]="ExternalLink" class="w-3.5 h-3.5"></lucide-icon>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }

          @if (activeTab() === 'growthcore') {
            <div>
              <div class="flex items-center gap-3 mb-2">
                <div class="w-12 h-12 rounded-xl bg-[#FF6B6B] flex items-center justify-center text-white font-bold text-xl shadow-lg">G</div>
                <div>
                  <h2 class="text-xl font-bold text-[#181717]">GrowthCore Solutions</h2>
                  <a href="https://github.com/GrowthCore-Solutions" target="_blank" rel="noopener" class="text-xs text-[#374151] font-mono hover:text-[#FF6B6B]">github.com/GrowthCore-Solutions</a>
                </div>
              </div>
              <p class="text-sm text-[#374151] mb-8 leading-relaxed">Digital growth organization. Web development, marketing campaigns, customer acquisition, and analytics. With Ngoneni Mponisi Forever.</p>

              <div class="rounded-2xl border-2 border-[#FF6B6B]/30 bg-white p-6">
                <div class="flex items-start justify-between mb-4">
                  <div>
                    <h3 class="font-bold text-[#181717] text-lg">Sunduza Architectural & Projects</h3>
                    <p class="text-xs text-[#374151] font-mono">github.com/GrowthCore-Solutions</p>
                  </div>
                  <span class="px-3 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-full">Active — GrowthCore mandate</span>
                </div>
                <p class="text-sm text-[#374151] mb-4 leading-relaxed">Sunduza Architectural & Projects (Pty) Ltd is an established South African architectural and construction company with over 5 years in business, serving a national market. GrowthCore manages their digital presence.</p>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                  @for (svc of sunduzaServices; track svc.title) {
                    <div class="p-3 bg-[#f8f9fa] rounded-xl">
                      <h4 class="font-semibold text-[#181717] text-sm mb-1">{{ svc.title }}</h4>
                      <p class="text-xs text-[#374151] leading-relaxed">{{ svc.desc }}</p>
                    </div>
                  }
                </div>
                <div class="flex flex-wrap gap-2 text-xs">
                  @for (tag of ['Established Company', 'Real Projects', 'Registered Pty Ltd', 'National Market']; track tag) {
                    <span class="px-2.5 py-1 bg-[#FF6B6B]/10 text-[#FF6B6B] rounded-full font-medium">{{ tag }}</span>
                  }
                </div>
              </div>
            </div>
          }
        </div>
      </section>

      <section class="px-6 py-16 bg-[#181717] text-white text-center mt-12">
        <div class="max-w-2xl mx-auto">
          <h2 class="text-2xl font-bold font-serif mb-3">Want to build something?</h2>
          <p class="text-white/70 mb-8">Open to full-time, part-time, contract, and remote engineering opportunities.</p>
          <a routerLink="/contact" class="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-lg min-h-[52px]">
            Get in Touch <lucide-icon [img]="ArrowRight" class="w-5 h-5"></lucide-icon>
          </a>
        </div>
      </section>
    </div>
  `,
})
export class ProjectsComponent {
  activeTab = signal<'ksdrill' | 'growthcore'>('ksdrill');
  readonly Github = Github;
  readonly ExternalLink = ExternalLink;
  readonly ArrowRight = ArrowRight;
  readonly CheckCircle = CheckCircle;
  readonly Lock = Lock;
  readonly Play = Play;
  readonly Star = Star;

  ksdrillSystems = [
    {
      name: 'FundsLink Academy', category: 'National Education Funding Platform', colorClass: 'blue-600',
      repo: 'https://github.com/KSDRILL-SA/fundslink-academy',
      problem: '342,000+ students excluded yearly due to fragmented bursary applications and unused funding sources across NSFAS, SETA, and private bursaries.',
      solution: 'A unified application platform that aggregates all funding sources — bursaries, NSFAS, SETA funds, scholarships, and emergency support — into a single intelligent application flow with AI-powered eligibility matching.',
      stack: ['Angular', 'FastAPI', 'Python', 'PostgreSQL', 'LangChain', 'ChromaDB'],
      archLayers: [
        { label: 'Frontend', detail: 'Angular · Reactive Forms · Role Guards' },
        { label: 'Backend', detail: 'FastAPI (Python) · JWT Auth' },
        { label: 'Data + AI', detail: 'PostgreSQL (Prisma) · LangChain · ChromaDB' },
      ],
      buildStart: 'Q2 2026', target: 'Q3 2026',
    },
    {
      name: 'Maphophe Community System', category: 'Digital Governance for Villages', colorClass: 'green-600',
      repo: 'https://github.com/KSDRILL-SA/maphophe-community-system',
      problem: 'Rural villages have no digital infrastructure — community announcements are made verbally, service requests get lost, and governance decisions are undocumented.',
      solution: 'A village-level governance platform enabling structured announcements, trackable service requests, community voting, and ward-level reporting — bringing accountability to local governance.',
      stack: ['Next.js', 'NextAuth.js', 'PostgreSQL', 'Prisma'],
      archLayers: [
        { label: 'Frontend', detail: 'Next.js · SSR · PWA · Role Guards' },
        { label: 'API', detail: 'Next.js API Routes · NextAuth.js' },
        { label: 'Database', detail: 'PostgreSQL (Prisma)' },
      ],
      buildStart: 'Q3 2026', target: 'Q4 2026',
    },
    {
      name: 'KSDRILL Reserve Bank', category: 'Discipline-Driven Savings Banking', colorClass: 'blue-800',
      repo: 'https://github.com/KSDRILL-SA/ksdrill-reserve-bank',
      problem: 'Most people save inconsistently because the tools are passive. No enforced discipline, no goal visibility, and no consequence for breaking savings habits.',
      solution: 'A structured digital savings platform with enforced deposit schedules, savings goals with real-time progress, interest tracking, and lock periods — built to build financial discipline.',
      stack: ['Angular', 'FastAPI', 'Python', 'PostgreSQL', 'Redis'],
      archLayers: [
        { label: 'Frontend', detail: 'Angular · Reactive Forms · Live Balance' },
        { label: 'Backend', detail: 'FastAPI (Python) · Interest Engine' },
        { label: 'Jobs + Data', detail: 'PostgreSQL · BullMQ + Redis' },
      ],
      buildStart: 'Q4 2026', target: 'Q1 2027',
    },
    {
      name: 'SyncUp', category: 'Creator Collaboration Platform', colorClass: 'orange-500',
      repo: 'https://github.com/KSDRILL-SA/syncup',
      problem: "Creators waste time in unstructured DM negotiations. No standard process for pitching collaborations, protecting ideas, or formalising agreements.",
      solution: 'A structured collaboration platform with template-based pitch flows, a 10-message negotiation limit to force decisions, privacy controls, and drop-based subscription management.',
      stack: ['Next.js', 'NextAuth.js', 'PostgreSQL', 'Redis'],
      archLayers: [
        { label: 'Frontend', detail: 'Next.js · SSR · Real-time UI' },
        { label: 'API', detail: 'Next.js API Routes · NextAuth.js' },
        { label: 'Scheduling', detail: 'PostgreSQL · BullMQ + Redis' },
      ],
      buildStart: 'Q1 2027', target: 'Q2 2027',
    },
  ];

  sunduzaServices = [
    { title: 'House Planning', desc: 'Thoughtful layouts designed for comfort, functionality, and modern living.' },
    { title: 'Architectural Drawings', desc: 'Professional drawings for planning and building decisions.' },
    { title: 'Drafting Services', desc: 'Accurate drafting to match project requirements.' },
    { title: 'Development Planning', desc: 'Planning support with clarity, structure, and direction.' },
  ];
}
