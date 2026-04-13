import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Rocket, Mail, ExternalLink, Code, Database, Brain, ArrowRight } from 'lucide-angular';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, LucideAngularModule],
  template: `
    <!-- HERO SECTION - R04: min-height, never fixed -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-paper">
      <div class="absolute inset-0 bg-gradient-to-br from-paper via-paper to-amber-50/30"></div>
      
      <div class="relative z-10 container mx-auto px-4 py-20">
        <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <!-- Profile Image - R03: Large and visible -->
          <div class="flex-shrink-0">
            <div class="relative">
              <div class="w-72 h-72 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-gold/30">
                <img src="/assets/profile.jpeg" alt="Maluleke Kurhula Success" 
                     class="w-full h-full object-cover object-top">
              </div>
            </div>
          </div>
          
          <!-- Content -->
          <div class="flex-1 text-center lg:text-left">
            <h1 class="text-4xl sm:text-5xl lg:text-7xl font-bold font-serif text-ink mb-4 leading-tight">
              <span class="text-gold">Maluleke</span><br>
              Kurhula Success
            </h1>
            <h2 class="text-xl sm:text-2xl lg:text-3xl font-semibold text-muted mb-6">
              Software Engineer & AI Systems Architect
            </h2>
            <p class="text-lg lg:text-xl text-muted max-w-2xl mb-8 leading-relaxed">
              Building scalable, production-grade digital systems across fintech, SaaS, healthcare, and enterprise domains.
            </p>
            
            <!-- CTA Buttons - R11: 44px touch targets -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a routerLink="/projects" 
                 class="inline-flex items-center justify-center px-8 py-4 bg-gold text-paper font-bold rounded-xl hover:bg-gold2 transition-colors min-h-[52px]">
                <lucide-icon [img]="Rocket" class="w-5 h-5 mr-2"></lucide-icon>
                View Projects
              </a>
              <a routerLink="/contact" 
                 class="inline-flex items-center justify-center px-8 py-4 border-2 border-ink/20 text-ink font-bold rounded-xl hover:bg-ink/5 hover:border-gold/40 transition-colors min-h-[52px]">
                <lucide-icon [img]="Mail" class="w-5 h-5 mr-2"></lucide-icon>
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- COMPANIES SECTION -->
    <section class="py-20 px-4 bg-ink text-paper">
      <div class="container mx-auto max-w-6xl">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold font-serif mb-4">Organizations</h2>
        </div>
        <div class="grid md:grid-cols-2 gap-8">
          <!-- KSDRILL-SA -->
          <div class="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-16 h-16 bg-gold/20 rounded-xl flex items-center justify-center">
                <lucide-icon [img]="Code" class="w-8 h-8 text-gold"></lucide-icon>
              </div>
              <div>
                <h3 class="text-2xl font-bold font-serif">KSDRILL-SA</h3>
                <p class="text-gold text-sm">Technology Studio</p>
              </div>
            </div>
            <a href="https://github.com/KSDRILL-SA" target="_blank" rel="noopener"
               class="inline-flex items-center text-gold hover:text-gold2 transition-colors">
              View on GitHub
              <lucide-icon [img]="ExternalLink" class="w-4 h-4 ml-2"></lucide-icon>
            </a>
          </div>
          
          <!-- GrowthCore Solutions -->
          <div class="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center">
                <lucide-icon [img]="ArrowRight" class="w-8 h-8 text-green-400"></lucide-icon>
              </div>
              <div>
                <h3 class="text-2xl font-bold font-serif">GrowthCore Solutions</h3>
                <p class="text-green-400 text-sm">Digital Growth Agency</p>
              </div>
            </div>
            <a href="https://github.com/GrowthCore-Solutions" target="_blank" rel="noopener"
               class="inline-flex items-center text-gold hover:text-gold2 transition-colors">
              View on GitHub
              <lucide-icon [img]="ExternalLink" class="w-4 h-4 ml-2"></lucide-icon>
            </a>
          </div>
        </div>
      </div>
    </section>
    
    <!-- TECH STACK SECTION -->
    <section class="py-20 px-4 bg-paper">
      <div class="container mx-auto max-w-6xl">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold font-serif text-ink mb-4">Technical Stack</h2>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8">
          <div class="p-6 rounded-2xl border border-ink/10 bg-paper hover:shadow-xl transition-shadow">
            <div class="w-12 h-12 bg-ink/5 rounded-lg flex items-center justify-center mb-4">
              <lucide-icon [img]="Code" class="w-6 h-6 text-gold"></lucide-icon>
            </div>
            <h3 class="text-xl font-bold font-serif text-ink mb-4">Frontend</h3>
            <div class="flex flex-wrap gap-2">
              <span *ngFor="let tech of frontendStack" class="px-3 py-1 bg-ink/5 text-muted text-sm rounded-lg">{{ tech }}</span>
            </div>
          </div>
          
          <div class="p-6 rounded-2xl border border-ink/10 bg-paper hover:shadow-xl transition-shadow">
            <div class="w-12 h-12 bg-ink/5 rounded-lg flex items-center justify-center mb-4">
              <lucide-icon [img]="Database" class="w-6 h-6 text-gold"></lucide-icon>
            </div>
            <h3 class="text-xl font-bold font-serif text-ink mb-4">Backend</h3>
            <div class="flex flex-wrap gap-2">
              <span *ngFor="let tech of backendStack" class="px-3 py-1 bg-ink/5 text-muted text-sm rounded-lg">{{ tech }}</span>
            </div>
          </div>
          
          <div class="p-6 rounded-2xl border border-ink/10 bg-paper hover:shadow-xl transition-shadow">
            <div class="w-12 h-12 bg-ink/5 rounded-lg flex items-center justify-center mb-4">
              <lucide-icon [img]="Brain" class="w-6 h-6 text-gold"></lucide-icon>
            </div>
            <h3 class="text-xl font-bold font-serif text-ink mb-4">AI & Data</h3>
            <div class="flex flex-wrap gap-2">
              <span *ngFor="let tech of aiStack" class="px-3 py-1 bg-ink/5 text-muted text-sm rounded-lg">{{ tech }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- FLAGSHIP SYSTEMS - R32: No business logic, just links -->
    <section class="py-20 px-4 bg-gradient-to-br from-ink to-ink/90 text-paper">
      <div class="container mx-auto max-w-6xl">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold font-serif mb-4">Flagship Systems</h2>
          <p class="text-muted text-lg">Production platforms via GitHub</p>
        </div>
        
        <div class="grid md:grid-cols-2 gap-8">
          <a *ngFor="let repo of flagshipRepos" 
             href="{{ repo.url }}" target="_blank" rel="noopener"
             class="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-gold/40 transition-all duration-300 block">
            <div class="flex items-start justify-between mb-4">
              <lucide-icon [img]="ExternalLink" class="w-6 h-6 text-gold"></lucide-icon>
              <span class="px-3 py-1 bg-gold/20 text-gold text-xs font-semibold rounded-full">{{ repo.status }}</span>
            </div>
            <h3 class="text-2xl font-bold font-serif mb-2">{{ repo.name }}</h3>
            <lucide-icon [img]="ExternalLink" class="w-4 h-4 text-gold mt-4"></lucide-icon>
          </a>
        </div>
      </div>
    </section>
    
    <!-- CONTACT CTA -->
    <section class="py-20 px-4 bg-gradient-to-r from-gold via-gold2 to-amber-500 text-paper">
      <div class="container mx-auto max-w-4xl text-center">
        <h2 class="text-3xl lg:text-4xl font-bold font-serif mb-6">Ready to Build Something Extraordinary?</h2>
        <p class="text-xl mb-8 opacity-90">Open to full-time, contract, and exciting projects</p>
        <div class="flex flex-wrap gap-4 justify-center">
          <a routerLink="/contact" 
             class="inline-flex items-center justify-center px-8 py-4 bg-ink text-paper font-bold rounded-xl hover:bg-ink/80 transition-colors min-h-[52px]">
            Let's Talk
          </a>
          <a href="https://linkedin.com/in/kurhula-success-maluleke-32153231a" target="_blank"
             class="inline-flex items-center justify-center px-8 py-4 bg-white/20 backdrop-blur text-paper font-bold rounded-xl hover:bg-white/30 transition-colors min-h-[52px]">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  `,
})
export class HomeComponent {
  readonly Rocket = Rocket;
  readonly Mail = Mail;
  readonly ExternalLink = ExternalLink;
  readonly Code = Code;
  readonly Database = Database;
  readonly Brain = Brain;
  readonly ArrowRight = ArrowRight;
  
  frontendStack = ['Next.js', 'TypeScript', 'Tailwind CSS', 'Angular'];
  backendStack = ['Node.js', 'FastAPI', 'PostgreSQL', 'Docker'];
  aiStack = ['Python', 'LangChain', 'PostgreSQL', 'AWS'];
  
  flagshipRepos = [
    { name: 'KSDRILL-SA', url: 'https://github.com/KSDRILL-SA', status: 'Active' },
    { name: 'GrowthCore Solutions', url: 'https://github.com/GrowthCore-Solutions', status: 'Active' },
    { name: 'MALULEKE-KS', url: 'https://github.com/MALULEKE-KS', status: 'Active' },
    { name: 'system-design-template', url: 'https://github.com/MALULEKE-KS/system-design-template', status: 'Active' }
  ];
}
