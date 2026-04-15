import { Component, OnInit, OnDestroy } from '@angular/core';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { ScrollRevealStaggerDirective } from '../../shared/directives/scroll-reveal-stagger.directive';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, MapPin, GraduationCap, Bot, Code, Server, Database, Globe, ArrowRight, ExternalLink, Mail, Briefcase, Award, Users, Target, Wrench, Zap, Shield, BookOpen, Building2 } from 'lucide-angular';

const TYPING_LINES = [
  'Building end-to-end full-stack platforms',
  'AI-integrated systems at scale',
  'BSc CS & Mathematics — Final Year',
  'North-West University, South Africa',
  'Software Engineer | AI-Integrated Systems',
];

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink, LucideAngularModule, ScrollRevealDirective, ScrollRevealStaggerDirective],
  template: `
    <!-- HERO -->
    <section class="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 pb-16 bg-paper relative overflow-hidden">
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>
      <div class="relative z-10 max-w-3xl mx-auto">
        <!-- Portrait Card -->
        <div class="relative inline-block mb-8">
          <div class="relative w-[288px] h-[384px] rounded-lg overflow-hidden shadow-2xl" style="border: 3px solid transparent; background: linear-gradient(#f5f0e8,#f5f0e8) padding-box, linear-gradient(135deg,#b8860b,#d4a017,#e8a020) border-box;">
            <img src="/assets/profile.jpeg" alt="Kurhula Success Maluleke" class="w-full h-full object-cover object-top">
          </div>
          <div class="absolute -bottom-3 -right-3 flex items-center gap-1.5 px-3 py-1.5 bg-[#181717] text-white text-xs font-semibold rounded-full shadow-lg">
            <lucide-icon [img]="Briefcase" class="w-3.5 h-3.5"></lucide-icon>
            Open to work
          </div>
        </div>
        <p class="text-sm font-medium text-blue-600 tracking-widest uppercase mb-4 font-mono">
          North-West University · BSc CS & Maths
        </p>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-[#181717] mb-4 leading-tight">
          Maluleke Kurhula<br>
          <span class="text-blue-600">Success</span>
        </h1>
        <p class="text-lg text-[#374151] mb-8 max-w-xl mx-auto leading-relaxed">
          Designing and building practical digital systems that solve real-world challenges.
        </p>
        <!-- Typing -->
        <div class="h-14 flex items-center justify-center mb-10">
          <p class="text-lg sm:text-xl font-semibold text-[#181717] font-mono">
            {{ currentLine }}<span class="animate-pulse text-blue-600">|</span>
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
            <lucide-icon [img]="ExternalLink" class="w-4 h-4"></lucide-icon>
            GitHub
          </a>
          <a href="https://za.linkedin.com/in/kurhula-success-maluleke-32153231a" target="_blank" rel="noopener"
             class="flex items-center gap-2 px-5 py-2.5 bg-[#0A66C2] text-white text-sm font-medium rounded-lg hover:bg-[#084c94] transition-all">
            <lucide-icon [img]="ExternalLink" class="w-4 h-4"></lucide-icon>
            LinkedIn
          </a>
          <a href="mailto:kurhula04s@gmail.com"
             class="flex items-center gap-2 px-5 py-2.5 border border-[#181717] text-[#181717] text-sm font-medium rounded-lg hover:bg-[#181717] hover:text-white transition-all">
            <lucide-icon [img]="Mail" class="w-4 h-4"></lucide-icon>
            Email
          </a>
        </div>
      </div>
    </section>

    <!-- BACKGROUND -->
    <section class="py-16 px-6 bg-[#181717] text-white">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-xs font-bold tracking-widest uppercase text-blue-400 mb-8 text-center font-mono">Background</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          @for (item of background; track item.text) {
            <div class="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/40 transition-colors">
              <lucide-icon [img]="item.icon" class="w-5 h-5 text-blue-400 shrink-0 mt-0.5"></lucide-icon>
              <span class="text-sm text-white/80 text-left leading-relaxed">{{ item.text }}</span>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- ARCHITECTURE APPROACH -->
    <section class="py-16 px-6 bg-paper">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-xs font-bold tracking-widest uppercase text-blue-600 mb-2 text-center font-mono">
          How I Work — System Architecture
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
          All flagship systems are fully architected. This is not random ambition — it is a deliberate, phased engineering approach executed one system at a time.
        </p>
      </div>
    </section>

    <!-- CAPABILITIES -->
    <section class="py-16 px-6 bg-[#f8f9fa]">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-2xl font-bold text-[#181717] font-serif text-center mb-2">What I Do</h2>
        <p class="text-center text-[#374151] text-sm mb-10">Scalable full-stack architecture + AI integration across industries.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          @for (cap of capabilities; track cap) {
            <div class="p-4 rounded-xl bg-white border border-[#181717]/10 text-center hover:border-blue-500/30 hover:shadow-md transition-all">
              <span class="text-sm font-medium text-[#181717]">{{ cap }}</span>
            </div>
          }
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          @for (svc of services; track svc.title) {
            <div class="p-6 rounded-2xl bg-white border border-[#181717]/10 hover:border-blue-500/30 hover:shadow-md transition-all">
              <div class="flex items-start gap-3 mb-3">
                <lucide-icon [img]="svc.icon" class="w-5 h-5 text-blue-600 shrink-0 mt-0.5"></lucide-icon>
                <h3 class="font-bold text-[#181717] text-base">{{ svc.title }}</h3>
              </div>
              <p class="text-sm text-[#374151] leading-relaxed">{{ svc.desc }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- TOOLS & STACK -->
    <section class="py-16 px-6 bg-[#181717] text-white">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-2xl font-bold font-serif mb-8 text-center">Tools & Technologies</h2>
        <div class="space-y-6">
          @for (group of techGroups; track group.label) {
            <div>
              <h3 class="text-xs font-bold uppercase tracking-wider text-blue-400 mb-3 font-mono">{{ group.label }}</h3>
              <div class="flex flex-wrap gap-2">
                @for (tech of group.techs; track tech) {
                  <span class="px-3 py-1.5 bg-white/10 border border-white/10 rounded-full text-xs font-mono hover:border-blue-500/50 transition-all">{{ tech }}</span>
                }
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- CTAs -->
    <section class="py-16 px-6 bg-paper text-center">
      <div class="max-w-2xl mx-auto">
        <h2 class="text-2xl font-bold font-serif text-[#181717] mb-3">Ready to build something?</h2>
        <p class="text-[#374151] text-sm mb-8">Open to full-time, part-time, contract, and remote engineering opportunities.</p>
        <a routerLink="/contact" class="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-lg min-h-[52px]">
          Get in Touch <lucide-icon [img]="ArrowRight" class="w-5 h-5"></lucide-icon>
        </a>
      </div>
    </section>
  `,
})
export class AboutComponent implements OnInit, OnDestroy {
  readonly MapPin = MapPin;
  readonly GraduationCap = GraduationCap;
  readonly Bot = Bot;
  readonly Code = Code;
  readonly Server = Server;
  readonly Database = Database;
  readonly Globe = Globe;
  readonly ArrowRight = ArrowRight;
  readonly ExternalLink = ExternalLink;
  readonly Mail = Mail;
  readonly Briefcase = Briefcase;
  readonly Award = Award;
  readonly Users = Users;
  readonly Target = Target;
  readonly Wrench = Wrench;
  readonly Zap = Zap;
  readonly Shield = Shield;
  readonly BookOpen = BookOpen;
  readonly Building2 = Building2;

