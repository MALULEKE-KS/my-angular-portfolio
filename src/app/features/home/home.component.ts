import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Github, Linkedin, Mail, ExternalLink, ArrowRight, MapPin, GraduationCap, Code, Globe, Zap, Users, Briefcase, MessageSquare, Server } from 'lucide-angular';

const TYPING_LINES = [
  'Software Engineer building AI-integrated systems',
  'Next.js · Angular · FastAPI · Python',
  'Full-Stack | AI | Cloud Architecture',
  'BSc Computer Science & Mathematics — NWU',
  'African Roots | Global Engineering',
];

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, LucideAngularModule],
  template: `
    <!-- ═══ HERO ═══ -->
    <section class="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-28 pb-20 bg-[#FAFAF8] overflow-hidden">

      <!-- Ambient gradient blobs -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#B8860B]/8 rounded-full blur-[80px]"></div>
        <div class="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#181717]/4 rounded-full blur-[60px]"></div>
      </div>

      <div class="relative z-10 max-w-3xl mx-auto">

        <!-- Profile Image -->
        <div class="mb-8 flex justify-center">
          <div class="relative group">
            <!-- Outer glow ring -->
            <div class="absolute -inset-4 rounded-full bg-gradient-to-br from-[#B8860B] via-[#D4A017] to-[#B8860B] opacity-30 blur-sm group-hover:opacity-50 transition-opacity duration-500"></div>
            <!-- Image container -->
            <div class="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-[#B8860B] shadow-2xl ring-4 ring-[#B8860B]/20">
              <img
                src="/assets/profile.jpeg"
                alt="Kurhula Success Maluleke"
                class="w-full h-full object-cover object-top"
                loading="eager"
              />
            </div>
            <!-- Status badge -->
            <div class="absolute -bottom-1 -right-1 flex items-center gap-1.5 bg-[#B8860B] text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
              <lucide-icon [img]="Zap" class="w-3 h-3"></lucide-icon>
              Open to work
            </div>
          </div>
        </div>

        <!-- Name -->
        <p class="text-xs font-bold tracking-[0.25em] uppercase text-[#B8860B] mb-4 font-mono">
          Maluleke Kurhula Success
        </p>

        <!-- Headline -->
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#181717] mb-4 leading-tight font-serif">
          Software Engineer<br>
          <span class="text-[#B8860B]">| AI-Integrated Systems</span>
        </h1>

        <!-- Sub-headline -->
        <p class="text-lg text-[#5a5040] mb-10 max-w-xl mx-auto leading-relaxed">
          Building production-grade digital systems across fintech, healthcare, enterprise, and AI — designed to scale, deployed to ship.
        </p>

        <!-- Typewriter -->
        <div class="h-12 flex items-center justify-center mb-10">
          <p class="text-base sm:text-lg font-semibold text-[#181717] font-mono transition-opacity duration-300"
             [style.opacity]="currentOpacity()">
            {{ currentLine() }}<span class="animate-pulse text-[#B8860B]">|</span>
          </p>
        </div>

        <!-- CTAs -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a routerLink="/projects"
             class="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#181717] text-white font-semibold rounded-xl hover:bg-[#374151] transition-all shadow-lg hover:shadow-xl min-h-[52px] text-base">
            View My Work
            <lucide-icon [img]="ArrowRight" class="w-5 h-5"></lucide-icon>
          </a>
          <a routerLink="/contact"
             class="inline-flex items-center justify-center gap-2.5 px-8 py-4 border-2 border-[#181717] text-[#181717] font-semibold rounded-xl hover:bg-[#181717] hover:text-white transition-all min-h-[52px] text-base">
            Let's Talk
            <lucide-icon [img]="MessageSquare" class="w-5 h-5"></lucide-icon>
          </a>
        </div>

        <!-- Social Links -->
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
          <a href="mailto:kurhula04s@gmail.com"
             class="flex items-center gap-2 px-5 py-2.5 border-2 border-[#181717]/20 text-[#181717] text-sm font-medium rounded-lg hover:bg-[#181717] hover:text-white transition-all">
            <lucide-icon [img]="Mail" class="w-4 h-4"></lucide-icon>
            Email Me
          </a>
        </div>
      </div>
    </section>

    <!-- ═══ AT A GLANCE ═══ -->
    <section class="py-16 px-6 bg-[#181717] text-white">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-xs font-bold tracking-[0.25em] uppercase text-[#B8860B] mb-8 text-center font-mono">
          At a Glance
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          @for (item of atAGlance; track item.text) {
            <div class="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#B8860B]/40 transition-colors">
              <lucide-icon [img]="item.icon" class="w-5 h-5 text-[#B8860B] shrink-0 mt-0.5"></lucide-icon>
              <span class="text-sm text-white/80 text-left leading-relaxed">{{ item.text }}</span>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- ═══ WHAT I BUILD ═══ -->
    <section class="py-20 px-6 bg-[#FAFAF8]">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl sm:text-4xl font-bold font-serif text-[#181717] mb-3">What I Build</h2>
        <p class="text-[#5a5040] mb-12 text-base">Scalable full-stack systems integrated with AI — across every industry.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
          @for (cap of capabilities; track cap) {
            <div class="p-5 rounded-xl bg-white border-2 border-[#181717]/10 hover:border-[#B8860B]/40 hover:shadow-lg transition-all text-center group">
              <span class="text-base font-semibold text-[#181717] group-hover:text-[#B8860B] transition-colors">{{ cap }}</span>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- ═══ CURRENT FOCUS ═══ -->
    <section class="py-16 px-6 bg-white border-t border-[#181717]/10">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-xs font-bold tracking-[0.25em] uppercase text-[#B8860B] mb-8 text-center font-mono">
          Current Focus — Q2 2026
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-5">
          @for (focus of currentFocus; track focus.title) {
            <div class="p-6 rounded-2xl border-2 border-[#181717]/10 bg-[#FAFAF8] hover:border-[#B8860B]/50 transition-all text-center">
              <lucide-icon [img]="focus.icon" class="w-8 h-8 text-[#B8860B] mx-auto mb-4"></lucide-icon>
              <h3 class="font-bold text-[#181717] text-base mb-2">{{ focus.title }}</h3>
              <p class="text-sm text-[#5a5040] leading-relaxed">{{ focus.desc }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- ═══ LIVE WORK ═══ -->
    <section class="py-16 px-6 bg-[#181717] text-white">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-bold font-serif mb-2">Live Work</h2>
        <p class="text-white/60 text-sm mb-10">Source code and deployed projects.</p>
        <div class="space-y-3 max-w-lg mx-auto">
          @for (work of liveWork; track work.label) {
            <a [href]="work.href" target="_blank" rel="noopener"
               class="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#B8860B]/40 hover:bg-white/10 transition-all group">
              <div class="flex items-center gap-3 text-left">
                <lucide-icon [img]="Globe" class="w-5 h-5 text-[#B8860B]"></lucide-icon>
                <div>
                  <div class="text-sm font-semibold text-white group-hover:text-[#B8860B] transition-colors">{{ work.label }}</div>
                  <div class="text-xs text-white/50 font-mono">{{ work.url }}</div>
                </div>
              </div>
              <lucide-icon [img]="ExternalLink" class="w-4 h-4 text-white/40 group-hover:text-[#B8860B] transition-colors"></lucide-icon>
            </a>
          }
        </div>
      </div>
    </section>

    <!-- ═══ CTA STRIP ═══ -->
    <section class="py-16 px-6 bg-[#B8860B] text-white text-center">
      <div class="max-w-2xl mx-auto">
        <h2 class="text-3xl font-bold font-serif mb-3">Ready to build something?</h2>
        <p class="text-white/80 mb-8 text-base">Open to full-time, contract, and remote opportunities.</p>
        <a routerLink="/contact"
           class="inline-flex items-center gap-2.5 px-8 py-4 bg-[#181717] text-white font-bold rounded-xl hover:bg-[#374151] transition-all shadow-lg text-base min-h-[52px]">
          Let's Talk <lucide-icon [img]="ArrowRight" class="w-5 h-5"></lucide-icon>
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
  readonly Briefcase = Briefcase;
  readonly MessageSquare = MessageSquare;
  readonly Server = Server;

  atAGlance = [
    { icon: this.Code, text: 'Building production-grade full-stack systems with Next.js, Angular, and FastAPI' },
    { icon: this.Zap, text: 'Integrating AI into real products — RAG pipelines, LangChain, embeddings, and agents' },
    { icon: this.Globe, text: 'Cloud-native deployment with Docker, AWS, and modern CI/CD pipelines' },
    { icon: this.GraduationCap, text: 'BSc Computer Science & Mathematics — North-West University, Final Year' },
    { icon: this.MapPin, text: 'Based in South Africa · Available for remote work globally' },
    { icon: this.Users, text: 'Fintech · Healthcare · Enterprise SaaS · EdTech · GovTech' },
  ];

  capabilities = [
    'SaaS Platforms', 'Fintech Systems', 'AI & Machine Learning',
    'E-commerce', 'Healthcare Tech', 'Enterprise Automation', 'EdTech', 'GovTech',
  ];

  currentFocus = [
    {
      icon: this.Code,
      title: 'Full-Stack Engineering',
      desc: 'Next.js, Angular, FastAPI, PostgreSQL — building systems that handle real production load.',
    },
    {
      icon: this.Zap,
      title: 'AI Integration',
      desc: 'LangChain, RAG pipelines, semantic search, and AI agents embedded in real products.',
    },
    {
      icon: this.Server,
      title: 'Cloud Architecture',
      desc: 'Docker, AWS, CI/CD, and scalable deployment pipelines built for reliability.',
    },
  ];

  liveWork = [
    { label: 'Angular Portfolio (this site)', url: 'github.com/MALULEKE-KS/my-angular-portfolio', href: 'https://github.com/MALULEKE-KS/my-angular-portfolio' },
    { label: 'Next.js Portfolio', url: 'my-nextjs-portfolio.vercel.app', href: 'https://my-nextjs-portfolio.vercel.app' },
    { label: 'Next.js Portfolio Source', url: 'github.com/MALULEKE-KS/my-nextjs-portfolio', href: 'https://github.com/MALULEKE-KS/my-nextjs-portfolio' },
  ];

  currentLine = signal(TYPING_LINES[0]);
  currentOpacity = signal(1);
  private timer: ReturnType<typeof setInterval> | null = null;
  private lineIdx = 0;

  ngOnInit(): void {
    this.timer = setInterval(() => {
      this.currentOpacity.set(0);
      setTimeout(() => {
        this.lineIdx = (this.lineIdx + 1) % TYPING_LINES.length;
        this.currentLine.set(TYPING_LINES[this.lineIdx]);
        this.currentOpacity.set(1);
      }, 400);
    }, 3500);
  }

  ngOnDestroy(): void {
    if (this.timer) clearInterval(this.timer);
  }
}