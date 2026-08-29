import { AfterViewInit, Directive, ElementRef, OnDestroy, inject } from '@angular/core';

@Directive({
  selector: '[appScrollStagger]',
  host: { class: 'scroll-stagger' }
})
export class ScrollStaggerDirective implements AfterViewInit, OnDestroy {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('is-visible'), index * 100);
          }
        });
      },
      { threshold: 0.1 }
    );

    this.observer.observe(this.host.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
