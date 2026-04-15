import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Github, Linkedin, Mail, ExternalLink, ArrowRight, MapPin, GraduationCap, Code, Zap, Users, Layers } from 'lucide-angular';

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
  imports: [CommonModule, RouterLink, LucideAngularModule],
  template: `
    <!-- HERO -->
    <section class="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 pb-16 bg-paper relative overflow-hidden">
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 right-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl"></div>
      </div>
      <div class="relative z-10 max-w-3xl mx-auto">
        <p class="text-sm font-medium text-gold tracking-widest uppercase mb-4 font-mono">
          Maluleke Kurhula Success
        </p>
        <div class="relative mx-auto mb-8 w-44 h-44 sm:w-52 sm:h-52">
          <div class="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-gold via-amber-500 to-gold opacity-40 blur-sm"></div>
          <div class="relative w-full h-full rounded-[1.75rem] overflow-hidden border-4 border-gold shadow-2xl ring-4 ring-gold/30">
            <img src="/assets/profile.jpeg" alt="Kurhula Success Maluleke" class="w-full h-full object-cover object-top" loading="eager" />
          </div>
          <div class="absolute -top-2 -right-2 flex items-center justify-center w-7 h-7 bg-gold rounded-full border-2 border-paper shadow-lg">
            <lucide-icon [img]="Zap" class="w-3.5 h-3.5 text-white"></lucide-icon>
          </div>
        </div>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-ink mb-4 leading-tight font-serif">
          Software Engineer<br>
          <span class="text-gold">AI Systems Architect</span>
        </h1>
        <p class="text-lg text-muted mb-8 max-w-xl mx-auto leading-relaxed">
          Designing and building practical digital systems that solve real-world challenges.
        </p>
        <!-- Rotating tagline -->
        <div class="h-14 flex items-center justify-center mb-10">
          <p class="text-lg sm:text-xl font-semibold text-muted font-mono transition-opacity duration-300">
            {{ currentLine() }}
          </p>
        </div>
        <!-- CTAs -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a routerLink="/projects"
             class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-paper font-semibold rounded-xl hover:bg-gold2 transition-all shadow-lg min-h-[52px]">
            View Projects
            <lucide-icon [img]="ArrowRight" class="w-5 h-5"></lucide-icon>
          </a>
          <a routerLink="/contact"
             class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-ink text-paper font-semibold rounded-xl hover:bg-ink/80 transition-all min-h-[52px]">
            Contact Me
            <lucide-icon [img]="Mail" class="w-5 h-5"></lucide-icon>
          </a>
        </div>
        <!-- Socials -->
        <div class="flex flex-wrap justify-center gap-3">
          <a href="https://github.com/MALULEKE-KS" target="_blank" rel="noopener"
             class="flex items-center gap-2 px-5 py-2.5 bg-ink text-paper text-sm font-medium rounded-lg hover:bg-ink/80 transition-all">
            <lucide-icon [img]="Github" class="w-4 h-4"></lucide-icon>
            GitHub
          </a>
          <a href="https://za.linkedin.com/in/kurhula-success-maluleke-32153231a" target="_blank" rel="noopener"
             class="flex items-center gap-2 px-5 py-2.5 bg-[#0A66C2] text-white text-sm font-medium rounded-lg hover:bg-[#084c94] transition-all">
            <lucide-icon [img]="Linkedin" class="w-4 h-4"></lucide-icon>
            LinkedIn
          </a>
        </div>
      </div>
    </section>

    <!-- AT A GLANCE -->
    <section class="py-16 px-6 bg-ink text-paper">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-xs font-bold tracking-widest uppercase text-gold mb-8 text-center font-mono">Currently</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          @for (item of atAGlance; track item.text) {
            <div class="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-gold/40 transition-colors">
              <lucide-icon [img]="item.icon" class="w-5 h-5 text-gold shrink-0 mt-0.5"></lucide-icon>
              <span class="text-sm text-white/80 text-left leading-relaxed">{{ item.text }}</span>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- CAPABILITIES PREVIEW -->
    <section class="py-16 px-6 bg-paper">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-2xl font-bold font-serif text-ink mb-2">What I Build</h2>
        <p class="text-muted text-sm mb-10">Full-stack architecture + AI integration across industries.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
          @for (cap of capabilities; track cap) {
            <div class="p-4 rounded-xl bg-white border border-ink/10 hover:border-gold/40 transition-all text-center">
              <span class="text-sm font-medium text-ink">{{ cap }}</span>
            </div>
          }
        </div>
        <a routerLink="/about" class="inline-flex items-center gap-2 mt-10 text-gold font-semibold hover:text-gold2 transition-colors">
          Full capabilities on About <lucide-icon [img]="ArrowRight" class="w-4 h-4"></lucide-icon>
        </a>
      </div>
    </section>

    <!-- ORGS + SYSTEMS -->
    <section class="py-16 px-6 bg-ink text-paper">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-xs font-bold tracking-widest uppercase text-gold mb-2 text-center font-mono">Flagship Systems</h2>
        <p class="text-center text-white/60 text-sm mb-10">Four production systems in active architecture and build phase.</p>

        <!-- KSDRILL-SA systems -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          @for (sys of flagshipSystems; track sys.label) {
            <div class="p-5 rounded-xl border border-white/10 bg-white/5 hover:border-gold/40 transition-all">
              <div class="flex items-start gap-3">
                <div class="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" [ngClass]="sys.bgClass">
                  <lucide-icon [img]="Layers" class="w-5 h-5 text-white"></lucide-icon>
                </div>
                <div class="text-left">
                  <div class="text-sm font-bold text-white mb-0.5">{{ sys.label }}</div>
                  <div class="text-xs text-white/50 font-mono mb-2">{{ sys.domain }}</div>
                  <span class="inline-block px-2 py-0.5 text-xs rounded-md font-mono font-medium"
                        [ngClass]="sys.badgeClass">{{ sys.status }}</span>
                </div>
              </div>
              <p class="text-xs text-white/60 mt-3 leading-relaxed">{{ sys.description }}</p>
            </div>
          }
        </div>

        <!-- Orgs -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-5 rounded-xl border border-white/10 bg-white/5 hover:border-blue-500/40 transition-all">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-lg">K</div>
              <div>
                <div class="font-bold text-white">KSDRILL-SA</div>
                <div class="text-xs text-white/50 font-mono">github.com/KSDRILL-SA</div>
              </div>
            </div>
            <p class="text-xs text-white/60 leading-relaxed">4 flagship systems across fintech, EdTech, GovTech, and collaborative platforms.</p>
          </div>
          <div class="p-5 rounded-xl border border-white/10 bg-white/5 hover:border-red-400/40 transition-all">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-10 h-10 rounded-lg bg-[#FF6B6B] flex items-center justify-center text-white font-bold text-lg">G</div>
              <div>
                <div class="font-bold text-white">GrowthCore Solutions</div>
                <div class="text-xs text-white/50 font-mono">github.com/GrowthCore-Solutions</div>
              </div>
            </div>
            <p class="text-xs text-white/60 leading-relaxed">Digital growth — web development, marketing campaigns, customer acquisition.</p>
          </div>
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
  readonly Globe = Layers;
  readonly Zap = Zap;
  readonly Users = Users;
  readonly Layers = Layers;

  atAGlance = [
    { icon: this.Zap, text: 'Building 4 production-grade flagship systems' },
    { icon: this.Users, text: 'Full-stack + AI-Integrated architecture' },
    { icon: this.MapPin, text: 'Based in South Africa · Remote-first engineering' },
    { icon: this.Code, text: 'Fintech · EdTech · GovTech · SaaS platforms' },
    { icon: this.Mail, text: 'kurhula04s@gmail.com' },
  ];

  flagshipSystems = [
    { label: 'FundsLink Academy', domain: 'fundslink.ksdrill-sa.co.za', status: 'In Development', badgeClass: 'bg-blue-500/20 text-blue-300', bgClass: 'bg-blue-600', description: 'EdFinance platform — financial education and fund management.' },
    { label: 'Maphophe Community', domain: 'maphophe.ksdrill-sa.co.za', status: 'In Development', badgeClass: 'bg-blue-500/20 text-blue-300', bgClass: 'bg-blue-600', description: 'GovTech platform — community services and civic engagement.' },
    { label: 'KSDRILL Reserve Bank', domain: 'bank.ksdrill-sa.co.za', status: 'In Development', badgeClass: 'bg-blue-500/20 text-blue-300', bgClass: 'bg-blue-600', description: 'Fintech savings platform — savings, investments, and micro-lending.' },
    { label: 'SyncUp Platform', domain: 'syncup.ksdrill-sa.co.za', status: 'In Development', badgeClass: 'bg-blue-500/20 text-blue-300', bgClass: 'bg-blue-600', description: 'Creator collaboration platform — real-time sync and team workflows.' },
  ];

  capabilities = ['SaaS', 'Fintech', 'AI & ML', 'E-commerce', 'Healthcare', 'Enterprise', 'EdTech', 'GovTech'];

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