import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { ScrollRevealStaggerDirective } from '../../shared/directives/scroll-reveal-stagger.directive';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Github, Linkedin, Mail, ExternalLink, ArrowRight, MapPin, GraduationCap, Code, Globe, Zap, Users } from 'lucide-angular';

const TYPING_LINES = [
  'Software Engineer | AI-Integrated Systems',
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
    <section scrollReveal class="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 pb-16 bg-paper relative overflow-hidden">
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>
      <div class="relative z-10 max-w-3xl mx-auto">
        <p class="text-sm font-medium text-blue-600 tracking-widest uppercase mb-4 font-mono">
          Maluleke Kurhula Success
        </p>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#181717] mb-4 leading-tight font-serif">
          Software Engineer<br>
          <span class="text-blue-600">AI-Integrated Systems</span>
        </h1>
        <p class="text-lg text-[#374151] mb-8 max-w-xl mx-auto leading-relaxed">
          Building practical digital systems that solve real-world challenges in education, finance, community infrastructure, and AI.
        </p>
        <!-- Typing -->
        <div class="h-14 flex items-center justify-center mb-10">
          <p class="text-lg sm:text-xl font-semibold text-[#181717] font-mono">
            {{ currentLine() }}<span class="animate-pulse text-blue-600">|</span>
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
    <section scrollReveal class="py-16 px-6 bg-[#181717] text-white">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-xs font-bold tracking-widest uppercase text-blue-400 mb-8 text-center font-mono">About</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          @for (item of atAGlance; track item.text) {
            <div class="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/40 transition-colors">
              <lucide-icon [img]="item.icon" class="w-5 h-5 text-blue-400 shrink-0 mt-0.5"></lucide-icon>
              <span class="text-sm text-white/80 text-left leading-relaxed">{{ item.text }}</span>
            </div>
          }
        </div>
        <div class="mt-8 text-center">
          <a routerLink="/about" class="inline-flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300 transition-colors text-sm">
            Full profile on About <lucide-icon [img]="ArrowRight" class="w-4 h-4"></lucide-icon>
          </a>
        </div>
      </div>
    </section>

    <!-- WHAT I BUILD — Preview -->
    <section scrollReveal class="py-16 px-6 bg-paper">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-2xl font-bold text-[#181717] font-serif text-center mb-2">What I Build</h2>
        <p class="text-center text-[#374151] text-sm mb-10">Across industries — fintech, SaaS, healthcare, enterprise, and AI.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          @for (cap of capabilities; track cap) {
            <div class="p-4 rounded-xl bg-white border-2 border-[#181717]/10 text-center hover:border-blue-500/40 transition-all">
              <span class="text-sm font-medium text-[#181717]">{{ cap }}</span>
            </div>
          }
        </div>
        <div class="text-center">
          <a routerLink="/stack" class="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors text-sm">
            View full tech stack <lucide-icon [img]="ArrowRight" class="w-4 h-4"></lucide-icon>
          </a>
        </div>
      </div>
    </section>

    <!-- APPROACH -->
    <section scrollReveal class="py-16 px-6 bg-[#f8f9fa]">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-2xl font-bold text-[#181717] font-serif text-center mb-2">How I Work</h2>
        <p class="text-center text-[#374151] text-sm mb-10">Sequential, production-grade engineering — one system at a time.</p>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          @for (step of approach; track step.title) {
            <div class="p-6 rounded-2xl border-2 border-[#181717]/10 bg-white text-center hover:border-blue-500/40 transition-all">
              <div class="text-3xl mb-3">{{ step.emoji }}</div>
              <h3 class="font-bold text-[#181717] text-base mb-2">{{ step.title }}</h3>
              <p class="text-xs text-[#374151] leading-relaxed">{{ step.desc }}</p>
            </div>
          }
        </div>
        <div class="text-center">
          <a routerLink="/philosophy" class="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors text-sm">
            System design philosophy <lucide-icon [img]="ArrowRight" class="w-4 h-4"></lucide-icon>
          </a>
        </div>
      </div>
    </section>

    <!-- NAVIGATION TO PAGES -->
    <section scrollReveal class="py-16 px-6 bg-[#181717] text-white">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-2xl font-bold font-serif mb-3">Explore More</h2>
        <p class="text-white/70 text-sm mb-10">Each page has detailed information about each area.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <a routerLink="/about" class="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all text-center">
            <lucide-icon [img]="Users" class="w-6 h-6 text-blue-400 mx-auto mb-3"></lucide-icon>
            <span class="text-sm font-semibold text-white">About</span>
          </a>
          <a routerLink="/projects" class="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all text-center">
            <lucide-icon [img]="Globe" class="w-6 h-6 text-blue-400 mx-auto mb-3"></lucide-icon>
            <span class="text-sm font-semibold text-white">Projects</span>
          </a>
          <a routerLink="/stack" class="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all text-center">
            <lucide-icon [img]="Code" class="w-6 h-6 text-blue-400 mx-auto mb-3"></lucide-icon>
            <span class="text-sm font-semibold text-white">Tech Stack</span>
          </a>
          <a routerLink="/philosophy" class="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all text-center">
            <lucide-icon [img]="Zap" class="w-6 h-6 text-blue-400 mx-auto mb-3"></lucide-icon>
            <span class="text-sm font-semibold text-white">Philosophy</span>
          </a>
        </div>
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
    { icon: this.Zap, text: 'AI-Integrated Systems Architect' },
    { icon: this.Code, text: 'Full-Stack Development (Next.js, Angular, FastAPI)' },
    { icon: this.GraduationCap, text: 'BSc Computer Science & Mathematics — Final Year' },
    { icon: this.MapPin, text: 'Johannesburg, South Africa · Remote-first' },
    { icon: this.Users, text: 'Building through KSDRILL-SA & GrowthCore-Solutions' },
    { icon: this.Mail, text: 'kurhula04s@gmail.com' },
  ];

  capabilities = ['SaaS', 'Fintech', 'AI & ML', 'E-commerce', 'Healthcare', 'Enterprise', 'EdTech', 'GovTech'];

  approach = [
    { emoji: '🏗️', title: 'Architecture', desc: 'Design first — then build from the ground up.' },
    { emoji: '⚡', title: 'Systems', desc: 'Build reliable, scalable full-stack platforms.' },
    { emoji: '🚀', title: 'Deliver', desc: 'Ship to production with real-world testing.' },
  ];

  currentLine = signal(TYPING_LINES[0]);
  private timer: ReturnType<typeof setInterval> | null = null;
  private lineIdx = 0;

  ngOnInit(): void {
    this.timer = setInterval(() => {
      this.lineIdx = (this.lineIdx + 1) % TYPING_LINES.length;
      this.currentLine.set(TYPING_LINES[this.lineIdx]);
    }, 3500);
  }

  ngOnDestroy(): void {
    if (this.timer) clearInterval(this.timer);
  }
}