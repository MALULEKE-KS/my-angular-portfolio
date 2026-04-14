import { Component, OnInit, OnDestroy, signal, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Github, Linkedin, Mail, MapPin, Coffee, Heart, Send, ArrowRight, Rocket, Zap, Code, Server, Cloud, Bot, Database } from 'lucide-angular';
import { TypingTextComponent } from '../../shared/components/typing-text/typing-text.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, LucideAngularModule, TypingTextComponent],
  template: `
    <div class="min-h-screen flex flex-col bg-paper text-ink">

      <!-- ── HERO ── -->
      <section class="relative flex flex-col justify-center items-center text-center
                      min-h-screen px-6 pt-24 pb-28 overflow-hidden bg-paper">

        <!-- Ambient glow blobs -->
        <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div class="absolute top-24 left-8 w-72 h-72 rounded-full bg-gold/5 filter blur-[80px]"></div>
          <div class="absolute bottom-28 right-8 w-96 h-96 rounded-full bg-amber/5 filter blur-[80px]"></div>
          <div class="absolute inset-0 bg-grid opacity-60"></div>
        </div>

        <div class="relative z-10 max-w-4xl mx-auto w-full">
          <!-- Profile + Available badge -->
          <div class="mb-10 relative inline-block animate-fade-in">
            <div class="w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden
                        border-[3px] border-gold shadow-[0_0_40px_rgba(184,134,11,0.25)]
                        mx-auto ring-[6px] ring-gold/10">
              <img src="/assets/profile.jpeg" alt="Kurhula Success Maluleke"
                   class="w-full h-full object-cover">
            </div>
            <div class="absolute -bottom-2 -right-2 badge badge-available flex items-center gap-1.5">
              <lucide-icon [img]="Zap" class="w-3 h-3"></lucide-icon>
              Available
            </div>
          </div>

          <!-- Name + Title -->
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-ink mb-3 leading-tight animate-slide-up">
            Software Engineer<br>
            <span class="text-gold">& AI Systems Architect</span>
          </h1>

          <!-- Typing tagline -->
          <div class="text-lg sm:text-xl text-muted mb-10 min-h-[2rem] animate-fade-in delay-200">
            <app-typing-text />
          </div>

          <!-- CTA buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center mb-10 animate-fade-in delay-300">
            <a routerLink="/projects" class="btn-cta">
              <lucide-icon [img]="Rocket" class="w-5 h-5"></lucide-icon>
              View Projects
            </a>
            <a routerLink="/contact" class="btn-secondary">
              <lucide-icon [img]="Send" class="w-5 h-5"></lucide-icon>
              Get in Touch
            </a>
          </div>

          <!-- Social links -->
          <div class="flex justify-center gap-5 animate-fade-in delay-400">
            <a href="https://github.com/MALULEKE-KS" target="_blank" rel="noopener noreferrer"
               class="p-3 rounded-full bg-slate-900/5 hover:bg-amber-500 hover:text-white transition-all group"
               aria-label="GitHub">
              <lucide-icon [img]="Github" class="w-5 h-5"></lucide-icon>
            </a>
            <a href="https://za.linkedin.com/in/kurhula-success-maluleke-32153231a" target="_blank" rel="noopener noreferrer"
               class="p-3 rounded-full bg-slate-900/5 hover:bg-amber-500 hover:text-white transition-all group"
               aria-label="LinkedIn">
              <lucide-icon [img]="Linkedin" class="w-5 h-5"></lucide-icon>
            </a>
            <a href="mailto:kurhula04s@gmail.com"
               class="p-3 rounded-full bg-slate-900/5 hover:bg-amber-500 hover:text-white transition-all group"
               aria-label="Email">
              <lucide-icon [img]="Mail" class="w-5 h-5"></lucide-icon>
            </a>
          </div>
        </div>
      </section>

      <!-- ── STATS ── -->
      <section class="bg-ink text-paper py-16 px-4">
        <div class="max-w-5xl mx-auto">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center stagger-children">
            <div>
              <div class="stat-num mb-1">50+</div>
              <div class="text-muted text-sm">Projects Delivered</div>
            </div>
            <div>
              <div class="stat-num mb-1">20+</div>
              <div class="text-muted text-sm">Happy Clients</div>
            </div>
            <div>
              <div class="stat-num mb-1">5+</div>
              <div class="text-muted text-sm">Years Experience</div>
            </div>
            <div>
              <div class="stat-num mb-1">99%</div>
              <div class="text-muted text-sm">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      <!-- ── TECH STACK ── -->
      <section class="section-wrap bg-paper gradient-warm">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-14">
            <h2 class="text-3xl sm:text-4xl font-bold font-serif text-ink mb-3">Tech Stack</h2>
            <p class="text-muted max-w-2xl mx-auto">Cutting-edge technologies I use to build robust, scalable solutions</p>
          </div>

          <div class="space-y-10">
            <!-- Frontend -->
            <div class="stagger-children">
              <h3 class="text-base font-semibold text-gold mb-4 flex items-center gap-2">
                <lucide-icon [img]="Code" class="w-4 h-4"></lucide-icon> Frontend
              </h3>
              <div class="flex flex-wrap gap-2">
                <span class="skill-tag">Angular 18</span>
                <span class="skill-tag">React</span>
                <span class="skill-tag">Next.js 14</span>
                <span class="skill-tag">TypeScript</span>
                <span class="skill-tag">Tailwind CSS</span>
                <span class="skill-tag">Custom CSS</span>
              </div>
            </div>

            <!-- Backend -->
            <div class="stagger-children">
              <h3 class="text-base font-semibold text-gold mb-4 flex items-center gap-2">
                <lucide-icon [img]="Server" class="w-4 h-4"></lucide-icon> Backend
              </h3>
              <div class="flex flex-wrap gap-2">
                <span class="skill-tag">FastAPI</span>
                <span class="skill-tag">Python</span>
                <span class="skill-tag">Node.js</span>
                <span class="skill-tag">Django</span>
                <span class="skill-tag">PostgreSQL</span>
                <span class="skill-tag">MongoDB</span>
                <span class="skill-tag">GraphQL</span>
              </div>
            </div>

            <!-- DevOps & Cloud -->
            <div class="stagger-children">
              <h3 class="text-base font-semibold text-gold mb-4 flex items-center gap-2">
                <lucide-icon [img]="Cloud" class="w-4 h-4"></lucide-icon> DevOps & Cloud
              </h3>
              <div class="flex flex-wrap gap-2">
                <span class="skill-tag">Docker</span>
                <span class="skill-tag">AWS</span>
                <span class="skill-tag">GitHub Actions</span>
                <span class="skill-tag">Linux</span>
                <span class="skill-tag">Nginx</span>
                <span class="skill-tag">Vercel</span>
                <span class="skill-tag">Redis</span>
              </div>
            </div>

            <!-- AI & Emerging -->
            <div class="stagger-children">
              <h3 class="text-base font-semibold text-gold mb-4 flex items-center gap-2">
                <lucide-icon [img]="Bot" class="w-4 h-4"></lucide-icon> AI & Emerging Tech
              </h3>
              <div class="flex flex-wrap gap-2">
                <span class="skill-tag">LangChain</span>
                <span class="skill-tag">OpenAI API</span>
                <span class="skill-tag">RAG Systems</span>
                <span class="skill-tag">ChromaDB</span>
                <span class="skill-tag">NextAuth.js</span>
                <span class="skill-tag">Prisma</span>
                <span class="skill-tag">Stripe</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ── ABOUT TEASER ── -->
      <section class="section-wrap bg-ink text-paper">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl sm:text-4xl font-bold font-serif mb-6">
            Software Engineer designing AI-driven systems
          </h2>
          <p class="text-base sm:text-lg text-paper/70 leading-relaxed mb-8 max-w-2xl mx-auto">
            BSc Computer Science & Mathematics — Final Year.<br>
            Building practical digital systems that solve real-world challenges.
            I architect and build distributed fullstack systems with AI-native integration
            — from pixel-perfect UIs with Angular, to designing robust backends with FastAPI and Python.
          </p>
          <div class="flex flex-wrap justify-center gap-4 mb-8">
            <span class="cat-pill">
              <lucide-icon [img]="MapPin" class="w-4 h-4"></lucide-icon> South Africa
            </span>
            <span class="cat-pill">
              <lucide-icon [img]="Coffee" class="w-4 h-4"></lucide-icon> Coffee Enthusiast
            </span>
            <span class="cat-pill">
              <lucide-icon [img]="Heart" class="w-4 h-4"></lucide-icon> Open Source
            </span>
          </div>
          <a routerLink="/about" class="link-arrow">
            Learn more about me
            <lucide-icon [img]="ArrowRight" class="w-4 h-4"></lucide-icon>
          </a>
        </div>
      </section>

    </div>
  `,
})
export class HomeComponent {
  readonly Github = Github;
  readonly Linkedin = Linkedin;
  readonly Mail = Mail;
  readonly MapPin = MapPin;
  readonly Coffee = Coffee;
  readonly Heart = Heart;
  readonly Send = Send;
  readonly ArrowRight = ArrowRight;
  readonly Rocket = Rocket;
  readonly Zap = Zap;
  readonly Code = Code;
  readonly Server = Server;
  readonly Cloud = Cloud;
  readonly Bot = Bot;
  readonly Database = Database;
}
