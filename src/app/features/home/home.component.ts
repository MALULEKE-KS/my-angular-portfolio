import { Component, OnInit, OnDestroy, signal, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { ScrollRevealStaggerDirective } from '../../shared/directives/scroll-reveal-stagger.directive';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Github, Linkedin, Mail, ExternalLink, ArrowRight, MapPin, GraduationCap, Code, Globe, Zap, Users } from 'lucide-angular';

const TYPING_LINES = [
  'Software Engineer designing AI-driven systems',
  'Next.js | Angular | FastAPI | Python',
  'Building Reliable & Scalable Platforms',
  'BSc Computer Science + Mathematics',
  'African Roots | Global Impact',
];

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, LucideAngularModule, ScrollRevealDirective, ScrollRevealStaggerDirective],
  template: `
    <!-- HERO -->
    <section class="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 pb-16 bg-paper relative overflow-hidden">
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>
      <div class="relative z-10 max-w-3xl mx-auto">
        <p class="text-sm font-medium text-blue-600 tracking-widest uppercase mb-4 font-mono">
          Maluleke Kurhula Success
        </p>
        <div class="relative mx-auto mb-8 w-44 h-44 sm:w-52 sm:h-52">
            <div class="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-blue-600 via-purple-500 to-blue-400 opacity-40 blur-sm"></div>
            <div class="relative w-full h-full rounded-[1.75rem] overflow-hidden border-4 border-blue-600 shadow-2xl ring-4 ring-blue-600/30 profile-img-hover">
              <img src="/assets/profile.jpeg" alt="Kurhula Success Maluleke" class="w-full h-full object-cover object-top" loading="eager" />
            </div>
            <div class="absolute -top-2 -right-2 flex items-center justify-center w-7 h-7 bg-blue-600 rounded-full border-2 border-paper shadow-lg">
              <lucide-icon [img]="Zap" class="w-3.5 h-3.5 text-white"></lucide-icon>
            </div>
          </div>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#181717] mb-4 leading-tight font-serif">
          Software Engineer<br>
          <span class="text-blue-600">AI-Integrated Systems</span>
        </h1>
        <p class="text-lg text-[#374151] mb-8 max-w-xl mx-auto leading-relaxed">
          Designing and building practical digital systems that solve real-world challenges.
        </p>
        <!-- Rotating tagline -->
        <div class="h-14 flex items-center justify-center mb-10">
          <p class="text-lg sm:text-xl font-semibold text-[#374151] font-mono transition-opacity duration-300">
            {{ currentLine() }}
          </p>
        </div>
        <!-- CTAs -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a routerLink="/projects"
             class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 min-h-[52px]">
            View Projects
            <lucide-icon [img]="ArrowRight" class="w-5 h-5"></lucide-icon>
          </a>
          <a routerLink="/contact"
             class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#181717] text-white font-semibold rounded-xl hover:bg-[#374151] transition-all min-h-[52px]">
            Contact Me
            <lucide-icon [img]="Mail" class="w-5 h-5"></lucide-icon>
          </a>
        </div>
        <!-- Socials -->
        <div class="flex flex-wrap justify-center gap-3">
          <a href="https://github.com/MALULEKE-KS" target="_blank" rel="noopener"
             class="flex items-center gap-2 px-5 py-2.5 bg-[#181717] text-white text-sm font-medium rounded-lg hover:bg-[#374151] transition-all">
            <lucide-icon [img]="Github" class="w-4 h-4"></lucide-icon>
            GitHub
          </a>
          <a href="https://za.linkedin.com/in/kurhula-success-maluleke-32153231a" target="_blank" rel="noopener"
             class="flex items-center gap-2 px-5 py-2.5 bg-[#0A66C2] text-white text-sm font-medium rounded-lg hover:bg-[#084c94] transition-all">
            <lucide-icon [img]="Linkedin" class="w-4 h-4"></lucide-icon>
            LinkedIn
          </a>
          <a href="https://my-nextjs-portfolio.vercel.app" target="_blank" rel="noopener"
             class="flex items-center gap-2 px-5 py-2.5 border border-[#181717] text-[#181717] text-sm font-medium rounded-lg hover:bg-[#181717] hover:text-white transition-all">
            <lucide-icon [img]="Globe" class="w-4 h-4"></lucide-icon>
            Next.js Portfolio
          </a>
        </div>
      </div>
    </section>

    <!-- AT A GLANCE -->
    <section class="py-16 px-6 bg-[#181717] text-white">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-xs font-bold tracking-widest uppercase text-blue-400 mb-8 text-center font-mono">Currently</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          @for (item of atAGlance; track item.text) {
            <div class="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/40 transition-colors">
              <lucide-icon [img]="item.icon" class="w-5 h-5 text-blue-400 shrink-0 mt-0.5"></lucide-icon>
              <span class="text-sm text-white/80 text-left leading-relaxed">{{ item.text }}</span>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- CURRENT PHASE -->
    <section class="py-16 px-6 bg-paper">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-xs font-bold tracking-widest uppercase text-blue-600 mb-2 text-center font-mono">
          System Design & Architecture Phase — Q2 2026
        </h2>
        <p class="text-center text-[#374151] text-sm mb-10">
          Deliberate, phased engineering — executed one system at a time.
        </p>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          @for (phase of phases; track phase.label) {
            <div class="text-center p-5 rounded-xl border-2" [class]="phase.css">
              <div class="text-xs font-bold uppercase tracking-wider mb-2 font-mono opacity-80">{{ phase.label }}</div>
              <div class="text-lg font-bold font-serif mb-1">{{ phase.status }}</div>
              <div class="text-xs text-[#374151] leading-tight">{{ phase.detail }}</div>
            </div>
          }
        </div>
        <p class="text-center text-sm text-[#374151] max-w-2xl mx-auto leading-relaxed">
          All flagship systems are fully architected and entering sequential build phase. This is not random ambition — it is a deliberate, phased engineering approach executed one system at a time.
        </p>
      </div>
    </section>

    <!-- ORGANIZATIONS -->
    <section class="py-16 px-6 bg-[#f8f9fa]">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-2xl font-bold text-[#181717] font-serif text-center mb-2">Organizations</h2>
        <p class="text-center text-[#374151] text-sm mb-10">Two GitHub organizations. Multiple platforms in development.</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-6 rounded-2xl border-2 border-blue-500/20 bg-white hover:border-blue-500/50 transition-all">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">K</div>
              <div>
                <h3 class="font-bold text-[#181717] text-lg">KSDRILL-SA</h3>
                <p class="text-xs text-[#374151] font-mono">github.com/KSDRILL-SA</p>
              </div>
            </div>
            <p class="text-sm text-[#374151] mb-4 leading-relaxed">
              Technology organization. 4 flagship systems in design phase — AI systems, fintech, SaaS, enterprise automation.
            </p>
            <div class="flex flex-wrap gap-2 mb-5">
              @for (tag of ['AI-Integrated Systems', 'Fintech', 'SaaS', 'GovTech']; track tag) {
                <span class="px-2.5 py-1 bg-blue-50 text-blue-700 text-xs rounded-md font-mono font-medium">{{ tag }}</span>
              }
            </div>
            <a href="https://github.com/KSDRILL-SA" target="_blank" rel="noopener"
               class="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:underline">
              View Organization <lucide-icon [img]="ExternalLink" class="w-3.5 h-3.5"></lucide-icon>
            </a>
          </div>
          <div class="p-6 rounded-2xl border-2 border-[#FF6B6B]/20 bg-white hover:border-[#FF6B6B]/50 transition-all">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 rounded-xl bg-[#FF6B6B] flex items-center justify-center text-white font-bold text-xl shadow-lg">G</div>
              <div>
                <h3 class="font-bold text-[#181717] text-lg">GrowthCore Solutions</h3>
                <p class="text-xs text-[#374151] font-mono">github.com/GrowthCore-Solutions</p>
              </div>
            </div>
            <p class="text-sm text-[#374151] mb-4 leading-relaxed">
              Digital growth organization. Web development, marketing campaigns, customer acquisition, and analytics to drive measurable growth.
            </p>
            <div class="flex flex-wrap gap-2 mb-5">
              @for (tag of ['Web Dev', 'Marketing', 'Analytics']; track tag) {
                <span class="px-2.5 py-1 bg-red-50 text-[#FF6B6B] text-xs rounded-md font-mono font-medium">{{ tag }}</span>
              }
            </div>
            <a href="https://github.com/GrowthCore-Solutions" target="_blank" rel="noopener"
               class="inline-flex items-center gap-1.5 text-sm font-semibold text-[#FF6B6B] hover:underline">
              View Organization <lucide-icon [img]="ExternalLink" class="w-3.5 h-3.5"></lucide-icon>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- LIVE WORK -->
    <section class="py-16 px-6 bg-paper">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-2xl font-bold text-[#181717] font-serif text-center mb-2">Live Work</h2>
        <p class="text-center text-[#374151] text-sm mb-10">Deployed and publicly accessible.</p>
        <div class="space-y-3">
          @for (work of liveWork; track work.label) {
            <div class="flex items-center justify-between p-4 rounded-xl border border-[#181717]/10 bg-white hover:border-blue-500/30 transition-all">
              <div class="flex items-center gap-3">
                <div class="w-9 h-9 rounded-lg bg-[#181717] flex items-center justify-center">
                  <lucide-icon [img]="Globe" class="w-4 h-4 text-white"></lucide-icon>
                </div>
                <div>
                  <div class="text-sm font-semibold text-[#181717]">{{ work.label }}</div>
                  <div class="text-xs text-[#374151] font-mono">{{ work.url }}</div>
                </div>
              </div>
              <a [href]="work.href" target="_blank" rel="noopener"
                 class="flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:underline shrink-0">
                View <lucide-icon [img]="ExternalLink" class="w-3.5 h-3.5"></lucide-icon>
              </a>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- CAPABILITIES PREVIEW -->
    <section class="py-16 px-6 bg-[#181717] text-white">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-2xl font-bold font-serif mb-2">What I Build</h2>
        <p class="text-[#9ca3af] text-sm mb-10">Scalable full-stack architecture + AI integration across industries.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
          @for (cap of capabilities; track cap) {
            <div class="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/40 transition-all text-center">
              <span class="text-sm font-medium text-white/80">{{ cap }}</span>
            </div>
          }
        </div>
        <a routerLink="/about" class="inline-flex items-center gap-2 mt-10 text-blue-400 font-semibold hover:text-blue-300 transition-colors">
          Full capabilities on About <lucide-icon [img]="ArrowRight" class="w-4 h-4"></lucide-icon>
        </a>
      </div>
    </section>
  `,
})
export class HomeComponent implements OnInit, OnDestroy {
  readonly Github = Github;
  readonly Linkedin = Linkedin;
  readonly Mail = Mail;
  readonly ExternalLink = ExternalLink;
  readonly ArrowRight = ArrowRight;
  readonly MapPin = MapPin;
  readonly GraduationCap = GraduationCap;
  readonly Code = Code;
  readonly Globe = Globe;
  readonly Zap = Zap;
  readonly Users = Users;

