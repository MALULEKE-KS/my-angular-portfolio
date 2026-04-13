import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="min-h-screen py-20 px-4 bg-paper">
      <div class="container mx-auto max-w-6xl">
        
        <!-- Header -->
        <div class="text-center mb-16">
          <h1 class="text-4xl lg:text-6xl font-bold font-serif text-ink mb-4">About Me</h1>
          <p class="text-xl text-muted">Software Engineer & AI Systems Architect</p>
        </div>
        
        <!-- Main Content -->
        <div class="grid lg:grid-cols-2 gap-12 items-start">
          
          <!-- Left Column - Image & Quick Facts -->
          <div class="space-y-8">
            <!-- Large Profile Image -->
            <div class="relative">
              <div class="w-full aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-gold/20">
                <img src="/assets/profile.jpeg" alt="Maluleke Kurhula Success" 
                     class="w-full h-full object-cover object-top">
              </div>
              <div class="absolute -bottom-4 -right-4 bg-gold text-paper px-6 py-3 rounded-xl font-bold shadow-lg">
                5+ Years Building
              </div>
            </div>
            
            <!-- Quick Facts -->
            <div class="grid grid-cols-2 gap-4">
              <div class="p-4 rounded-xl bg-ink/5 text-center">
                <div class="text-2xl font-bold text-gold">10+</div>
                <div class="text-sm text-muted">Projects</div>
              </div>
              <div class="p-4 rounded-xl bg-ink/5 text-center">
                <div class="text-2xl font-bold text-gold">4</div>
                <div class="text-sm text-muted">Live Systems</div>
              </div>
              <div class="p-4 rounded-xl bg-ink/5 text-center">
                <div class="text-2xl font-bold text-gold">2</div>
                <div class="text-sm text-muted">Companies</div>
              </div>
              <div class="p-4 rounded-xl bg-ink/5 text-center">
                <div class="text-2xl font-bold text-gold">1</div>
                <div class="text-sm text-muted">Mission</div>
              </div>
            </div>
          </div>
          
          <!-- Right Column - Bio & Details -->
          <div class="space-y-8">
            <div>
              <h2 class="text-3xl font-bold font-serif text-ink mb-4">Maluleke Kurhula Success</h2>
              <div class="inline-block px-4 py-2 bg-gold/10 text-gold text-sm font-semibold rounded-full mb-6">
                African Roots | Global Impact
              </div>
              <p class="text-lg text-muted leading-relaxed mb-6">
                Software Engineer and AI Systems Architect focused on building scalable real-world digital systems. 
                I specialize in SaaS platforms, fintech systems, AI-powered applications, and enterprise-grade architectures.
              </p>
              <p class="text-lg text-muted leading-relaxed">
                My approach follows sequential development — <span class="text-gold font-semibold">Architecture → Design → Interface → Development</span> — 
                ensuring every system is built with depth, stability, and production-readiness at its core.
              </p>
            </div>
            
            <!-- What I Do -->
            <div>
              <h3 class="text-2xl font-bold font-serif text-ink mb-4">What I Build</h3>
              <div class="space-y-3">
                <div class="flex items-start gap-4 p-4 rounded-xl bg-ink/5 hover:bg-gold/10 transition-colors">
                  <span class="text-2xl">🎯</span>
                  <div>
                    <div class="font-semibold text-ink">AI Systems</div>
                    <div class="text-sm text-muted">LangChain, FastAPI, intelligent automation</div>
                  </div>
                </div>
                <div class="flex items-start gap-4 p-4 rounded-xl bg-ink/5 hover:bg-gold/10 transition-colors">
                  <span class="text-2xl">💼</span>
                  <div>
                    <div class="font-semibold text-ink">SaaS Platforms</div>
                    <div class="text-sm text-muted">Scalable multi-tenant architectures</div>
                  </div>
                </div>
                <div class="flex items-start gap-4 p-4 rounded-xl bg-ink/5 hover:bg-gold/10 transition-colors">
                  <span class="text-2xl">💳</span>
                  <div>
                    <div class="font-semibold text-ink">Fintech Systems</div>
                    <div class="text-sm text-muted">Payments, savings, microfinance</div>
                  </div>
                </div>
                <div class="flex items-start gap-4 p-4 rounded-xl bg-ink/5 hover:bg-gold/10 transition-colors">
                  <span class="text-2xl">🏢</span>
                  <div>
                    <div class="font-semibold text-ink">Enterprise Solutions</div>
                    <div class="text-sm text-muted">Business logic, APIs, integrations</div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Open To -->
            <div>
              <h3 class="text-2xl font-bold font-serif text-ink mb-4">Open To</h3>
              <div class="flex flex-wrap gap-2">
                <span *ngFor="let item of openTo" 
                      class="px-4 py-2 bg-ink text-paper text-sm rounded-full">{{ item }}</span>
              </div>
            </div>
            
            <!-- Contact CTA -->
            <div class="p-6 rounded-2xl bg-gradient-to-r from-gold to-amber-500 text-paper">
              <h3 class="text-xl font-bold mb-2">Let's Work Together</h3>
              <p class="mb-4 opacity-90">Available for full-time, contract, and exciting projects</p>
              <a routerLink="/contact" 
                 class="inline-flex items-center justify-center px-6 py-3 bg-ink text-paper font-bold rounded-lg hover:bg-ink/80 transition-colors">
                Get in Touch →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class AboutComponent {
  openTo = [
    'Full-time Roles',
    'Contract Work',
    'Remote Opportunities',
    'AI Engineering',
    'Full-stack Engineering',
    'System Architecture',
    'SaaS Projects',
    'Fintech Projects'
  ];
}
