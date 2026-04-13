import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <!-- HERO SECTION - Full viewport height with dramatic gradient -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-paper">
      <!-- Animated gradient background -->
      <div class="absolute inset-0 bg-gradient-to-br from-paper via-paper to-amber-50/30"></div>
      <div class="absolute top-20 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-20 left-0 w-80 h-80 bg-amber-200/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
      
      <div class="relative z-10 container mx-auto px-4 py-20">
        <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <!-- Profile Image - Large and prominent -->
          <div class="flex-shrink-0">
            <div class="relative">
              <div class="w-72 h-72 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-gold/30 transform lg:rotate-3 hover:rotate-0 transition-transform duration-500">
                <img src="/assets/profile.jpeg" alt="Maluleke Kurhula Success" 
                     class="w-full h-full object-cover object-top">
              </div>
              <!-- Decorative elements -->
              <div class="absolute -bottom-4 -right-4 w-full h-full border-4 border-gold/20 rounded-2xl -z-10"></div>
              <div class="absolute -top-4 -left-4 w-24 h-24 bg-gold/20 rounded-full blur-2xl"></div>
            </div>
          </div>
          
          <!-- Content -->
          <div class="flex-1 text-center lg:text-left">
            <div class="inline-block px-4 py-2 bg-gold/10 text-gold text-sm font-semibold rounded-full mb-6">
              African Roots | Global Impact
            </div>
            <h1 class="text-4xl sm:text-5xl lg:text-7xl font-bold font-serif text-ink mb-4 leading-tight">
              <span class="text-gold">Maluleke</span><br>
              Kurhula Success
            </h1>
            <h2 class="text-xl sm:text-2xl lg:text-3xl font-semibold text-muted mb-6">
              Software Engineer & AI Systems Architect
            </h2>
            <p class="text-lg lg:text-xl text-muted max-w-2xl mb-8 leading-relaxed">
              Designing and building practical digital systems that solve real-world challenges. 
              Specializing in <span class="text-gold font-semibold">AI systems</span>, 
              <span class="text-gold font-semibold">SaaS platforms</span>, and 
              <span class="text-gold font-semibold">enterprise-grade architectures</span>.
            </p>
            
            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a routerLink="/projects" 
                 class="inline-flex items-center justify-center px-8 py-4 bg-gold text-paper font-bold rounded-xl hover:bg-gold2 transition-all duration-300 shadow-lg shadow-gold/30 hover:shadow-xl hover:shadow-gold/40 hover:-translate-y-1 min-h-[52px]">
                <span class="mr-2">🚀</span> View Projects
              </a>
              <a routerLink="/contact" 
                 class="inline-flex items-center justify-center px-8 py-4 border-2 border-ink/20 text-ink font-bold rounded-xl hover:bg-ink/5 hover:border-gold/40 transition-all duration-300 min-h-[52px]">
                <span class="mr-2">📬</span> Get in Touch
              </a>
            </div>
            
            <!-- Quick stats -->
            <div class="flex flex-wrap gap-8 mt-12 justify-center lg:justify-start">
              <div class="text-center">
                <div class="text-3xl font-bold text-gold">10+</div>
                <div class="text-sm text-muted">Projects Built</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-gold">5+</div>
                <div class="text-sm text-muted">Years Experience</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-gold">4</div>
                <div class="text-sm text-muted">Systems Live</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- COMPANIES SECTION -->
    <section class="py-20 px-4 bg-ink text-paper">
      <div class="container mx-auto max-w-6xl">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold font-serif mb-4">Companies & Organizations</h2>
          <p class="text-muted text-lg">Building through technology studios and agencies</p>
        </div>
        <div class="grid md:grid-cols-2 gap-8">
          <!-- KSDRILL-SA -->
          <div class="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-16 h-16 bg-gold/20 rounded-xl flex items-center justify-center text-3xl">⚡</div>
              <div>
                <h3 class="text-2xl font-bold font-serif">KSDRILL-SA</h3>
                <p class="text-gold text-sm">Technology Studio</p>
              </div>
            </div>
            <p class="text-lg mb-4">AI systems, SaaS, fintech, enterprise platforms</p>
            <a href="https://github.com/KSDRILL-SA" target="_blank" class="inline-flex items-center text-gold hover:text-gold2 transition-colors">
              <span class="mr-2">GitHub</span> →
            </a>
          </div>
          
          <!-- GrowthCore Solutions -->
          <div class="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center text-3xl">📈</div>
              <div>
                <h3 class="text-2xl font-bold font-serif">GrowthCore Solutions</h3>
                <p class="text-green-400 text-sm">Digital Growth Agency</p>
              </div>
            </div>
            <p class="text-lg mb-2">Web development, marketing, analytics</p>
            <p class="text-muted text-sm mb-4">Partner: Ngoneni Mponisi Forever</p>
            <a href="https://github.com/GrowthCore-Solutions" target="_blank" class="inline-flex items-center text-gold hover:text-gold2 transition-colors">
              <span class="mr-2">GitHub</span> →
            </a>
          </div>
        </div>
      </div>
    </section>
    
    <!-- TECH STACK SECTION -->
    <section class="py-20 px-4 bg-paper">
      <div class="container mx-auto max-w-6xl">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold font-serif text-ink mb-4">Technical Mastery</h2>
          <p class="text-muted text-lg">Production-grade stack for scalable systems</p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Frontend -->
          <div class="p-6 rounded-2xl border border-ink/10 bg-paper hover:shadow-xl transition-shadow">
            <div class="text-4xl mb-4">🎨</div>
            <h3 class="text-xl font-bold font-serif text-ink mb-4">Frontend</h3>
            <div class="flex flex-wrap gap-2">
              <span *ngFor="let tech of frontendStack" class="px-3 py-1 bg-ink/5 text-muted text-sm rounded-lg">{{ tech }}</span>
            </div>
          </div>
          
          <!-- Backend -->
          <div class="p-6 rounded-2xl border border-ink/10 bg-paper hover:shadow-xl transition-shadow">
            <div class="text-4xl mb-4">⚙️</div>
            <h3 class="text-xl font-bold font-serif text-ink mb-4">Backend</h3>
            <div class="flex flex-wrap gap-2">
              <span *ngFor="let tech of backendStack" class="px-3 py-1 bg-ink/5 text-muted text-sm rounded-lg">{{ tech }}</span>
            </div>
          </div>
          
          <!-- AI & Data -->
          <div class="p-6 rounded-2xl border border-ink/10 bg-paper hover:shadow-xl transition-shadow">
            <div class="text-4xl mb-4">🤖</div>
            <h3 class="text-xl font-bold font-serif text-ink mb-4">AI & Data</h3>
            <div class="flex flex-wrap gap-2">
              <span *ngFor="let tech of aiStack" class="px-3 py-1 bg-ink/5 text-muted text-sm rounded-lg">{{ tech }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- FLAGS & SHIPS SECTION -->
    <section class="py-20 px-4 bg-gradient-to-br from-ink to-ink/90 text-paper">
      <div class="container mx-auto max-w-6xl">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold font-serif mb-4">Flagship Systems</h2>
          <p class="text-muted text-lg">Production platforms solving real-world problems</p>
        </div>
        
        <div class="grid md:grid-cols-2 gap-8">
          <div *ngFor="let project of flagshipProjects" 
               class="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-gold/40 transition-all duration-300">
            <div class="flex items-start justify-between mb-4">
              <div class="text-4xl">{{ project.icon }}</div>
              <span class="px-3 py-1 bg-gold/20 text-gold text-xs font-semibold rounded-full">{{ project.status }}</span>
            </div>
            <h3 class="text-2xl font-bold font-serif mb-2">{{ project.name }}</h3>
            <p class="text-muted mb-4">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span *ngFor="let tech of project.stack" class="px-2 py-1 bg-white/10 text-xs rounded">{{ tech }}</span>
            </div>
            <div class="text-sm text-gold">{{ project.problem }}</div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- PHILOSOPHY SECTION -->
    <section class="py-20 px-4 bg-paper">
      <div class="container mx-auto max-w-4xl text-center">
        <h2 class="text-3xl lg:text-4xl font-bold font-serif text-ink mb-12">Engineering Philosophy</h2>
        <div class="grid md:grid-cols-5 gap-4">
          <div *ngFor="let principle of principles" 
               class="p-6 rounded-xl bg-ink text-paper hover:bg-gold transition-colors group cursor-default">
            <div class="text-2xl mb-2">{{ principle.icon }}</div>
            <div class="font-semibold text-sm">{{ principle.text }}</div>
          </div>
        </div>
        
        <div class="mt-16 p-8 rounded-2xl bg-ink text-paper">
          <h3 class="text-2xl font-bold font-serif mb-4">Development Process</h3>
          <div class="flex flex-wrap justify-center gap-8">
            <div class="flex items-center gap-2">
              <span class="w-12 h-12 bg-gold rounded-full flex items-center justify-center font-bold">1</span>
              <span class="font-semibold">Architecture</span>
            </div>
            <div class="text-gold text-2xl">→</div>
            <div class="flex items-center gap-2">
              <span class="w-12 h-12 bg-gold rounded-full flex items-center justify-center font-bold">2</span>
              <span class="font-semibold">Design</span>
            </div>
            <div class="text-gold text-2xl">→</div>
            <div class="flex items-center gap-2">
              <span class="w-12 h-12 bg-gold rounded-full flex items-center justify-center font-bold">3</span>
              <span class="font-semibold">Interface</span>
            </div>
            <div class="text-gold text-2xl">→</div>
            <div class="flex items-center gap-2">
              <span class="w-12 h-12 bg-gold rounded-full flex items-center justify-center font-bold">4</span>
              <span class="font-semibold">Development</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CONTACT CTA SECTION -->
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
  frontendStack = ['Next.js', 'TypeScript', 'Tailwind CSS', 'Angular', 'shadcn/ui'];
  backendStack = ['Node.js', 'Next.js API', 'NextAuth.js', 'BullMQ', 'Redis'];
  aiStack = ['Python', 'FastAPI', 'LangChain', 'ChromaDB', 'PostgreSQL'];
  
  flagshipProjects = [
    {
      icon: '💰',
      name: 'FundsLink Academy',
      status: 'In Progress',
      description: 'National education funding platform with AI matching',
      problem: 'Problem: Fragmented bursary applications',
      stack: ['Next.js', 'Node.js', 'Prisma', 'PostgreSQL', 'FastAPI']
    },
    {
      icon: '🏘️',
      name: 'Maphophe Community',
      status: 'Live',
      description: 'Rural digital governance platform',
      problem: 'Digital inclusion for underserved communities',
      stack: ['Next.js', 'Prisma', 'PostgreSQL']
    },
    {
      icon: '🏦',
      name: 'KSDRILL Reserve Bank',
      status: 'In Progress',
      description: 'Digital savings & microfinance platform',
      problem: 'Accessible financial tools for all',
      stack: ['Next.js', 'Prisma', 'PostgreSQL']
    },
    {
      icon: '🔄',
      name: 'SyncUp',
      status: 'Planning',
      description: 'Creator collaboration with privacy-first model',
      problem: 'Structured negotiation and 10-message limit system',
      stack: ['Next.js', 'Prisma', 'PostgreSQL']
    }
  ];
  
  principles = [
    { icon: '🎯', text: 'Design-First' },
    { icon: '🔧', text: 'Separation of Concerns' },
    { icon: '📦', text: 'Sequential Dev' },
    { icon: '🚀', text: 'Production-Ready' },
    { icon: '🤖', text: 'AI as Core' }
  ];
}