  atAGlance = [
    { icon: this.Zap, text: 'Building Next.js portfolio + systems architecture' },
    { icon: this.Users, text: 'Exploring AI integration, LangChain, RAG pipelines' },
    { icon: this.GraduationCap, text: 'Studying BSc Computer Science & Mathematics — Final Year' },
    { icon: this.MapPin, text: 'Based in South Africa' },
    { icon: this.Code, text: 'Interested in Web Dev + AI, Fintech, EdTech, GovTech' },
    { icon: this.Mail, text: 'Contact kurhula04s@gmail.com' },
  ];

  phases = [
    { label: 'System Design', status: 'COMPLETE', detail: 'All 4 flagship systems fully designed', css: 'border-green-500 bg-green-500/5' },
    { label: 'Architecture', status: 'LOCKED', detail: 'Stack decisions finalized · Modules defined', css: 'border-green-500 bg-green-500/5' },
    { label: 'Build Phase', status: 'STARTING Q2', detail: 'Sequential — one system at a time', css: 'border-orange-500 bg-orange-500/5' },
    { label: 'Strategy', status: 'DESIGN→BUILD→SHIP', detail: 'No forward dependencies · Deep execution', css: 'border-blue-500 bg-blue-500/5' },
  ];

  liveWork = [
    { label: 'Next.js Portfolio', url: 'my-nextjs-portfolio.vercel.app', href: 'https://my-nextjs-portfolio.vercel.app' },
    { label: 'Next.js Portfolio Source', url: 'github.com/MALULEKE-KS/my-nextjs-portfolio', href: 'https://github.com/MALULEKE-KS/my-nextjs-portfolio' },
    { label: 'Angular Portfolio Source', url: 'github.com/MALULEKE-KS/my-angular-portfolio', href: 'https://github.com/MALULEKE-KS/my-angular-portfolio' },
  ];

  capabilities = ['SaaS', 'Fintech', 'AI & ML', 'E-commerce', 'Healthcare', 'Enterprise', 'EdTech', 'GovTech'];

  currentLine = signal(TYPING_LINES[0]);
  currentOpacity = signal(1);
  private timer: ReturnType<typeof setInterval> | null = null;
  private lineIdx = 0;

  ngOnInit(): void {
    this.timer = setInterval(() => {
      // Fade out
      this.currentOpacity.set(0);
      setTimeout(() => {
        this.lineIdx = (this.lineIdx + 1) % TYPING_LINES.length;
        this.currentLine.set(TYPING_LINES[this.lineIdx]);
        // Fade in
        this.currentOpacity.set(1);
      }, 400);
    }, 3500);
  }

  ngOnDestroy(): void {
    if (this.timer) clearInterval(this.timer);
  }
}
