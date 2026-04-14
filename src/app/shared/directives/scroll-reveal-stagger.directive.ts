import { Directive, ElementRef, OnInit, OnDestroy, Renderer2, NgZone } from '@angular/core';

@Directive({
  selector: '[scrollRevealStagger]',
  standalone: true,
})
export class ScrollRevealStaggerDirective implements OnInit, OnDestroy {
  private observer: IntersectionObserver | null = null;

  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2,
    private zone: NgZone,
  ) {}

  ngOnInit(): void {
    this.renderer.addClass(this.el.nativeElement, 'stagger-children');

    this.zone.runOutsideAngular(() => {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.renderer.addClass(entry.target, 'revealed');
              this.observer?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -32px 0px' },
      );

      this.observer.observe(this.el.nativeElement);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}