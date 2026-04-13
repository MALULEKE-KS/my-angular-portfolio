import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, MapPin, Globe, ArrowRight, Code, Cpu, Database, Bot, Server, Layers, Briefcase, GraduationCap, Award } from 'lucide-angular';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink, LucideAngularModule],
  template: `
    <div class="min-h-screen bg-paper">
      <!-- Hero -->
      <section class="py-20 px-4 bg-gradient-to-b from-amber-50/30 to-paper">
        <div class="max-w-4xl mx-auto text-center">
          <img src="/assets/profile.jpeg" alt="Kurhula Success Maluleke" class="w-40 h-40 rounded-full border-4 border-gold mx-auto mb-8 shadow-xl">
          <h1 class="text-4xl sm:text-5xl font-bold font-serif text-ink mb-4">Kurhula Success Maluleke</h1>
          <p class="text-xl text-gold font-medium mb-4">Software Engineer & AI Systems Architect</p>
          <div class="flex items-center justify-center gap-4 text-muted">
            <lucide-icon [img]="MapPin" class="w-5 h-5"></lucide-icon>
            <span>Johannesburg, South Africa</span>
            <span class="text-ink/20">|</span>
            <lucide-icon [img]="Globe" class="w-5 h-5"></lucide-icon>
            <span>African Roots, Global Impact</span>
          </div>
        </div>
      </section>

      <!-- Bio -->
      <section class="py-16 px-4">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-2xl font-bold font-serif text-ink mb-6">About Me</h2>
          <div class="prose prose-lg text-muted leading-relaxed space-y-4">
            <p>
              I architect and build distributed fullstack systems with AI-native integration. My expertise spans 
              the entire modern development ecosystem — from crafting pixel-perfect UIs with Angular and Next.js, 
              to designing robust backends with FastAPI and Django.
            </p>
            <p>
              I specialize in creating production-grade systems that handle fintech, SaaS, healthcare, and enterprise 
              workloads. Whether it's building RAG pipelines for AI applications, designing scalable microservices 
              architectures, or implementing complex business logic — I deliver solutions that scale.
            </p>
          </div>
        </div>
      </section>

      <!-- Architecture Approach -->
      <section class="py-16 px-4 bg-ink text-paper">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-2xl font-bold font-serif mb-8 text-center">My Architecture Approach</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="p-6 rounded-xl bg-paper/10 border border-paper/20">
              <lucide-icon [img]="Layers" class="w-8 h-8 text-gold mb-4"></lucide-icon>
              <h3 class="text-lg font-bold mb-2">Distributed Systems</h3>
              <p class="text-paper/70 text-sm">Multi-backend architecture with Next.js gateway, FastAPI for AI, and Django for enterprise logic.</p>
            </div>
            <div class="p-6 rounded-xl bg-paper/10 border border-paper/20">
              <lucide-icon [img]="Bot" class="w-8 h-8 text-gold mb-4"></lucide-icon>
              <h3 class="text-lg font-bold mb-2">AI-Native Design</h3>
              <p class="text-paper/70 text-sm">RAG pipelines, LangChain integration, embeddings, and semantic search built into the core.</p>
            </div>
            <div class="p-6 rounded-xl bg-paper/10 border border-paper/20">
              <lucide-icon [img]="Database" class="w-8 h-8 text-gold mb-4"></lucide-icon>
              <h3 class="text-lg font-bold mb-2">Hybrid Data Layer</h3>
              <p class="text-paper/70 text-sm">PostgreSQL for relational data, MongoDB for documents, Redis for caching and queues.</p>
            </div>
            <div class="p-6 rounded-xl bg-paper/10 border border-paper/20">
              <lucide-icon [img]="Server" class="w-8 h-8 text-gold mb-4"></lucide-icon>
              <h3 class="text-lg font-bold mb-2">Production-Grade</h3>
              <p class="text-paper/70 text-sm">TypeScript from frontend to backend, comprehensive testing, and CI/CD automation.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Tech Stack -->
      <section class="py-16 px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-2xl font-bold font-serif text-ink mb-8 text-center">Full Stack Expertise</h2>
          
          <div class="space-y-8">
            <div>
              <h3 class="text-lg font-bold text-gold mb-4 flex items-center gap-2">
                <lucide-icon [img]="Code" class="w-5 h-5"></lucide-icon>
                Frontend
              </h3>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-ink/5 text-ink rounded-full text-sm font-mono">HTML</span>
                <span class="px-3 py-1 bg-ink/5 text-ink rounded-full text-sm font-mono">CSS</span>
                <span class="px-3 py-1 bg-ink/5 text-ink rounded-full text-sm font-mono">JavaScript</span>
                <span class="px-3 py-1 bg-ink/5 text-ink rounded-full text-sm font-mono">TypeScript</span>
                <span class="px-3 py-1 bg-ink/5 text-ink rounded-full text-sm font-mono">Next.js</span>
                <span class="px-3 py-1 bg-ink/5 text-ink rounded-full text-sm font-mono">Angular</span>
                <span class="px-3 py-1 bg-ink/5 text-ink rounded-full text-sm font-mono">Tailwind CSS</span>
              </div>
            </div>
            
            <div>
              <h3 class="text-lg font-bold text-gold mb-4 flex items-center gap-2">
                <lucide-icon [img]="Server" class="w-5 h-5"></lucide-icon>
                Backend Gateway
              </h3>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-ink/5 text-ink rounded-full text-sm font-mono">Next.js API</span>
                <span class="px-3 py-1 bg-ink/5 text-ink rounded-full text-sm font-mono">NextAuth.js</span>
                <span class="px-3 py-1 bg-ink/5 text-ink rounded-full text-sm font-mono">Node.js</span>
                <span class="px-3 py-1 bg-ink/5 text-ink rounded-full text-sm font-mono">Redis</span>
                <span class="px-3 py-1 bg-ink/5 text-ink rounded-full text-sm font-mono">BullMQ</span>
              </div>
            </div>
            
            <div>
              <h3 class="text-lg font-bold text-gold mb-4 flex items-center gap-2">
                <lucide-icon [img]="Bot" class="w-5 h-5"></lucide-icon>
                AI Backend
              </h3>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-ink/5 text-ink rounded-full text-sm font-mono">Python</span>
                <span class="px-3 py-1 bg-ink/5 text-ink rounded-full text-sm font-mono">FastAPI</span>
                <span class="px-3 py-1 bg-ink/5 text-ink rounded-full text-sm font-mono">LangChain</span>
                <span class="px-3 py-1 bg-ink/5 text-ink rounded-full text-sm font-mono">ChromaDB</span>
              </div>
            </div>
            
            <div>
              <h3 class="text-lg font-bold text-gold mb-4 flex items-center gap-2">
                <lucide-icon [img]="Layers" class="w-5 h-5"></lucide-icon>
                Enterprise
              </h3>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-ink/5 text-ink rounded-full text-sm font-mono">Django</span>
              </div>
            </div>
            
            <div>
              <h3 class="text-lg font-bold text-gold mb-4 flex items-center gap-2">
                <lucide-icon [img]="Database" class="w-5 h-5"></lucide-icon>
                Database
              </h3>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-ink/5 text-ink rounded-full text-sm font-mono">PostgreSQL</span>
                <span class="px-3 py-1 bg-ink/5 text-ink rounded-full text-sm font-mono">Prisma</span>
                <span class="px-3 py-1 bg-ink/5 text-ink rounded-full text-sm font-mono">MongoDB</span>
                <span class="px-3 py-1 bg-ink/5 text-ink rounded-full text-sm font-mono">Redis</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="py-16 px-4 bg-gold text-paper">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl font-bold font-serif mb-4">Let's Build Something Together</h2>
          <p class="text-lg mb-8 opacity-90">Ready to architect your next production-grade system?</p>
          <a routerLink="/contact" class="inline-flex items-center gap-2 px-8 py-4 bg-ink text-paper font-bold rounded-xl hover:bg-ink/80 transition-all min-h-[48px]">
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
  readonly Cpu = Cpu;
  readonly Database = Database;
  readonly Bot = Bot;
  readonly Server = Server;
  readonly Layers = Layers;
  readonly Briefcase = Briefcase;
  readonly GraduationCap = GraduationCap;
  readonly Award = Award;
}
