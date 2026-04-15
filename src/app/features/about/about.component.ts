import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { ScrollRevealStaggerDirective } from '../../shared/directives/scroll-reveal-stagger.directive';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, MapPin, GraduationCap, Bot, Code, Server, Database, Globe, ArrowRight, ExternalLink, Mail } from 'lucide-angular';

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
        <div class="w-32 h-32 rounded-2xl overflow-hidden border-4 border-blue-500 shadow-xl mx-auto mb-8">
          <img src="/assets/profile.jpeg" alt="Kurhula Success Maluleke" class="w-full h-full object-cover">
        </div>
        <h1 class="text-4xl sm:text-5xl font-bold font-serif text-[#181717] mb-3">Kurhula Success Maluleke</h1>
        <p class="text-lg text-blue-600 font-semibold mb-3">Software Engineer designing AI-driven systems</p>
        <div class="flex flex-wrap justify-center gap-3 text-sm text-[#374151] mb-8">
          <span class="flex items-center gap-1.5 px-3 py-1.5 bg-[#181717]/5 rounded-lg">
            <lucide-icon [img]="GraduationCap" class="w-4 h-4"></lucide-icon>
            BSc CS & Mathematics — Final Year
          </span>
          <span class="flex items-center gap-1.5 px-3 py-1.5 bg-[#181717]/5 rounded-lg">
            <lucide-icon [img]="MapPin" class="w-4 h-4"></lucide-icon>
            Johannesburg, South Africa
          </span>
          <span class="flex items-center gap-1.5 px-3 py-1.5 bg-[#181717]/5 rounded-lg">
            <lucide-icon [img]="Mail" class="w-4 h-4"></lucide-icon>
            kurhula04s&#64;gmail.com
          </span>
        </div>
        <a routerLink="/contact"
           class="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-lg min-h-[52px]">
          Get in Touch <lucide-icon [img]="ArrowRight" class="w-5 h-5"></lucide-icon>
        </a>
      </div>
    </section>

    <!-- BIO -->
    <section class="py-16 px-6 bg-[#181717] text-white">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-xs font-bold tracking-widest uppercase text-blue-400 mb-6 font-mono">About Me</h2>
        <div class="space-y-5 text-[#e5e7eb] leading-relaxed text-base">
          <p>
            I am a <strong class="text-white">Software Engineer designing AI-driven systems</strong> — a final year BSc Computer Science & Mathematics student building practical digital systems through my organizations. My focus is creating reliable platforms that solve complex challenges in education, finance, community infrastructure, and artificial intelligence.
          </p>
          <p>
            Where most engineers write code, I reason through systems — Computer Science shapes how I architect, Mathematics shapes how I think. That combination produces software that is not just functional, but structurally sound from the ground up.
          </p>
        </div>
      </div>
    </section>

    <!-- DEVELOPMENT PROCESS -->
    <section class="py-16 px-6 bg-paper">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-2xl font-bold font-serif text-[#181717] text-center mb-2">Development Process</h2>
        <p class="text-center text-[#374151] text-sm mb-10">Sequential. One system at a time. No compromises.</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          @for (phase of devPhases; track phase.n) {
            <div class="relative p-5 rounded-xl border-2 border-[#181717]/10 bg-white hover:border-blue-500/40 transition-all">
              <div class="absolute -top-3 left-4 w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center">{{ phase.n }}</div>
              <h3 class="font-bold text-[#181717] mt-1 mb-2">{{ phase.name }}</h3>
              <p class="text-sm text-[#374151]">{{ phase.focus }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- ORGANIZATIONS -->
    <section class="py-16 px-6 bg-[#f8f9fa]">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-2xl font-bold font-serif text-[#181717] text-center mb-2">Organizations</h2>
        <p class="text-center text-[#374151] text-sm mb-10">Not companies — GitHub organizations housing platform systems.</p>
        <div class="space-y-6">
          <!-- KSDRILL-SA -->
          <div class="p-6 rounded-2xl border-2 border-blue-500/20 bg-white">
            <div class="flex items-start gap-4 mb-4">
              <div class="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-2xl shrink-0 shadow-lg">K</div>
              <div>
                <h3 class="font-bold text-[#181717] text-xl mb-1">KSDRILL-SA</h3>
                <p class="text-xs text-[#374151] font-mono mb-2">github.com/KSDRILL-SA</p>
                <span class="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-md font-medium">Technology Organization</span>
              </div>
            </div>
            <p class="text-sm text-[#374151] mb-4 leading-relaxed">
              Full-stack engineering, AI integration, and production-grade platform development across multiple industries — fintech, healthcare, education, and enterprise.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              @for (tag of ['AI-Integrated Systems', 'Fintech', 'SaaS', 'Enterprise Automation', 'EdTech', 'GovTech']; track tag) {
                <span class="px-2.5 py-1 bg-blue-50 text-blue-700 text-xs rounded-md font-mono font-medium">{{ tag }}</span>
              }
            </div>
            <p class="text-xs text-[#374151] italic">All 4 flagship platforms are housed under this organization.</p>
          </div>
          <!-- GrowthCore Solutions -->
          <div class="p-6 rounded-2xl border-2 border-[#FF6B6B]/20 bg-white">
            <div class="flex items-start gap-4 mb-4">
              <div class="w-14 h-14 rounded-xl bg-[#FF6B6B] flex items-center justify-center text-white font-bold text-2xl shadow-lg">G</div>
              <div>
                <h3 class="font-bold text-[#181717] text-xl mb-1">GrowthCore Solutions</h3>
                <p class="text-xs text-[#374151] font-mono mb-2">github.com/GrowthCore-Solutions</p>
                <span class="px-2 py-1 bg-red-50 text-[#FF6B6B] text-xs rounded-md font-medium">Digital Growth Organization</span>
              </div>
            </div>
            <p class="text-sm text-[#374151] mb-3 leading-relaxed">
              Web development, marketing campaigns, customer acquisition, and analytics to drive measurable growth. With Ngoneni Mponisi Forever.
            </p>
            <p class="text-xs text-[#374151] italic">Sunduza Architectural & Projects (Pty) Ltd digital presence managed under this organization.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ENGINEERING CAPABILITIES -->
    <section class="py-16 px-6 bg-paper">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-2xl font-bold font-serif text-[#181717] text-center mb-2">Engineering Capabilities</h2>
        <p class="text-center text-[#374151] text-sm mb-10">Skills transfer across industries — the common thread is scalable architecture + AI integration.</p>
        <div class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b-2 border-[#181717]">
                <th class="text-left py-3 px-4 font-bold text-[#181717]">Industry</th>
                <th class="text-left py-3 px-4 font-bold text-[#181717]">Applications</th>
              </tr>
            </thead>
            <tbody>
              @for (row of capabilities; track row.industry) {
                <tr class="border-b border-[#181717]/10 hover:bg-blue-50/30 transition-colors">
                  <td class="py-3 px-4 font-semibold text-blue-600">{{ row.industry }}</td>
                  <td class="py-3 px-4 text-[#374151]">{{ row.apps }}</td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- OPEN TO -->
    <section class="py-16 px-6 bg-[#181717] text-white">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-2xl font-bold font-serif mb-8">Open To</h2>
        <div class="flex flex-wrap justify-center gap-3 mb-8">
          @for (type of ['Full-time', 'Part-time', 'Contract', 'Remote']; track type) {
            <span class="px-5 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-full">{{ type }}</span>
          }
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left mb-8">
          @for (col of openToCols; track col.title) {
            <div class="p-5 rounded-xl bg-white/5 border border-white/10">
              <h3 class="font-bold text-blue-400 text-sm mb-2 uppercase tracking-wide">{{ col.title }}</h3>
              <p class="text-sm text-white/70 leading-relaxed">{{ col.content }}</p>
            </div>
          }
        </div>
        <a routerLink="/contact"
           class="inline-flex items-center gap-2 px-8 py-4 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-all shadow-lg min-h-[52px]">
          Let's Talk <lucide-icon [img]="ArrowRight" class="w-5 h-5"></lucide-icon>
        </a>
      </div>
    </section>
  `,
})
export class AboutComponent {
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

  devPhases = [
    { n: 1, name: 'Architecture', focus: 'Full platform architecture & user flows' },
    { n: 2, name: 'Design', focus: 'System modules & database structures' },
    { n: 3, name: 'Interface', focus: 'Complete interface designs' },
    { n: 4, name: 'Development', focus: 'Sequential, one system at a time' },
  ];

  capabilities = [
    { industry: 'SaaS', apps: 'Multi-tenant platforms, subscription management, analytics dashboards' },
    { industry: 'Fintech', apps: 'Payment processing, banking systems, fraud detection, microfinance' },
    { industry: 'AI & ML', apps: 'Prediction engines, recommendation systems, intelligent agents, RAG pipelines' },
    { industry: 'E-commerce', apps: 'Marketplaces, inventory management, order fulfillment' },
    { industry: 'Healthcare', apps: 'Patient portals, scheduling systems, telemedicine platforms' },
    { industry: 'Enterprise', apps: 'Internal tools, workflow automation, data visualization' },
    { industry: 'EdTech', apps: 'Learning platforms, student management, funding systems' },
    { industry: 'GovTech', apps: 'Citizen services, digital governance, transportation coordination' },
  ];

  openToCols = [
    { title: 'Engineering Roles', content: 'Full-stack · Backend · AI/ML · Systems Architecture' },
    { title: 'Industries', content: 'Fintech · Healthcare · EdTech · SaaS · GovTech · AI' },
    { title: 'Collaboration', content: 'Open source · Partnerships · Social impact' },
  ];
}
