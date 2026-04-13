import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, Mail, Github, Linkedin } from 'lucide-angular';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, LucideAngularModule],
  template: `
    <section class="min-h-screen py-20 px-4 bg-paper">
      <div class="container mx-auto max-w-4xl">
        <h1 class="text-4xl lg:text-5xl font-bold font-serif text-ink mb-8">About</h1>
        
        <div class="grid md:grid-cols-2 gap-12">
          <div>
            <h2 class="text-2xl font-bold font-serif text-ink mb-4">Background</h2>
            <p class="text-lg text-muted leading-relaxed mb-6">
              Software Engineer and AI Systems Architect building scalable, production-grade digital systems across fintech, SaaS, healthcare, and enterprise domains.
            </p>
            <p class="text-lg text-muted leading-relaxed">
              I follow a structured architecture-first approach before writing code, running development in sequential phases: architecture, design, implementation, and deployment.
            </p>
          </div>
          
          <div>
            <h2 class="text-2xl font-bold font-serif text-ink mb-4">Connect</h2>
            <div class="space-y-4">
              <a href="mailto:kurhula04s&#64;gmail.com" 
                 class="flex items-center gap-3 p-4 rounded-xl border border-ink/10 hover:border-gold/40 transition-colors">
                <lucide-icon [img]="Mail" class="w-5 h-5 text-gold"></lucide-icon>
                <span class="text-ink">kurhula04s&#64;gmail.com</span>
              </a>
              <a href="https://github.com/MALULEKE-KS" target="_blank" rel="noopener"
                 class="flex items-center gap-3 p-4 rounded-xl border border-ink/10 hover:border-gold/40 transition-colors">
                <lucide-icon [img]="Github" class="w-5 h-5 text-gold"></lucide-icon>
                <span class="text-ink">GitHub</span>
              </a>
              <a href="https://linkedin.com/in/kurhula-success-maluleke-32153231a" target="_blank" rel="noopener"
                 class="flex items-center gap-3 p-4 rounded-xl border border-ink/10 hover:border-gold/40 transition-colors">
                <lucide-icon [img]="Linkedin" class="w-5 h-5 text-gold"></lucide-icon>
                <span class="text-ink">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class AboutComponent {
  readonly Mail = Mail;
  readonly Github = Github;
  readonly Linkedin = Linkedin;
}
