/* ============================================================
   HOMEPAGE ENHANCED INTERACTIONS (2026)
   Focused, lightweight effects for a more professional feel.
   ============================================================ */

'use strict';

(function initMainPageEnhancements() {
  const body = document.body;
  if (!body || !body.classList.contains('home-page')) {
    return;
  }

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const supportsHover = window.matchMedia('(hover: hover)').matches;

  function setCurrentYear() {
    const yearElement = document.getElementById('year');
    if (yearElement) {
      yearElement.textContent = String(new Date().getFullYear());
    }
  }

  function initRevealOnScroll() {
    const revealTargets = document.querySelectorAll(
      '.hero-proof-card, .bento-card, .premium-highlight-card, .compact-project-card, .service-card, .work, .timeline-item, .contact-left, .contact-right'
    );

    if (revealTargets.length === 0) {
      return;
    }

    revealTargets.forEach((element, index) => {
      element.classList.add('reveal-on-scroll');
      if (!prefersReducedMotion) {
        element.style.transitionDelay = `${(index % 4) * 80}ms`;
      }
    });

    if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
      revealTargets.forEach((element) => {
        element.classList.add('is-revealed');
      });
      return;
    }

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.14,
        rootMargin: '0px 0px -12% 0px',
      }
    );

    revealTargets.forEach((element) => {
      revealObserver.observe(element);
    });
  }

  function initHeroTilt() {
    const heroCard = document.querySelector('.hero-visual-card');
    if (!heroCard || prefersReducedMotion || !supportsHover) {
      return;
    }

    const maxTilt = 5;

    heroCard.addEventListener('pointermove', (event) => {
      const rect = heroCard.getBoundingClientRect();
      const relativeX = (event.clientX - rect.left) / rect.width;
      const relativeY = (event.clientY - rect.top) / rect.height;
      const tiltY = (relativeX - 0.5) * (maxTilt * 2);
      const tiltX = (0.5 - relativeY) * (maxTilt * 2);

      heroCard.style.setProperty('--hero-tilt-x', `${tiltX.toFixed(2)}deg`);
      heroCard.style.setProperty('--hero-tilt-y', `${tiltY.toFixed(2)}deg`);
      heroCard.style.setProperty('--hero-glow-x', `${(relativeX * 100).toFixed(2)}%`);
      heroCard.style.setProperty('--hero-glow-y', `${(relativeY * 100).toFixed(2)}%`);
    });

    heroCard.addEventListener('pointerleave', () => {
      heroCard.style.setProperty('--hero-tilt-x', '0deg');
      heroCard.style.setProperty('--hero-tilt-y', '0deg');
      heroCard.style.setProperty('--hero-glow-x', '50%');
      heroCard.style.setProperty('--hero-glow-y', '35%');
    });
  }

  function initCardSpotlight() {
    const cards = document.querySelectorAll('.compact-project-card, .premium-highlight-card, .service-card, .work');
    if (cards.length === 0 || prefersReducedMotion || !supportsHover) {
      return;
    }

    cards.forEach((card) => {
      card.classList.add('interactive-card');

      card.addEventListener('pointermove', (event) => {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        card.style.setProperty('--spotlight-x', `${x}px`);
        card.style.setProperty('--spotlight-y', `${y}px`);
      });

      card.addEventListener('pointerleave', () => {
        card.style.setProperty('--spotlight-x', '50%');
        card.style.setProperty('--spotlight-y', '50%');
      });
    });
  }

  function init() {
    setCurrentYear();
    initRevealOnScroll();
    initHeroTilt();
    initCardSpotlight();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
