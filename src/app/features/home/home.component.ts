import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, MapPin, Globe, ArrowRight, Code, Cpu, Database, Cloud, Terminal, GitBranch, Zap, Layers, Bot, Server, Box, Shield, Gauge, Container, Github, Rocket, BarChart3, Eye, FlaskConical, CloudCog, TestTube, Briefcase, GraduationCap, Award, Users, TrendingUp, Star, Coffee, Heart, Send, Linkedin, Twitter, Youtube, Mail, Phone } from 'lucide-angular';

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
          <a href="https://github.com/MALULEKE-KS" target="_blank" class="p-3 rounded-full bg-ink/5 hover:bg-gold hover:text-paper transition-all"><lucide-icon [img]="Github" class="w-5 h-5"></lucide-icon></a>
          <a href="https://linkedin.com/in/kurhula-success-maluleke-32153231a" target="_blank" class="p-3 rounded-full bg-ink/5 hover:bg-gold hover:text-paper transition-all"><lucide-icon [img]="Linkedin" class="w-5 h-5"></lucide-icon></a>
          <a href="mailto:kurhula04s&#64;gmail&#46;com" class="p-3 rounded-full bg-ink/5 hover:bg-gold hover:text-paper transition-all"><lucide-icon [img]="Mail" class="w-5 h-5"></lucide-icon></a>
        </div>
      </div>
    </section>
    <section class="py-16 px-4 bg-ink text-paper">
      <div class="container mx-auto max-w-5xl">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div><div class="text-4xl font-bold font-serif text-gold mb-2">50+</div><div class="text-muted">Projects Delivered</div></div>
          <div><div class="text-4xl font-bold font-serif text-gold mb-2">20+</div><div class="text-muted">Happy Clients</div></div>
          <div><div class="text-4xl font-bold font-serif text-gold mb-2">5+</div><div class="text-muted">Years Experience</div></div>
          <div><div class="text-4xl font-bold font-serif text-gold mb-2">99%</div><div class="text-muted">Success Rate</div></div>
        </div>
      </div>
    </section>
    <section class="py-20 px-4 bg-paper">
      <div class="container mx-auto max-w-6xl">
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold font-serif text-ink mb-4">Tech Stack</h2>
          <p class="text-muted max-w-2xl mx-auto">Cutting-edge technologies I use to build robust, scalable solutions</p>
        </div>
        <div class="mb-10">
          <h3 class="text-lg font-semibold text-gold mb-4 flex items-center gap-2"><lucide-icon [img]="Code" class="w-5 h-5"></lucide-icon> Frontend</h3>
          <div class="flex flex-wrap gap-3">
            <span class="px-4 py-2 bg-ink text-paper rounded-lg text-sm font-mono hover:bg-gold transition-colors cursor-default">Angular</span>
            <span class="px-4 py-2 bg-ink text-paper rounded-lg text-sm font-mono hover:bg-gold transition-colors cursor-default">React</span>
            <span class="px-4 py-2 bg-ink text-paper rounded-lg text-sm font-mono hover:bg-gold transition-colors cursor-default">Next.js</span>
            <span class="px-4 py-2 bg-ink text-paper rounded-lg text-sm font-mono hover:bg-gold transition-colors cursor-default">TypeScript</span>
            <span class="px-4 py-2 bg-ink text-paper rounded-lg text-sm font-mono hover:bg-gold transition-colors cursor-default">Tailwind CSS</span>
            <span class="px-4 py-2 bg-ink text-paper rounded-lg text-sm font-mono hover:bg-gold transition-colors cursor-default">HTML/CSS</span>
          </div>
        </div>
        <div class="mb-10">
          <h3 class="text-lg font-semibold text-gold mb-4 flex items-center gap-2"><lucide-icon [img]="Server" class="w-5 h-5"></lucide-icon> Backend</h3>
          <div class="flex flex-wrap gap-3">
            <span class="px-4 py-2 bg-ink text-paper rounded-lg text-sm font-mono hover:bg-gold transition-colors cursor-default">Node.js</span>
            <span class="px-4 py-2 bg-ink text-paper rounded-lg text-sm font-mono hover:bg-gold transition-colors cursor-default">Python</span>
            <span class="px-4 py-2 bg-ink text-paper rounded-lg text-sm font-mono hover:bg-gold transition-colors cursor-default">FastAPI</span>
            <span class="px-4 py-2 bg-ink text-paper rounded-lg text-sm font-mono hover:bg-gold transition-colors cursor-default">Django</span>
            <span class="px-4 py-2 bg-ink text-paper rounded-lg text-sm font-mono hover:bg-gold transition-colors cursor-default">PostgreSQL</span>
            <span class="px-4 py-2 bg-ink text-paper rounded-lg text-sm font-mono hover:bg-gold transition-colors cursor-default">MongoDB</span>
            <span class="px-4 py-2 bg-ink text-paper rounded-lg text-sm font-mono hover:bg-gold transition-colors cursor-default">GraphQL</span>
          </div>
        </div>
        <div class="mb-10">
          <h3 class="text-lg font-semibold text-gold mb-4 flex items-center gap-2"><lucide-icon [img]="Cloud" class="w-5 h-5"></lucide-icon> DevOps & Cloud</h3>
          <div class="flex flex-wrap gap-3">
            <span class="px-4 py-2 bg-ink text-paper rounded-lg text-sm font-mono hover:bg-gold transition-colors cursor-default">AWS</span>
            <span class="px-4 py-2 bg-ink text-paper rounded-lg text-sm font-mono hover:bg-gold transition-colors cursor-default">Docker</span>
            <span class="px-4 py-2 bg-ink text-paper rounded-lg text-sm font-mono hover:bg-gold transition-colors cursor-default">GitHub Actions</span>
            <span class="px-4 py-2 bg-ink text-paper rounded-lg text-sm font-mono hover:bg-gold transition-colors cursor-default">Linux</span>
            <span class="px-4 py-2 bg-ink text-paper rounded-lg text-sm font-mono hover:bg-gold transition-colors cursor-default">Nginx</span>
            <span class="px-4 py-2 bg-ink text-paper rounded-lg text-sm font-mono hover:bg-gold transition-colors cursor-default">Vercel</span>
            <span class="px-4 py-2 bg-ink text-paper rounded-lg text-sm font-mono hover:bg-gold transition-colors cursor-default">Cloudflare</span>
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold text-gold mb-4 flex items-center gap-2"><lucide-icon [img]="Bot" class="w-5 h-5"></lucide-icon> AI & Emerging Tech</h3>
          <div class="flex flex-wrap gap-3">
            <span class="px-4 py-2 bg-ink text-paper rounded-lg text-sm font-mono hover:bg-gold transition-colors cursor-default">LangChain</span>
            <span class="px-4 py-2 bg-ink text-paper rounded-lg text-sm font-mono hover:bg-gold transition-colors cursor-default">OpenAI</span>
            <span class="px-4 py-2 bg-ink text-paper rounded-lg text-sm font-mono hover:bg-gold transition-colors cursor-default">RAG Systems</span>
            <span class="px-4 py-2 bg-ink text-paper rounded-lg text-sm font-mono hover:bg-gold transition-colors cursor-default">NextAuth</span>
            <span class="px-4 py-2 bg-ink text-paper rounded-lg text-sm font-mono hover:bg-gold transition-colors cursor-default">Clerk</span>
            <span class="px-4 py-2 bg-ink text-paper rounded-lg text-sm font-mono hover:bg-gold transition-colors cursor-default">Stripe</span>
            <span class="px-4 py-2 bg-ink text-paper rounded-lg text-sm font-mono hover:bg-gold transition-colors cursor-default">Prisma</span>
          </div>
        </div>
      </div>
    </section>
    <section class="py-20 px-4 bg-ink text-paper">
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
  readonly Briefcase = Briefcase;
  readonly GraduationCap = GraduationCap;
  readonly Award = Award;
  readonly Users = Users;
  readonly TrendingUp = TrendingUp;
  readonly Star = Star;
  readonly Coffee = Coffee;
  readonly Heart = Heart;
  readonly Send = Send;
  readonly Linkedin = Linkedin;
  readonly Twitter = Twitter;
  readonly Youtube = Youtube;
  readonly Mail = Mail;
  readonly Phone = Phone;
}
