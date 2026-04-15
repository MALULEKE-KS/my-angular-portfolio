import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { LucideAngularModule, MapPin, Globe, ArrowRight, Code, Cpu, Database, Bot, Server, Layers, Briefcase, GraduationCap, Award, CheckCircle } from 'lucide-angular';

@Component({
    selector: 'app-about',
    imports: [RouterLink, LucideAngularModule],
    template: `
    <div class="min-h-screen bg-paper">
      <!-- Hero -->
      <section class="min-h-[70vh] flex flex-col justify-center items-center text-center px-6 pt-20 pb-16 bg-gradient-to-b from-amber-50/20 to-paper relative overflow-hidden">
        <div class="absolute inset-0 pointer-events-none">
          <div class="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-amber-100/30 rounded-full blur-[80px]"></div>
        </div>
        <div class="relative z-10 max-w-3xl mx-auto">
          <div class="mb-8">
            <div class="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-gold shadow-2xl mx-auto ring-4 ring-gold/20">
              <img src="/assets/profile.jpeg" alt="Kurhula Success Maluleke" class="w-full h-full object-cover object-top" loading="eager" />
            </div>
          </div>
          <p class="text-sm font-medium text-gold tracking-widest uppercase mb-4 font-mono">Maluleke Kurhula Success</p>
          <h1 class="text-4xl sm:text-5xl font-bold font-serif text-ink mb-4">Software Engineer<br><span class="text-gold">| AI-Integrated Systems</span></h1>
          <div class="flex flex-wrap justify-center gap-3 text-sm text-muted">
            <span class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-ink/5 rounded-full">
              <lucide-icon [img]="MapPin" class="w-4 h-4"></lucide-icon> Johannesburg, SA
            </span>
            <span class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-ink/5 rounded-full">
              <lucide-icon [img]="GraduationCap" class="w-4 h-4"></lucide-icon> BSc CS & Maths — Final Year
            </span>
            <span class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-ink/5 rounded-full">
              <lucide-icon [img]="Globe" class="w-4 h-4"></lucide-icon> Remote-First Engineering
            </span>
          </div>
        </div>
      </section>

      <!-- Bio -->
      <section class="py-16 px-6">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-2xl font-bold font-serif text-ink mb-8 text-center">About Me</h2>
          <div class="space-y-6 text-muted leading-relaxed">
            <p>I design and build full-stack platforms across fintech, SaaS, healthcare, enterprise, and AI. My focus is on creating reliable, scalable systems that address specific problems — from architecture through to production deployment.</p>
            <p>I operate through <a href="https://github.com/KSDRILL-SA" target="_blank" class="text-gold hover:underline font-medium">KSDRILL-SA</a>, a technology studio building production-grade platforms, and <a href="https://github.com/GrowthCore-Solutions" target="_blank" class="text-gold hover:underline font-medium">GrowthCore Solutions</a>, a digital growth agency. My development approach is structured and sequential: Architecture → Design → Sequential Implementation → Production.</p>
          </div>
        </div>
      </section>

      <!-- What I Build -->
      <section class="py-16 px-6 bg-ink text-paper">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-2xl font-bold font-serif mb-8 text-center">What I Build</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            @for (item of what_i_build; track item.title) {
              <div class="p-6 rounded-2xl bg-white/5 border border-white/10">
                <h3 class="font-bold text-white mb-1">{{ item.title }}</h3>
                <p class="text-sm text-white/60 leading-relaxed">{{ item.desc }}</p>
              </div>
            }
          </div>
        </div>
      </section>

      <!-- Technical Stack -->
      <section class="py-16 px-6 bg-paper">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-2xl font-bold font-serif text-ink mb-8 text-center">Technical Stack</h2>
          <div class="space-y-6">
            @for (layer of techLayers; track layer.label) {
              <div>
                <h3 class="text-sm font-bold text-gold uppercase tracking-wider mb-3 flex items-center gap-2">
                  <lucide-icon [img]="layer.icon" class="w-4 h-4"></lucide-icon>
                  {{ layer.label }}
                </h3>
                <div class="flex flex-wrap gap-2">
                  @for (tech of layer.tech; track tech) {
                    <span class="px-3 py-1.5 bg-ink text-paper text-sm rounded-lg font-mono">{{ tech }}</span>
                  }
                </div>
              </div>
            }
          </div>
        </div>
      </section>

      <!-- How I Work -->
      <section class="py-16 px-6 bg-amber-50/30">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-2xl font-bold font-serif text-ink mb-8 text-center">How I Work</h2>
          <div class="space-y-4">
            @for (step of workSteps; track step.num) {
              <div class="flex items-start gap-4 p-4 rounded-xl bg-white border border-ink/10">
                <div class="w-8 h-8 rounded-full bg-gold text-paper flex items-center justify-center text-sm font-bold shrink-0">{{ step.num }}</div>
                <div>
                  <h3 class="font-bold text-ink mb-1">{{ step.title }}</h3>
                  <p class="text-sm text-muted">{{ step.desc }}</p>
                </div>
              </div>
            }
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="py-16 px-6 bg-gold text-paper">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-bold font-serif mb-4">Open To Opportunities</h2>
          <p class="text-lg mb-8 opacity-90">Full-time, part-time, contract, or remote engineering roles across fintech, healthcare, enterprise, AI, or social impact.</p>
          <a routerLink="/contact" class="inline-flex items-center gap-2 px-8 py-4 bg-ink text-paper font-bold rounded-xl hover:bg-ink/80 transition-all min-h-[52px] shadow-lg">
            Get in Touch <lucide-icon [img]="ArrowRight" class="w-5 h-5"></lucide-icon>
          </a>
        </div>
      </section>
    </div>
  `
})
export class AboutComponent {
  readonly MapPin = MapPin;
  readonly Globe = Globe;
  readonly ArrowRight = ArrowRight;
  readonly Code = Code;
  readonly Cpu = Cpu;
  readonly Database = Database;
  readonly Bot = Bot;
  readonly Server = Server;
  readonly Layers = Layers;
  readonly Briefcase = Briefcase;
  readonly GraduationCap = GraduationCap;
  readonly Award = Award;
  readonly CheckCircle = CheckCircle;

