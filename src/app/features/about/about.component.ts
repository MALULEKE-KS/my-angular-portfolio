import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, MapPin, Globe, ArrowRight, Code, Server, Database, Bot, Layers, GraduationCap, Award, Users } from 'lucide-angular';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink, LucideAngularModule],
  template: `
    <div class="min-h-screen bg-paper">

      <!-- Hero -->
      <section class="relative py-20 px-4 bg-paper overflow-hidden">
        <div class="absolute inset-0 bg-grid opacity-40 pointer-events-none"></div>
        <div class="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-gold/5 to-transparent pointer-events-none"></div>
        <div class="relative max-w-4xl mx-auto text-center">
          <div class="w-36 h-36 rounded-full overflow-hidden border-[3px] border-gold mx-auto mb-8 shadow-[0_0_30px_rgba(184,134,11,0.2)]">
            <img src="/assets/profile.jpeg" alt="Kurhula Success Maluleke" class="w-full h-full object-cover">
          </div>
          <h1 class="text-4xl sm:text-5xl font-bold font-serif text-ink mb-3">
            Maluleke Kurhula Success
          </h1>
          <p class="text-lg font-medium text-gold mb-4">
            Software Engineer & AI Systems Architect
          </p>
          <div class="flex items-center justify-center gap-4 text-muted text-sm flex-wrap">
            <span class="flex items-center gap-1.5">
              <lucide-icon [img]="MapPin" class="w-4 h-4"></lucide-icon>
              Johannesburg, South Africa
            </span>
            <span class="text-ink/20">|</span>
            <span class="flex items-center gap-1.5">
              <lucide-icon [img]="Globe" class="w-4 h-4"></lucide-icon>
              BSc Computer Science & Mathematics — Final Year
            </span>
          </div>
        </div>
      </section>

      <!-- Bio -->
      <section class="py-16 px-4">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-2xl font-bold font-serif text-ink mb-6 heading-accent">About Me</h2>
          <div class="space-y-5 text-muted leading-relaxed text-base">
            <p>
              Building practical digital systems that solve real-world challenges. I am a
              <strong class="text-ink">Software Engineer</strong> designing AI-driven systems —
              a <strong class="text-ink">final year BSc Computer Science & Mathematics</strong>
              student building practical digital systems through my companies.
            </p>
            <p>
              My focus is creating <strong class="text-ink">reliable platforms</strong> that solve
              complex challenges in education, finance, community infrastructure, and artificial intelligence.
              Where most engineers write code, I reason through systems — Computer Science shapes how I
              architect, Mathematics shapes how I think.
            </p>
            <p>
              That combination produces software that is not just functional, but structurally sound
              from the ground up. I architect and build distributed fullstack systems with AI-native
              integration — from pixel-perfect UIs with Angular and Next.js, to designing robust backends
              with FastAPI and Python.
            </p>
          </div>
        </div>
      </section>

      <!-- Architecture Approach -->
      <section class="py-16 px-4 bg-ink text-paper">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-2xl font-bold font-serif mb-10 text-center heading-accent-center text-paper">
            Architecture Approach
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="glass-card p-6">
              <div class="w-10 h-10 rounded-lg bg-gold/20 flex items-center justify-center mb-4">
                <lucide-icon [img]="Layers" class="w-5 h-5 text-gold"></lucide-icon>
              </div>
              <h3 class="text-base font-bold mb-2">Distributed Systems</h3>
              <p class="text-sm text-paper/70 leading-relaxed">
                Multi-backend architecture — Next.js gateway, FastAPI for AI workloads, Django for enterprise logic.
                Systems designed first, coded second.
              </p>
            </div>
            <div class="glass-card p-6">
              <div class="w-10 h-10 rounded-lg bg-gold/20 flex items-center justify-center mb-4">
                <lucide-icon [img]="Bot" class="w-5 h-5 text-gold"></lucide-icon>
              </div>
              <h3 class="text-base font-bold mb-2">AI-Native Design</h3>
              <p class="text-sm text-paper/70 leading-relaxed">
                RAG pipelines, LangChain integration, embeddings, and semantic search built into
                the core architecture — not bolted on afterwards.
              </p>
            </div>
            <div class="glass-card p-6">
              <div class="w-10 h-10 rounded-lg bg-gold/20 flex items-center justify-center mb-4">
                <lucide-icon [img]="Database" class="w-5 h-5 text-gold"></lucide-icon>
              </div>
              <h3 class="text-base font-bold mb-2">Hybrid Data Layer</h3>
              <p class="text-sm text-paper/70 leading-relaxed">
                PostgreSQL for relational data, MongoDB for documents, Redis for caching and queues —
                the right database for each data shape.
              </p>
            </div>
            <div class="glass-card p-6">
              <div class="w-10 h-10 rounded-lg bg-gold/20 flex items-center justify-center mb-4">
                <lucide-icon [img]="Server" class="w-5 h-5 text-gold"></lucide-icon>
              </div>
              <h3 class="text-base font-bold mb-2">Production-Grade</h3>
              <p class="text-sm text-paper/70 leading-relaxed">
                TypeScript end-to-end, comprehensive testing, CI/CD automation, and constitutional
                governance (10 constitutions, 355 rules) for team process.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Tech Stack -->
      <section class="py-16 px-4 bg-paper">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-2xl font-bold font-serif text-ink mb-10 text-center heading-accent-center">
            Full Stack Expertise
          </h2>
          <div class="space-y-8">

            <div>
              <h3 class="text-base font-semibold text-gold mb-4 flex items-center gap-2">
                <lucide-icon [img]="Code" class="w-4 h-4"></lucide-icon> Frontend
              </h3>
              <div class="flex flex-wrap gap-2">
                <span class="skill-tag">HTML5</span>
                <span class="skill-tag">CSS3</span>
                <span class="skill-tag">JavaScript</span>
                <span class="skill-tag">TypeScript</span>
                <span class="skill-tag">Next.js 14</span>
                <span class="skill-tag">Angular 18</span>
                <span class="skill-tag">Tailwind CSS</span>
                <span class="skill-tag">Custom CSS</span>
              </div>
            </div>

            <div>
              <h3 class="text-base font-semibold text-gold mb-4 flex items-center gap-2">
                <lucide-icon [img]="Server" class="w-4 h-4"></lucide-icon> Backend
              </h3>
              <div class="flex flex-wrap gap-2">
                <span class="skill-tag">Next.js API</span>
                <span class="skill-tag">FastAPI</span>
                <span class="skill-tag">Python</span>
                <span class="skill-tag">Node.js</span>
                <span class="skill-tag">Django</span>
                <span class="skill-tag">REST APIs</span>
                <span class="skill-tag">GraphQL</span>
              </div>
            </div>

            <div>
              <h3 class="text-base font-semibold text-gold mb-4 flex items-center gap-2">
                <lucide-icon [img]="Database" class="w-4 h-4"></lucide-icon> Database
              </h3>
              <div class="flex flex-wrap gap-2">
                <span class="skill-tag">PostgreSQL</span>
                <span class="skill-tag">Prisma ORM</span>
                <span class="skill-tag">MongoDB</span>
                <span class="skill-tag">Redis</span>
              </div>
            </div>

            <div>
              <h3 class="text-base font-semibold text-gold mb-4 flex items-center gap-2">
                <lucide-icon [img]="Bot" class="w-4 h-4"></lucide-icon> AI & ML
              </h3>
              <div class="flex flex-wrap gap-2">
                <span class="skill-tag">LangChain</span>
                <span class="skill-tag">OpenAI API</span>
                <span class="skill-tag">RAG Systems</span>
                <span class="skill-tag">ChromaDB</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- Experience & Education -->
      <section class="py-16 px-4 bg-ink/5">
        <div class="max-w-4xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 class="text-base font-semibold text-gold mb-4 flex items-center gap-2">
                <lucide-icon [img]="Award" class="w-4 h-4"></lucide-icon> Experience
              </h3>
              <div class="space-y-4">
                <div class="card p-5">
                  <div class="text-sm text-muted mb-1">2020 – Present</div>
                  <div class="font-semibold text-ink">Founder & Lead Engineer</div>
                  <div class="text-sm text-muted">KSDRILL-SA — Technology Studio</div>
                </div>
                <div class="card p-5">
                  <div class="text-sm text-muted mb-1">2023 – Present</div>
                  <div class="font-semibold text-ink">Co-Founder</div>
                  <div class="text-sm text-muted">GrowthCore Solutions — Digital Growth Agency</div>
                </div>
              </div>
            </div>
            <div>
              <h3 class="text-base font-semibold text-gold mb-4 flex items-center gap-2">
                <lucide-icon [img]="GraduationCap" class="w-4 h-4"></lucide-icon> Education
              </h3>
              <div class="space-y-4">
                <div class="card p-5">
                  <div class="text-sm text-muted mb-1">2022 – 2026 (Expected)</div>
                  <div class="font-semibold text-ink">BSc Computer Science & Mathematics</div>
                  <div class="text-sm text-muted">University of Johannesburg / UNISA</div>
                </div>
                <div class="card p-5">
                  <div class="text-sm text-muted mb-1">Self-Directed</div>
                  <div class="font-semibold text-ink">Systems Architecture & AI Engineering</div>
                  <div class="text-sm text-muted">FastAPI · LangChain · RAG · PostgreSQL · Docker</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="py-16 px-4 bg-gold text-paper">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl font-bold font-serif mb-4">Let's Build Something Together</h2>
          <p class="text-base mb-8 text-paper/90">
            Ready to architect your next production-grade system?
          </p>
          <a routerLink="/contact" class="btn-cta" style="background: var(--ink); color: var(--paper);">
            Get in Touch
            <lucide-icon [img]="ArrowRight" class="w-5 h-5"></lucide-icon>
          </a>
        </div>
      </section>

    </div>
  `,
})
export class AboutComponent {
  readonly MapPin = MapPin;
  readonly Globe = Globe;
  readonly ArrowRight = ArrowRight;
  readonly Code = Code;
  readonly Server = Server;
  readonly Database = Database;
  readonly Bot = Bot;
  readonly Layers = Layers;
  readonly GraduationCap = GraduationCap;
  readonly Award = Award;
  readonly Users = Users;
}
