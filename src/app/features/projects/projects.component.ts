import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

import { LucideAngularModule, Github, ExternalLink, ArrowRight, CheckCircle, Lock, Play, Star, Zap, Globe, Code, Database } from 'lucide-angular';

@Component({
    selector: 'app-projects',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterLink, LucideAngularModule],
    template: `
    <div class="min-h-screen bg-paper">
      <!-- Page Hero -->
      <section class="min-h-[60vh] flex flex-col justify-center items-center text-center px-6 pt-20 pb-12 bg-gradient-to-b from-amber-50/20 to-paper relative overflow-hidden">
        <div class="absolute inset-0 pointer-events-none">
          <div class="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-100/20 rounded-full blur-[100px]"></div>
        </div>
        <div class="relative z-10 max-w-3xl mx-auto">
          <p class="text-xs font-bold tracking-[0.3em] uppercase text-gold mb-4 font-mono">Portfolio</p>
          <h1 class="text-5xl sm:text-6xl font-bold font-serif text-ink mb-4">Projects & Systems</h1>
          <p class="text-lg text-muted max-w-xl mx-auto leading-relaxed">Production-grade platforms designed to solve real problems. Built through KSDRILL-SA and GrowthCore Solutions.</p>
        </div>
      </section>

      <!-- KSDRILL-SA Section -->
      <section class="px-6 py-16 bg-paper">
        <div class="max-w-5xl mx-auto">
          <!-- Org Header -->
          <div class="flex items-start gap-4 mb-8 pb-8 border-b border-ink/10">
            <div class="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg shrink-0">K</div>
            <div class="flex-1">
              <div class="flex items-center gap-3 mb-1">
                <h2 class="text-2xl font-bold font-serif text-ink">KSDRILL-SA</h2>
                <span class="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-semibold rounded-full">Active</span>
              </div>
              <p class="text-sm text-muted font-mono mb-2">github.com/KSDRILL-SA</p>
              <p class="text-muted leading-relaxed max-w-2xl">Technology studio building 4 production-grade systems in fintech, GovTech, EdTech, and social infrastructure.</p>
            </div>
            <a href="https://github.com/KSDRILL-SA" target="_blank" rel="noopener noreferrer"
               class="flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:underline shrink-0 mt-1">
              GitHub <lucide-icon [img]="ExternalLink" class="w-3.5 h-3.5"></lucide-icon>
            </a>
          </div>

          <!-- Status Badges -->
          <div class="flex flex-wrap gap-3 mb-10">
            <span class="inline-flex items-center gap-1.5 px-4 py-2 bg-green-50 text-green-700 text-sm font-semibold rounded-full">
              <lucide-icon [img]="CheckCircle" class="w-4 h-4"></lucide-icon> System Design: Complete
            </span>
            <span class="inline-flex items-center gap-1.5 px-4 py-2 bg-green-50 text-green-700 text-sm font-semibold rounded-full">
              <lucide-icon [img]="Lock" class="w-4 h-4"></lucide-icon> Architecture: Locked
            </span>
            <span class="inline-flex items-center gap-1.5 px-4 py-2 bg-amber-50 text-amber-700 text-sm font-semibold rounded-full">
              <lucide-icon [img]="Play" class="w-4 h-4"></lucide-icon> Build: Q2 2026
            </span>
          </div>

          <!-- System Cards -->
          <div class="space-y-6">
            @for (sys of ksdrillSystems; track sys.name) {
              <div class="rounded-2xl border-2 p-8 bg-white hover:shadow-xl transition-all duration-300" [class]="getHoverBorderClass(sys.colorClass)">
                <div class="flex flex-col sm:flex-row sm:items-start gap-6">
                  <!-- Left: Meta -->
                  <div class="sm:w-48 shrink-0">
                    <div class="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-white text-sm mb-3" [class]="getBgClass(sys.colorClass)">
                      {{ sys.name.charAt(0) }}
                    </div>
                    <h3 class="font-bold text-ink text-lg mb-1 leading-tight">{{ sys.name }}</h3>
                    <p class="text-xs font-mono" [class]="getTextClass(sys.colorClass)">{{ sys.category }}</p>
                  </div>
                  <!-- Right: Content -->
                  <div class="flex-1">
                    <div class="grid sm:grid-cols-2 gap-4 mb-5">
                      <div>
                        <p class="text-xs font-bold uppercase tracking-wider text-ink/40 mb-1">Problem</p>
                        <p class="text-sm text-muted leading-relaxed">{{ sys.problem }}</p>
                      </div>
                      <div>
                        <p class="text-xs font-bold uppercase tracking-wider text-ink/40 mb-1">Solution</p>
                        <p class="text-sm text-muted leading-relaxed">{{ sys.solution }}</p>
                      </div>
                    </div>
                    <div class="flex flex-wrap gap-2 mb-5">
                      @for (tech of sys.stack; track tech) {
                        <span class="px-3 py-1 bg-ink text-paper text-xs rounded-lg font-mono">{{ tech }}</span>
                      }
                    </div>
                    <div class="flex flex-wrap items-center gap-3">
                      <span class="text-xs font-semibold text-green-700 bg-green-50 px-3 py-1 rounded-full">Design: Complete</span>
                      <span class="text-xs font-semibold text-amber-700 bg-amber-50 px-3 py-1 rounded-full">Build: {{ sys.buildStart }}</span>
                      <span class="text-xs font-semibold px-3 py-1 rounded-full" [class]="getTargetBadgeClass(sys.colorClass)">Target: {{ sys.target }}</span>
                      <a [href]="sys.repo" target="_blank" rel="noopener noreferrer"
                         class="ml-auto flex items-center gap-1 text-xs font-medium text-muted hover:text-ink">
                        <lucide-icon [img]="Github" class="w-3.5 h-3.5"></lucide-icon> Source
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            }
          </div>

          <!-- System Design Template Banner -->
          <div class="mt-8 p-8 rounded-2xl bg-ink text-white">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <lucide-icon [img]="Star" class="w-6 h-6 text-gold"></lucide-icon>
              </div>
              <div class="flex-1">
                <h3 class="font-bold text-white text-lg mb-2">System Design Template</h3>
                <p class="text-white/60 text-sm mb-4 leading-relaxed">Every platform is built under a locked constitutional framework — 10 constitutions, 355 rules covering team process, code quality, and production deployment.</p>
                <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                  <code class="text-xs bg-white/10 px-4 py-2 rounded-lg font-mono overflow-x-auto">git clone https://github.com/MALULEKE-KS/system-design-template.git</code>
                  <a href="https://github.com/MALULEKE-KS/system-design-template" target="_blank" rel="noopener noreferrer"
                     class="flex items-center gap-1.5 text-sm font-semibold text-gold hover:text-gold2 shrink-0">
                    View <lucide-icon [img]="ExternalLink" class="w-3.5 h-3.5"></lucide-icon>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- GrowthCore Section -->
      <section class="px-6 py-16 bg-[#fafafa]">
        <div class="max-w-5xl mx-auto">
          <div class="flex items-start gap-4 mb-8 pb-8 border-b border-ink/10">
            <div class="w-16 h-16 rounded-2xl bg-[#FF6B6B] flex items-center justify-center text-white font-bold text-2xl shadow-lg shrink-0">G</div>
            <div class="flex-1">
              <div class="flex items-center gap-3 mb-1">
                <h2 class="text-2xl font-bold font-serif text-ink">GrowthCore Solutions</h2>
                <span class="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-semibold rounded-full">Active</span>
              </div>
              <p class="text-sm text-muted font-mono mb-2">github.com/GrowthCore-Solutions</p>
              <p class="text-muted leading-relaxed max-w-2xl">Digital growth organization. Web development, marketing campaigns, customer acquisition, and analytics to drive measurable growth.</p>
            </div>
            <a href="https://github.com/GrowthCore-Solutions" target="_blank" rel="noopener noreferrer"
               class="flex items-center gap-1.5 text-sm font-medium text-[#FF6B6B] hover:underline shrink-0 mt-1">
              GitHub <lucide-icon [img]="ExternalLink" class="w-3.5 h-3.5"></lucide-icon>
            </a>
          </div>

          <div class="rounded-2xl border-2 border-[#FF6B6B]/30 bg-white p-8">
            <div class="flex items-start justify-between mb-4">
              <div>
                <h3 class="font-bold text-ink text-xl">Sunduza Architectural & Projects</h3>
                <p class="text-xs text-muted font-mono mt-1">github.com/GrowthCore-Solutions</p>
              </div>
              <span class="px-3 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-full shrink-0">Active — GrowthCore</span>
            </div>
            <p class="text-muted leading-relaxed mb-6">Sunduza Architectural & Projects (Pty) Ltd is an established South African architectural and construction company with over 5 years in business, serving a national market. GrowthCore manages their digital presence.</p>
            <div class="grid sm:grid-cols-2 gap-3 mb-6">
              @for (svc of sunduzaServices; track svc.title) {
                <div class="p-4 bg-[#fafafa] rounded-xl">
                  <h4 class="font-semibold text-ink text-sm mb-1">{{ svc.title }}</h4>
                  <p class="text-xs text-muted leading-relaxed">{{ svc.desc }}</p>
                </div>
              }
            </div>
            <div class="flex flex-wrap gap-2">
              @for (tag of ['Established Company', 'Real Projects', 'Registered Pty Ltd', 'National Market']; track tag) {
                <span class="px-3 py-1 bg-[#FF6B6B]/10 text-[#FF6B6B] text-xs font-semibold rounded-full">{{ tag }}</span>
              }
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="px-6 py-20 bg-gold text-paper">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-3xl font-bold font-serif mb-4">Want to build something together?</h2>
          <p class="text-lg mb-8 opacity-90">Open to full-time, part-time, contract, and remote engineering work.</p>
          <a routerLink="/contact"
             class="inline-flex items-center gap-2 px-8 py-4 bg-ink text-paper font-bold rounded-xl hover:bg-ink/80 transition-all min-h-[52px] shadow-lg">
            Get in Touch <lucide-icon [img]="ArrowRight" class="w-5 h-5"></lucide-icon>
          </a>
        </div>
      </section>
    </div>
  `
})
export class ProjectsComponent {
  readonly Github = Github;
  readonly ExternalLink = ExternalLink;
  readonly ArrowRight = ArrowRight;
  readonly CheckCircle = CheckCircle;
  readonly Lock = Lock;
  readonly Play = Play;
  readonly Star = Star;
  readonly Zap = Zap;
  readonly Globe = Globe;
  readonly Code = Code;
  readonly Database = Database;