  what_i_build = [
    { title: 'SaaS', desc: 'Multi-tenant platforms, subscription management, analytics dashboards' },
    { title: 'Fintech', desc: 'Payment systems, microfinance tools, savings and lending platforms' },
    { title: 'AI & ML', desc: 'Prediction engines, RAG pipelines, intelligent agents and embeddings' },
    { title: 'Healthcare', desc: 'Patient portals, appointment scheduling, telemedicine features' },
    { title: 'EdTech', desc: 'Learning platforms, funding aggregation, student management' },
    { title: 'Enterprise', desc: 'Internal tools, workflow automation, data pipeline systems' },
  ];

  techLayers = [
    { label: 'Frontend', icon: this.Code, tech: ['Angular', 'Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'SCSS'] },
    { label: 'Backend Gateway', icon: this.Server, tech: ['Node.js', 'Next.js API', 'NextAuth.js', 'Redis', 'BullMQ'] },
    { label: 'AI Backend', icon: this.Bot, tech: ['Python', 'FastAPI', 'LangChain', 'ChromaDB', 'Pinecone'] },
    { label: 'Enterprise', icon: this.Layers, tech: ['Django', 'PostgreSQL', 'Prisma'] },
    { label: 'Database', icon: this.Database, tech: ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase'] },
    { label: 'DevOps', icon: this.Cpu, tech: ['Docker', 'AWS', 'GitHub Actions', 'Linux', 'Nginx'] },
  ];

  workSteps = [
    { num: 1, title: 'System Architecture', desc: 'Define the full system design — modules, data layers, integrations, and constraints before writing any code.' },
    { num: 2, title: 'Sequential Implementation', desc: 'Build one system at a time. No feature branches for ideas — only for verified implementations.' },
    { num: 3, title: 'Testing & Quality', desc: 'Every system ships with Playwright e2e tests and type-safe code. No compromises on quality.' },
    { num: 4, title: 'Production Deployment', desc: 'Deploy with CI/CD, monitor with logs, and iterate based on real usage data.' },
  ];
}
