import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, MapPin, Globe, ArrowRight, Code, Cpu, Database, Cloud, Terminal, GitBranch, Zap, Layers, Bot, Server, Box, Shield, Gauge, Container, Github, Rocket, BarChart3, Eye, FlaskConical, CloudCog, TestTube } from 'lucide-angular';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, LucideAngularModule],
  template: `
    <!-- HERO SECTION -->
    <section class="min-h-[90vh] flex items-center justify-center px-4 py-20 bg-gradient-to-b from-paper to-amber-50/30">
      <div class="max-w-5xl mx-auto w-full">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Text Content -->
          <div class="order-2 lg:order-1">
            <div class="flex items-center gap-2 mb-4">
              <span class="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 text-green text-sm font-medium rounded-full border border-green-500/30">
                <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Available for Projects
              </span>
            </div>
            
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-ink mb-4 leading-tight">
              Software Engineer<br>
              <span class="text-gold">& AI Systems Architect</span>
            </h1>
            
            <p class="text-lg text-muted mb-6 leading-relaxed max-w-lg">
              Building scalable, production-grade digital systems across fintech, SaaS, healthcare, and enterprise domains. I turn complex problems into elegant solutions.
            </p>
            
            <div class="flex items-center gap-4 mb-8 text-muted">
              <lucide-icon [img]="MapPin" class="w-5 h-5 text-gold"></lucide-icon>
              <span class="text-base">Johannesburg, South Africa</span>
              <span class="text-ink/20">|</span>
              <lucide-icon [img]="Globe" class="w-5 h-5 text-gold"></lucide-icon>
              <span class="text-base">African Roots, Global Impact</span>
            </div>
            
            <div class="flex flex-col sm:flex-row gap-4">
              <a routerLink="/projects" class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-paper font-bold rounded-xl hover:bg-gold2 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 min-h-[48px]">
                View Projects
                <lucide-icon [img]="ArrowRight" class="w-5 h-5"></lucide-icon>
              </a>
              <a routerLink="/contact" class="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-ink/20 text-ink font-bold rounded-xl hover:bg-ink/5 hover:border-gold transition-all min-h-[48px]">
                Get in Touch
              </a>
            </div>
          </div>
          
          <!-- Profile Image -->
          <div class="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div class="relative">
              <div class="absolute inset-0 bg-gradient-to-br from-gold/20 to-amber-200/30 rounded-full blur-3xl"></div>
              <img src="/assets/profile.jpeg" alt="Kurhula Success Maluleke" class="relative w-72 h-72 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-gold shadow-2xl">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- TECH STACK SECTION -->
    <section class="py-20 px-4 bg-ink text-paper">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold font-serif mb-4">My Tech Stack</h2>
          <p class="text-muted text-lg">Production-grade tools for production-grade systems</p>
        </div>
        
        <!-- Frontend -->
        <div class="mb-10">
          <h3 class="text-xl font-bold text-gold mb-4 flex items-center gap-2">
            <lucide-icon [img]="Code" class="w-6 h-6"></lucide-icon>
            Frontend Layer
          </h3>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            <span class="px-4 py-2 bg-paper/10 rounded-lg text-sm font-mono text-center hover:bg-paper/20 transition-colors">HTML</span>
            <span class="px-4 py-2 bg-paper/10 rounded-lg text-sm font-mono text-center hover:bg-paper/20 transition-colors">CSS</span>
            <span class="px-4 py-2 bg-paper/10 rounded-lg text-sm font-mono text-center hover:bg-paper/20 transition-colors">JavaScript</span>
            <span class="px-4 py-2 bg-paper/10 rounded-lg text-sm font-mono text-center hover:bg-paper/20 transition-colors">TypeScript</span>
            <span class="px-4 py-2 bg-paper/10 rounded-lg text-sm font-mono text-center hover:bg-paper/20 transition-colors">Next.js</span>
            <span class="px-4 py-2 bg-paper/10 rounded-lg text-sm font-mono text-center hover:bg-paper/20 transition-colors">Angular</span>
            <span class="px-4 py-2 bg-paper/10 rounded-lg text-sm font-mono text-center hover:bg-paper/20 transition-colors">Tailwind CSS</span>
            <span class="px-4 py-2 bg-paper/10 rounded-lg text-sm font-mono text-center hover:bg-paper/20 transition-colors">shadcn/ui</span>
          </div>
        </div>
        
        <!-- Backend Gateway -->
        <div class="mb-10">
          <h3 class="text-xl font-bold text-gold mb-4 flex items-center gap-2">
            <lucide-icon [img]="Server" class="w-6 h-6"></lucide-icon>
            Backend Gateway
          </h3>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            <span class="px-4 py-2 bg-paper/10 rounded-lg text-sm font-mono text-center hover:bg-paper/20 transition-colors">Next.js API</span>
            <span class="px-4 py-2 bg-paper/10 rounded-lg text-sm font-mono text-center hover:bg-paper/20 transition-colors">NextAuth.js</span>
            <span class="px-4 py-2 bg-paper/10 rounded-lg text-sm font-mono text-center hover:bg-paper/20 transition-colors">Node.js</span>
            <span class="px-4 py-2 bg-paper/10 rounded-lg text-sm font-mono text-center hover:bg-paper/20 transition-colors">Redis</span>
            <span class="px-4 py-2 bg-paper/10 rounded-lg text-sm font-mono text-center hover:bg-paper/20 transition-colors">BullMQ</span>
          </div>
        </div>
        
        <!-- AI Backend -->
        <div class="mb-10">
          <h3 class="text-xl font-bold text-gold mb-4 flex items-center gap-2">
            <lucide-icon [img]="Bot" class="w-6 h-6"></lucide-icon>
            AI Backend
          </h3>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            <span class="px-4 py-2 bg-paper/10 rounded-lg text-sm font-mono text-center hover:bg-paper/20 transition-colors">Python</span>
            <span class="px-4 py-2 bg-paper/10 rounded-lg text-sm font-mono text-center hover:bg-paper/20 transition-colors">FastAPI</span>
            <span class="px-4 py-2 bg-paper/10 rounded-lg text-sm font-mono text-center hover:bg-paper/20 transition-colors">LangChain</span>
            <span class="px-4 py-2 bg-paper/10 rounded-lg text-sm font-mono text-center hover:bg-paper/20 transition-colors">ChromaDB</span>
          </div>
        </div>
        
        <!-- Enterprise Backend -->
        <div class="mb-10">
          <h3 class="text-xl font-bold text-gold mb-4 flex items-center gap-2">
            <lucide-icon [img]="Layers" class="w-6 h-6"></lucide-icon>
            Enterprise Backend
          </h3>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            <span class="px-4 py-2 bg-paper/10 rounded-lg text-sm font-mono text-center hover:bg-paper/20 transition-colors">Django</span>
          </div>
        </div>
        
        <!-- Database -->
        <div class="mb-10">
          <h3 class="text-xl font-bold text-gold mb-4 flex items-center gap-2">
            <lucide-icon [img]="Database" class="w-6 h-6"></lucide-icon>
            Database Layer
          </h3>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            <span class="px-4 py-2 bg-paper/10 rounded-lg text-sm font-mono text-center hover:bg-paper/20 transition-colors">PostgreSQL</span>
            <span class="px-4 py-2 bg-paper/10 rounded-lg text-sm font-mono text-center hover:bg-paper/20 transition-colors">Prisma</span>
            <span class="px-4 py-2 bg-paper/10 rounded-lg text-sm font-mono text-center hover:bg-paper/20 transition-colors">MongoDB</span>
            <span class="px-4 py-2 bg-paper/10 rounded-lg text-sm font-mono text-center hover:bg-paper/20 transition-colors">Redis</span>
          </div>
        </div>
        
        <!-- Testing -->
        <div class="mb-10">
          <h3 class="text-xl font-bold text-gold mb-4 flex items-center gap-2">
            <lucide-icon [img]="TestTube" class="w-6 h-6"></lucide-icon>
            Testing
          </h3>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            <span class="px-4 py-2 bg-paper/10 rounded-lg text-sm font-mono text-center hover:bg-paper/20 transition-colors">Jest</span>
            <span class="px-4 py-2 bg-paper/10 rounded-lg text-sm font-mono text-center hover:bg-paper/20 transition-colors">Vitest</span>
            <span class="px-4 py-2 bg-paper/10 rounded-lg text-sm font-mono text-center hover:bg-paper/20 transition-colors">Playwright</span>
          </div>
        </div>
        
        <!-- Infrastructure -->
        <div>
          <h3 class="text-xl font-bold text-gold mb-4 flex items-center gap-2">
            <lucide-icon [img]="Container" class="w-6 h-6"></lucide-icon>
            Infrastructure
          </h3>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            <span class="px-4 py-2 bg-paper/10 rounded-lg text-sm font-mono text-center hover:bg-paper/20 transition-colors">Vercel</span>
            <span class="px-4 py-2 bg-paper/10 rounded-lg text-sm font-mono text-center hover:bg-paper/20 transition-colors">Docker</span>
            <span class="px-4 py-2 bg-paper/10 rounded-lg text-sm font-mono text-center hover:bg-paper/20 transition-colors">GitHub Actions</span>
            <span class="px-4 py-2 bg-paper/10 rounded-lg text-sm font-mono text-center hover:bg-paper/20 transition-colors">Sentry</span>
            <span class="px-4 py-2 bg-paper/10 rounded-lg text-sm font-mono text-center hover:bg-paper/20 transition-colors">Better Stack</span>
            <span class="px-4 py-2 bg-paper/10 rounded-lg text-sm font-mono text-center hover:bg-paper/20 transition-colors">Prometheus</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ABOUT PREVIEW -->
    <section class="py-20 px-4 bg-paper">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl sm:text-4xl font-bold font-serif text-ink mb-6">About Me</h2>
        <p class="text-lg text-muted mb-8 leading-relaxed">
          I design and build distributed fullstack systems with AI integration. From frontend to backend, 
          from databases to deployment — I architect complete solutions that scale.
        </p>
        <a routerLink="/about" class="inline-flex items-center gap-2 px-8 py-4 bg-gold text-paper font-bold rounded-xl hover:bg-gold2 transition-all min-h-[48px]">
          Learn More About Me
          <lucide-icon [img]="ArrowRight" class="w-5 h-5"></lucide-icon>
        </a>
      </div>
    </section>

    <!-- FEATURED REPOS -->
    <section class="py-20 px-4 bg-ink/5">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl sm:text-4xl font-bold font-serif text-ink mb-8 text-center">Featured Work</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-6 rounded-xl border border-ink/10 bg-paper hover:border-gold/40 transition-all hover:shadow-lg">
            <lucide-icon [img]="GitBranch" class="w-10 h-10 text-gold mb-4"></lucide-icon>
            <h3 class="text-xl font-bold text-ink mb-2">MALULEKE-KS</h3>
            <p class="text-muted mb-4">This portfolio showcasing 8+ projects across fintech, SaaS, healthcare, and enterprise domains.</p>
            <a href="https://github.com/MALULEKE-KS" target="_blank" class="inline-flex items-center gap-2 text-gold hover:text-gold2 font-medium">
              View GitHub <lucide-icon [img]="ArrowRight" class="w-4 h-4"></lucide-icon>
            </a>
          </div>
          <div class="p-6 rounded-xl border border-ink/10 bg-paper hover:border-gold/40 transition-all hover:shadow-lg">
            <lucide-icon [img]="Rocket" class="w-10 h-10 text-gold mb-4"></lucide-icon>
            <h3 class="text-xl font-bold text-ink mb-2">GrowthCore Solutions</h3>
            <p class="text-muted mb-4">Digital growth agency platform with AI-powered analytics and automation tools.</p>
            <a href="https://github.com/GrowthCore-Solutions" target="_blank" class="inline-flex items-center gap-2 text-gold hover:text-gold2 font-medium">
              View GitHub <lucide-icon [img]="ArrowRight" class="w-4 h-4"></lucide-icon>
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class HomeComponent {
  readonly MapPin = MapPin;
  readonly Globe = Globe;
  readonly ArrowRight = ArrowRight;
  readonly Code = Code;
  readonly Cpu = Cpu;
  readonly Database = Database;
  readonly Cloud = Cloud;
  readonly Terminal = Terminal;
  readonly GitBranch = GitBranch;
  readonly Zap = Zap;
  readonly Layers = Layers;
  readonly Bot = Bot;
  readonly Server = Server;
  readonly Box = Box;
  readonly Shield = Shield;
  readonly Gauge = Gauge;
  readonly TestTube = TestTube;
  readonly Container = Container;
  readonly Github = Github;
  readonly Rocket = Rocket;
  readonly BarChart3 = BarChart3;
  readonly Eye = Eye;
  readonly FlaskConical = FlaskConical;
  readonly CloudCog = CloudCog;
}