  ksdrillSystems = [
    {
      name: 'FundsLink Academy', category: 'National Education Funding Platform', colorClass: 'blue-600',
      repo: 'https://github.com/KSDRILL-SA/fundslink-academy',
      problem: '342,000+ students are excluded yearly due to fragmented bursary applications across NSFAS, SETA, and private bursaries.',
      solution: 'A unified platform that aggregates all funding sources — bursaries, NSFAS, SETA funds, and scholarships — into a single intelligent application flow with AI-powered eligibility matching.',
      stack: ['Angular', 'FastAPI', 'Python', 'PostgreSQL', 'LangChain', 'ChromaDB'],
      buildStart: 'Q2 2026', target: 'Q3 2026',
    },
    {
      name: 'Maphophe Community System', category: 'Digital Governance for Villages', colorClass: 'green-600',
      repo: 'https://github.com/KSDRILL-SA/maphophe-community-system',
      problem: 'Rural villages have no digital infrastructure — community announcements are verbal, service requests are lost, and governance decisions go undocumented.',
      solution: 'A village-level governance platform enabling structured announcements, trackable service requests, community voting, and ward-level reporting.',
      stack: ['Next.js', 'NextAuth.js', 'PostgreSQL', 'Prisma'],
      buildStart: 'Q3 2026', target: 'Q4 2026',
    },
    {
      name: 'KSDRILL Reserve Bank', category: 'Discipline-Driven Savings Banking', colorClass: 'blue-800',
      repo: 'https://github.com/KSDRILL-SA/ksdrill-reserve-bank',
      problem: 'Most people save inconsistently because tools are passive — no enforced discipline, no goal visibility, no consequence for breaking habits.',
      solution: 'A structured digital savings platform with enforced deposit schedules, savings goals with real-time progress, interest tracking, and lock periods.',
      stack: ['Angular', 'FastAPI', 'Python', 'PostgreSQL', 'Redis'],
      buildStart: 'Q4 2026', target: 'Q1 2027',
    },
    {
      name: 'SyncUp', category: 'Creator Collaboration Platform', colorClass: 'orange-500',
      repo: 'https://github.com/KSDRILL-SA/syncup',
      problem: 'Creators waste time in unstructured DM negotiations — no standard process for pitching, protecting ideas, or formalising agreements.',
      solution: 'A structured collaboration platform with template-based pitch flows, a 10-message negotiation limit to force decisions, and drop-based subscription management.',
      stack: ['Next.js', 'NextAuth.js', 'PostgreSQL', 'Redis'],
      buildStart: 'Q1 2027', target: 'Q2 2027',
    },
  ];

