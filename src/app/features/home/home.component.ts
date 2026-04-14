import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  LucideAngularModule, MapPin, ArrowRight, Code, Server, Bot, Cloud, Github, Rocket,
  Coffee, Heart, Send, Linkedin, Mail, Zap,
} from 'lucide-angular';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, LucideAngularModule],
  template: `
    <section class="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20 pb-24 bg-paper relative overflow-hidden">
      <div class="absolute inset-0 opacity-5 pointer-events-none">
        <div class="absolute top-20 left-10 w-72 h-72 bg-gold rounded-full filter blur-3xl"></div>
        <div class="absolute bottom-20 right-10 w-96 h-96 bg-amber rounded-full filter blur-3xl"></div>
      </div>
      <div class="max-w-4xl mx-auto relative z-10">
        <div class="mb-8 relative inline-block">
          <div class="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-gold shadow-2xl mx-auto ring-8 ring-gold/20">
            <img src="/assets/profile.jpeg" alt="Kurhula Success Maluleke" class="w-full h-full object-cover">
          </div>
          <div class="absolute -bottom-2 -right-2 bg-gold text-paper px-3 py-1 rounded-full text-sm font-medium shadow-lg">
            <span class="flex items-center gap-1"><lucide-icon [img]="Zap" class="w-3 h-3"></lucide-icon> Available</span>
          </div>
        </div>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-ink mb-4 leading-tight">
          Software Engineer<br><span class="text-gold">& AI Systems Architect</span>
        </h1>
        <p class="text-lg sm:text-xl text-muted mb-8 max-w-xl mx-auto leading-relaxed">
          Building scalable, production-grade digital systems across fintech, SaaS, healthcare, and enterprise domains.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a routerLink="/projects" class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gold text-paper font-medium rounded-lg hover:bg-gold2 transition-all hover:shadow-lg min-h-[44px]">
            <lucide-icon [img]="Rocket" class="w-5 h-5"></lucide-icon> View Projects
          </a>
          <a routerLink="/contact" class="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-ink text-ink font-medium rounded-lg hover:bg-ink hover:text-paper transition-all min-h-[44px]">
            <lucide-icon [img]="Send" class="w-5 h-5"></lucide-icon> Get in Touch
          </a>
        </div>
        <div class="flex justify-center gap-4">
          <a href="https://github.com/MALULEKE-KS" target="_blank" rel="noopener" class="p-3 rounded-full bg-ink/5 hover:bg-gold hover:text-paper transition-all" aria-label="GitHub"><lucide-icon [img]="Github" class="w-5 h-5"></lucide-icon></a>
          <a href="https://linkedin.com/in/kurhula-success-maluleke-32153231a" target="_blank" rel="noopener" class="p-3 rounded-full bg-ink/5 hover:bg-gold hover:text-paper transition-all" aria-label="LinkedIn"><lucide-icon [img]="Linkedin" class="w-5 h-5"></lucide-icon></a>
          <a href="mailto:kurhula04s@gmail.com" class="p-3 rounded-full bg-ink/5 hover:bg-gold hover:text-paper transition-all" aria-label="Email"><lucide-icon [img]="Mail" class="w-5 h-5"></lucide-icon></a>
        </div>
      </div>
    </section>

    <section class="py-16 px-4 bg-ink text-paper" aria-label="Statistics">
      <div class="container mx-auto max-w-5xl">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div><div class="text-4xl font-bold font-serif text-gold mb-2">50+</div><div class="text-muted">Projects Delivered</div></div>
          <div><div class="text-4xl font-bold font-serif text-gold mb-2">20+</div><div class="text-muted">Happy Clients</div></div>
          <div><div class="text-4xl font-bold font-serif text-gold mb-2">5+</div><div class="text-muted">Years Experience</div></div>
          <div><div class="text-4xl font-bold font-serif text-gold mb-2">99%</div><div class="text-muted">Success Rate</div></div>
        </div>
      </div>
    </section>

    <section class="py-20 px-4 bg-paper" aria-label="Tech stack">
      <div class="container mx-auto max-w-6xl">
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold font-serif text-ink mb-4">Tech Stack</h2>
          <p class="text-muted max-w-2xl mx-auto">Cutting-edge technologies I use to build robust, scalable solutions</p>
        </div>
        <div class="mb-10">
          <h3 class="text-lg font-semibold text-gold mb-4 flex items-center gap-2"><lucide-icon [img]="Code" class="w-5 h-5"></lucide-icon> Frontend</h3>
          <div class="flex flex-wrap gap-3">
            @for (tech of frontend; track tech) {
              <span class="px-4 py-2 bg-ink text-paper rounded-lg text-sm font-mono hover:bg-gold transition-colors cursor-default">{{ tech }}</span>
            }
          </div>
        </div>
        <div class="mb-10">
          <h3 class="text-lg font-semibold text-gold mb-4 flex items-center gap-2"><lucide-icon [img]="Server" class="w-5 h-5"></lucide-icon> Backend</h3>
          <div class="flex flex-wrap gap-3">
            @for (tech of backend; track tech) {
              <span class="px-4 py-2 bg-ink text-paper rounded-lg text-sm font-mono hover:bg-gold transition-colors cursor-default">{{ tech }}</span>
            }
          </div>
        </div>
        <div class="mb-10">
          <h3 class="text-lg font-semibold text-gold mb-4 flex items-center gap-2"><lucide-icon [img]="Cloud" class="w-5 h-5"></lucide-icon> DevOps & Cloud</h3>
          <div class="flex flex-wrap gap-3">
            @for (tech of devops; track tech) {
              <span class="px-4 py-2 bg-ink text-paper rounded-lg text-sm font-mono hover:bg-gold transition-colors cursor-default">{{ tech }}</span>
            }
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold text-gold mb-4 flex items-center gap-2"><lucide-icon [img]="Bot" class="w-5 h-5"></lucide-icon> AI & Emerging Tech</h3>
          <div class="flex flex-wrap gap-3">
            @for (tech of ai; track tech) {
              <span class="px-4 py-2 bg-ink text-paper rounded-lg text-sm font-mono hover:bg-gold transition-colors cursor-default">{{ tech }}</span>
            }
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 px-4 bg-ink text-paper" aria-label="About preview">
      <div class="container mx-auto max-w-4xl text-center">
        <h2 class="text-3xl sm:text-4xl font-bold font-serif mb-6">About Me</h2>
        <p class="text-lg text-muted mb-8 leading-relaxed">
          I'm a passionate software engineer with a strong foundation in both frontend and backend development.
          I specialize in building end-to-end solutions that are not only functional but also user-friendly and scalable.
          My approach combines technical expertise with a deep understanding of business requirements to deliver impactful results.
        </p>
        <div class="flex flex-wrap justify-center gap-4 mb-8">
          <span class="px-4 py-2 bg-paper/10 rounded-lg text-sm flex items-center gap-2"><lucide-icon [img]="MapPin" class="w-4 h-4"></lucide-icon> South Africa</span>
          <span class="px-4 py-2 bg-paper/10 rounded-lg text-sm flex items-center gap-2"><lucide-icon [img]="Coffee" class="w-4 h-4"></lucide-icon> Coffee Enthusiast</span>
          <span class="px-4 py-2 bg-paper/10 rounded-lg text-sm flex items-center gap-2"><lucide-icon [img]="Heart" class="w-4 h-4"></lucide-icon> Open Source</span>
        </div>
        <a routerLink="/about" class="inline-flex items-center gap-2 text-gold hover:text-gold2 transition-colors">Learn more about me <lucide-icon [img]="ArrowRight" class="w-4 h-4"></lucide-icon></a>
      </div>
    </section>
  `,
})
export class HomeComponent {
  readonly MapPin = MapPin;
  readonly ArrowRight = ArrowRight;
  readonly Code = Code;
  readonly Server = Server;
  readonly Bot = Bot;
  readonly Cloud = Cloud;
  readonly Github = Github;
  readonly Rocket = Rocket;
  readonly Coffee = Coffee;
  readonly Heart = Heart;
  readonly Send = Send;
  readonly Linkedin = Linkedin;
  readonly Mail = Mail;
  readonly Zap = Zap;

  frontend = ['Angular', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'];
  backend = ['Node.js', 'Python', 'FastAPI', 'Django', 'PostgreSQL', 'MongoDB', 'GraphQL'];
  devops = ['AWS', 'Docker', 'GitHub Actions', 'Linux', 'Nginx', 'Vercel', 'Cloudflare'];
  ai = ['LangChain', 'OpenAI', 'RAG Systems', 'NextAuth', 'Clerk', 'Stripe', 'Prisma'];
}
