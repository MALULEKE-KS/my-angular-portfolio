import { Component, OnInit, OnDestroy, signal, ElementRef, ViewChild } from '@angular/core';


@Component({
    selector: 'app-typing-text',
    imports: [],
    template: `
    <span class="typing-wrapper">
      <span #textEl class="typing-text"></span><span class="typing-cursor">|</span>
    </span>
  `
})
export class TypingTextComponent implements OnInit, OnDestroy {
  @ViewChild('textEl') textEl!: ElementRef<HTMLSpanElement>;

  private phrases = [
    'Software Engineer designing AI-driven systems',
    'Next.js | Angular | FastAPI | Python',
    'Building Reliable & Scalable Platforms',
    'BSc Computer Science + Mathematics',
    'African Roots | Global Impact',
  ];

  private phraseIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private typingSpeed = 80;
  private pauseAfterDelete = 1200;
  private pauseAfterType = 2000;
  private intervalId: ReturnType<typeof setInterval> | null = null;

  ngOnInit(): void {
    this.startTyping();
  }

  ngOnDestroy(): void {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  private startTyping(): void {
    this.intervalId = setInterval(() => {
      const current = this.phrases[this.phraseIndex];
      const text = this.textEl?.nativeElement;

      if (!text) return;

      if (!this.isDeleting) {
        this.charIndex++;
        text.textContent = current.substring(0, this.charIndex);
        this.typingSpeed = 80;

        if (this.charIndex === current.length) {
          this.isDeleting = true;
          this.typingSpeed = this.pauseAfterType;
        }
      } else {
        this.charIndex--;
        text.textContent = current.substring(0, this.charIndex);
        this.typingSpeed = 40;

        if (this.charIndex === 0) {
          this.isDeleting = false;
          this.phraseIndex = (this.phraseIndex + 1) % this.phrases.length;
          this.typingSpeed = this.pauseAfterDelete;
        }
      }
    }, this.typingSpeed);
  }
}
