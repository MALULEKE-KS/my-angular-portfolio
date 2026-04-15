import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
    selector: 'app-not-found',
    imports: [RouterLink],
    template: `
    <div class="min-h-screen bg-paper flex items-center justify-center px-6">
      <div class="text-center">
        <h1 class="text-9xl font-bold font-serif text-[#181717]/10 mb-4">404</h1>
        <h2 class="text-3xl font-bold font-serif text-[#181717] mb-3">Page not found</h2>
        <p class="text-[#374151] text-lg mb-8 max-w-md mx-auto">
          The page you are looking for does not exist or has been moved.
        </p>
        <a routerLink="/"
           class="inline-flex items-center gap-2 px-6 py-3 bg-[#181717] text-white font-semibold rounded-xl hover:bg-[#374151] transition-all">
          Go Home
        </a>
      </div>
    </div>
  `
})
export class NotFoundComponent {}
