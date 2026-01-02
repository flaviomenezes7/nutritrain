export function initReveal(options?: { rootMargin?: string; threshold?: number }) {
  const rootMargin = options?.rootMargin ?? '0px 0px -8% 0px';
  const threshold = options?.threshold ?? 0.05;

  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return () => {};

  const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target as HTMLElement;
        const delay = el.dataset.revealDelay ? Number(el.dataset.revealDelay) : 0;
        if (delay) el.style.transitionDelay = `${delay}ms`;
        el.classList.add('reveal-visible');
        observer.unobserve(el);
      }
    });
  }, { rootMargin, threshold });

  els.forEach((el) => observer.observe(el));

  return () => {
    observer.disconnect();
  };
}