  background = [
    { icon: this.GraduationCap, text: 'BSc Computer Science & Mathematics — Final Year at North-West University' },
    { icon: this.MapPin, text: 'Based in South Africa · Open to remote work globally' },
    { icon: this.Code, text: 'Full-stack development: Angular, Next.js, FastAPI, Python, PostgreSQL' },
    { icon: this.Bot, text: 'AI integration: LangChain, RAG pipelines, vector databases, OpenAI API' },
    { icon: this.Server, text: 'Building distributed systems with modern cloud-native architecture' },
    { icon: this.Mail, text: 'Contact kurhula04s@gmail.com for opportunities' },
  ];

  phases = [
    { label: 'System Design', status: 'COMPLETE', detail: 'All 4 flagship systems fully designed', css: 'border-green-500 bg-green-500/5' },
    { label: 'Architecture', status: 'LOCKED', detail: 'Stack decisions finalized · Modules defined', css: 'border-green-500 bg-green-500/5' },
    { label: 'Build Phase', status: 'STARTING Q2', detail: 'Sequential — one system at a time', css: 'border-orange-500 bg-orange-500/5' },
    { label: 'Strategy', status: 'DESIGN→BUILD→SHIP', detail: 'No forward dependencies · Deep execution', css: 'border-blue-500 bg-blue-500/5' },
  ];

  capabilities = ['SaaS', 'Fintech', 'AI & ML', 'E-commerce', 'Healthcare', 'Enterprise', 'EdTech', 'GovTech'];

  services = [
    { icon: this.Code, title: 'Frontend Development', desc: 'Angular, Next.js, React, TypeScript, Tailwind CSS. Pixel-perfect UIs with accessible, responsive design.' },
    { icon: this.Server, title: 'Backend Engineering', desc: 'Node.js, FastAPI, Django. REST and GraphQL APIs with proper authentication, validation, and error handling.' },
    { icon: this.Bot, title: 'AI-Integrated Systems', desc: 'LangChain, RAG pipelines, embeddings, semantic search. AI-native architecture built into the core.' },
    { icon: this.Database, title: 'Data Architecture', desc: 'PostgreSQL, MongoDB, Redis. Relational, document, and cache layers designed for scale and reliability.' },
  ];

  techGroups = [
    {
      label: 'Frontend',
      techs: ['Angular', 'Next.js 15', 'React', 'TypeScript', 'Tailwind CSS', 'SCSS', 'Framer Motion'],
    },
    {
      label: 'Backend',
      techs: ['Node.js', 'FastAPI', 'Python', 'Django', 'NextAuth.js', 'REST APIs', 'GraphQL'],
    },
    {
      label: 'AI & Data',
      techs: ['LangChain', 'OpenAI API', 'RAG Systems', 'PostgreSQL', 'MongoDB', 'Redis', 'Prisma'],
    },
    {
      label: 'Infrastructure',
      techs: ['Docker', 'AWS', 'GitHub Actions', 'Linux', 'Nginx', 'Vercel', 'Cloudflare'],
    },
  ];

  currentLine = '';
  private timer: ReturnType<typeof setInterval> | null = null;
  private lineIdx = 0;

  ngOnInit(): void {
    this.currentLine = TYPING_LINES[0];
    this.timer = setInterval(() => {
      const line = TYPING_LINES[this.lineIdx];
      this.currentLine = line;
      this.lineIdx = (this.lineIdx + 1) % TYPING_LINES.length;
    }, 3500);
  }

  ngOnDestroy(): void {
    if (this.timer) clearInterval(this.timer);
  }
}