  sunduzaServices = [
    { title: 'House Planning', desc: 'Thoughtful layouts designed for comfort, functionality, and modern living.' },
    { title: 'Architectural Drawings', desc: 'Professional drawings for planning and building decisions.' },
    { title: 'Drafting Services', desc: 'Accurate drafting to match project requirements.' },
    { title: 'Development Planning', desc: 'Planning support with clarity, structure, and direction.' },
  ];

  private readonly colorStyles: Record<string, { hover: string; bg: string; text: string; badge: string }> = {
    'blue-600': { hover: 'hover:border-blue-600', bg: 'bg-blue-600', text: 'text-blue-600', badge: 'text-blue-700 bg-blue-50' },
    'green-600': { hover: 'hover:border-green-600', bg: 'bg-green-600', text: 'text-green-600', badge: 'text-green-700 bg-green-50' },
    'blue-800': { hover: 'hover:border-blue-800', bg: 'bg-blue-800', text: 'text-blue-800', badge: 'text-blue-800 bg-blue-50' },
    'orange-500': { hover: 'hover:border-orange-500', bg: 'bg-orange-500', text: 'text-orange-500', badge: 'text-orange-700 bg-orange-50' },
  };

  getHoverBorderClass(colorClass: string): string {
    return this.colorStyles[colorClass]?.hover || 'hover:border-gray-300';
  }
  getBgClass(colorClass: string): string {
    return this.colorStyles[colorClass]?.bg || 'bg-gray-500';
  }
  getTextClass(colorClass: string): string {
    return this.colorStyles[colorClass]?.text || 'text-gray-600';
  }
  getTargetBadgeClass(colorClass: string): string {
    return this.colorStyles[colorClass]?.badge || 'text-gray-700 bg-gray-50';
  }
}
