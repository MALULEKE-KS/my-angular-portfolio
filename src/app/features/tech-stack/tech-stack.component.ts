import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Code, Database, Cloud, Terminal, Palette, GitBranch, Layers, Cpu, Shield, Zap } from 'lucide-angular';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <section class="min-h-screen px-4 py-16 bg-paper">
      <div class="max-w-6xl mx-auto">
        <h1 class="text-4xl sm:text-5xl font-bold font-serif text-ink mb-4 text-center">Tech Stack</h1>
        <p class="text-lg text-muted mb-12 text-center max-w-2xl mx-auto">Modern technologies I use to build scalable, production-grade systems</p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Languages -->
          <div class="bg-white rounded-2xl shadow-lg border border-ink/10 overflow-hidden hover:shadow-xl transition-shadow">
            <div class="bg-gradient-to-r from-gold to-amber-500 p-4">
              <lucide-icon [img]="Code" class="w-8 h-8 text-paper"></lucide-icon>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-ink mb-4">Languages</h3>
              <div class="flex flex-wrap gap-2">
                @for (tech of languages; track tech) {
                  <span class="px-3 py-1.5 bg-ink/5 text-ink text-sm font-medium rounded-lg">{{ tech }}</span>
                }
              </div>
            </div>
          </div>

          <!-- Frontend -->
          <div class="bg-white rounded-2xl shadow-lg border border-ink/10 overflow-hidden hover:shadow-xl transition-shadow">
            <div class="bg-gradient-to-r from-blue-600 to-blue-400 p-4">
              <lucide-icon [img]="Palette" class="w-8 h-8 text-paper"></lucide-icon>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-ink mb-4">Frontend</h3>
              <div class="flex flex-wrap gap-2">
                @for (tech of frontend; track tech) {
                  <span class="px-3 py-1.5 bg-ink/5 text-ink text-sm font-medium rounded-lg">{{ tech }}</span>
                }
              </div>
            </div>
          </div>

          <!-- Backend -->
          <div class="bg-white rounded-2xl shadow-lg border border-ink/10 overflow-hidden hover:shadow-xl transition-shadow">
            <div class="bg-gradient-to-r from-green-600 to-green-400 p-4">
              <lucide-icon [img]="Layers" class="w-8 h-8 text-paper"></lucide-icon>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-ink mb-4">Backend</h3>
              <div class="flex flex-wrap gap-2">
                @for (tech of backend; track tech) {
                  <span class="px-3 py-1.5 bg-ink/5 text-ink text-sm font-medium rounded-lg">{{ tech }}</span>
                }
              </div>
            </div>
          </div>

          <!-- Databases -->
          <div class="bg-white rounded-2xl shadow-lg border border-ink/10 overflow-hidden hover:shadow-xl transition-shadow">
            <div class="bg-gradient-to-r from-purple-600 to-purple-400 p-4">
              <lucide-icon [img]="Database" class="w-8 h-8 text-paper"></lucide-icon>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-ink mb-4">Databases</h3>
              <div class="flex flex-wrap gap-2">
                @for (tech of databases; track tech) {
                  <span class="px-3 py-1.5 bg-ink/5 text-ink text-sm font-medium rounded-lg">{{ tech }}</span>
                }
              </div>
            </div>
          </div>

          <!-- DevOps & Cloud -->
          <div class="bg-white rounded-2xl shadow-lg border border-ink/10 overflow-hidden hover:shadow-xl transition-shadow">
            <div class="bg-gradient-to-r from-orange-600 to-orange-400 p-4">
              <lucide-icon [img]="Cloud" class="w-8 h-8 text-paper"></lucide-icon>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-ink mb-4">DevOps & Cloud</h3>
              <div class="flex flex-wrap gap-2">
                @for (tech of devops; track tech) {
                  <span class="px-3 py-1.5 bg-ink/5 text-ink text-sm font-medium rounded-lg">{{ tech }}</span>
                }
              </div>
            </div>
          </div>

          <!-- AI & ML -->
          <div class="bg-white rounded-2xl shadow-lg border border-ink/10 overflow-hidden hover:shadow-xl transition-shadow">
            <div class="bg-gradient-to-r from-pink-600 to-pink-400 p-4">
              <lucide-icon [img]="Cpu" class="w-8 h-8 text-paper"></lucide-icon>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-ink mb-4">AI & Machine Learning</h3>
              <div class="flex flex-wrap gap-2">
                @for (tech of ai; track tech) {
                  <span class="px-3 py-1.5 bg-ink/5 text-ink text-sm font-medium rounded-lg">{{ tech }}</span>
                }
              </div>
            </div>
          </div>
        </div>

        <!-- Tools & Best Practices -->
        <div class="mt-12 bg-white rounded-2xl shadow-lg border border-ink/10 p-8">
          <h2 class="text-2xl font-bold font-serif text-ink mb-6 flex items-center gap-3">
            <lucide-icon [img]="Zap" class="w-6 h-6 text-gold"></lucide-icon>
            Tools & Best Practices
          </h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            @for (tool of tools; track tool) {
              <div class="flex items-center gap-3 p-3 rounded-lg bg-ink/5">
                <lucide-icon [img]="GitBranch" class="w-5 h-5 text-gold"></lucide-icon>
                <span class="text-sm font-medium text-ink">{{ tool }}</span>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  `,
})
export class TechStackComponent {
  readonly Code = Code;
  readonly Database = Database;
  readonly Cloud = Cloud;
  readonly Terminal = Terminal;
  readonly Palette = Palette;
  readonly GitBranch = GitBranch;
  readonly Layers = Layers;
  readonly Cpu = Cpu;
  readonly Shield = Shield;
  readonly Zap = Zap;

  languages = ['TypeScript', 'Python', 'SQL', 'Bash/Shell', 'HTML5', 'CSS3'];
  frontend = ['Angular 18', 'Next.js 14', 'React', 'Tailwind CSS', 'SCSS', 'Framer Motion'];
  backend = ['Node.js', 'FastAPI', 'Express', 'Django', 'REST APIs', 'GraphQL'];
  databases = ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Firebase', 'Prisma ORM'];
  devops = ['Docker', 'AWS', 'GitHub Actions', 'Linux', 'Nginx', 'CI/CD Pipelines'];
  ai = ['LangChain', 'OpenAI API', 'RAG Systems', 'Vector Databases', 'Pinecone', 'AI Agents'];
  tools = ['Git', 'VS Code', 'Docker Compose', 'Postman', 'Vercel', 'Railway', 'Stripe', 'Auth0'];
}
