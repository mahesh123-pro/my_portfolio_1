/* ============================================================
   ENHANCED INTERACTIONS & ADVANCED ANIMATIONS (2026)
   Premium micro-interactions, scroll effects, and polish
   OPTIMIZED VERSION - Better performance and compatibility
   ============================================================ */

'use strict';

/* ── Intersection Observer for Staggered Reveals ── */
function initAdvancedScrollReveal() {
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -80px 0px'
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Stagger animation based on position
        const stagger = Math.min(index * 0.08, 0.4);
        entry.target.style.animationDelay = `${stagger}s`;
        entry.target.classList.add('animate-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe elements
  document.querySelectorAll(
    '.card, .compact-project-card, .service-card, .work, .skill-category, .about-col-1, .about-col-2, .timeline-item, .hero-image'
  ).forEach(el => {
    if (!el.classList.contains('animate-visible')) {
      el.classList.add('animate-hidden');
    }
    revealObserver.observe(el);
  });
}

/* ── Parallax Scrolling Effect ── */
function initParallax() {
  const parallaxElements = document.querySelectorAll('[data-parallax]');
  
  if (parallaxElements.length === 0) return;

  window.addEventListener('scroll', () => {
    requestAnimationFrame(() => {
      parallaxElements.forEach(el => {
        const speed = el.getAttribute('data-parallax') || 0.5;
        const yPos = window.scrollY * speed;
        el.style.transform = `translateY(${yPos}px)`;
      });
    });
  }, { passive: true });
}

/* ── Magnetic Cursor Effect for Links ── */
function initMagneticCursor() {
  const magneticElements = document.querySelectorAll('a, button, .btn, [role="button"]');
  
  magneticElements.forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const relX = e.clientX - rect.left - rect.width / 2;
      const relY = e.clientY - rect.top - rect.height / 2;
      
      const strength = 0.25;
      el.style.transform = `translate(${relX * strength}px, ${relY * strength}px)`;
    });

    el.addEventListener('mouseleave', () => {
      el.style.transform = 'translate(0, 0)';
    });
  });
}

/* ── Text Character-by-Character Animation ── */
function initCharacterAnimation(selector = 'h1, h2, .sub-title') {
  document.querySelectorAll(selector).forEach(element => {
    // Only apply to elements that don't already have child elements with class 'char'
    if (element.querySelector('.char')) return;

    const text = element.textContent;
    element.textContent = '';
    
    text.split('').forEach((char, index) => {
      const span = document.createElement('span');
      span.className = 'char';
      span.textContent = char;
      span.style.animationDelay = `${index * 0.05}s`;
      element.appendChild(span);
    });
  });
}

/* ── Number Counter Animation ── */
function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  
  const countUp = (element) => {
    const target = parseInt(element.getAttribute('data-count'), 10);
    const duration = parseInt(element.getAttribute('data-duration') || 1000, 10);
    const startTime = performance.now();

    const update = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(target * easeOut);
      
      element.textContent = current;
      
      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        element.textContent = target;
      }
    };

    requestAnimationFrame(update);
  };

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
        entry.target.classList.add('counted');
        countUp(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => counterObserver.observe(counter));
}

/* ── Smooth Scroll Spy for Navigation ── */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id], div[id*="section"], div[id="my-projects"], div[id="tech-journey"], div[id="skills-tools"], div[id="about"], div[id="contact"]');
  const navLinks = document.querySelectorAll('nav a[href^="#"]');

  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 150;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').slice(1) === current) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
}

/* ── Scroll To Top with Smooth Animation ── */
function initScrollToTop() {
  const scrollTopBtn = document.querySelector('.scroll-top');
  if (!scrollTopBtn) {
    // Create scroll to top button if it doesn't exist
    const btn = document.createElement('a');
    btn.className = 'scroll-top';
    btn.href = '#';
    btn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(btn);
  }

  const scrollBtn = document.querySelector('.scroll-top');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollBtn.classList.add('active');
    } else {
      scrollBtn.classList.remove('active');
    }
  }, { passive: true });

  scrollBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (window.lenis) {
      window.lenis.scrollTo(0, { duration: 1.5 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
}

/* ── Enhanced Card Hover with Glow Follow ── */
function initCardGlowEffect() {
  const cards = document.querySelectorAll('.compact-project-card, .card, .service-card, .work');

  cards.forEach(card => {
    const glow = document.createElement('div');
    glow.className = 'card-glow';
    glow.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 200px;
      height: 200px;
      background: radial-gradient(circle, rgba(255, 0, 79, 0.3) 0%, transparent 70%);
      border-radius: 50%;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.3s ease;
      z-index: 0;
    `;
    card.style.position = 'relative';
    card.style.overflow = 'visible';
    card.insertBefore(glow, card.firstChild);

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - 100;
      const y = e.clientY - rect.top - 100;
      glow.style.left = x + 'px';
      glow.style.top = y + 'px';
      glow.style.opacity = '1';
    });

    card.addEventListener('mouseleave', () => {
      glow.style.opacity = '0';
    });
  });
}

/* ── Smooth Color Transition on Scroll ── */
function initDynamicBackgroundShift() {
  const sections = document.querySelectorAll('section, div[id]');
  
  window.addEventListener('scroll', () => {
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const scrollPercent = 1 - (rect.top / window.innerHeight);
      
      if (scrollPercent > 0 && scrollPercent < 1) {
        // Optional: Add subtle background shifts
        const opacity = Math.max(0, Math.min(1, scrollPercent));
        // section.style.opacity = 0.85 + opacity * 0.15;
      }
    });
  }, { passive: true });
}

/* ── Staggered List Item Animation ── */
function initListAnimation() {
  const listItems = document.querySelectorAll('.tab-contents ul li, ul li[class*="item"]');
  
  listItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.animation = `slideUpFade 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s forwards`;
  });
}

/* ── Enhanced Form Interactions ── */
function initFormAnimations() {
  const form = document.querySelector('form');
  if (!form) return;

  const inputs = form.querySelectorAll('input, textarea');

  inputs.forEach(input => {
    input.addEventListener('focus', () => {
      input.parentElement.style.transform = 'scale(1.01)';
      input.parentElement.style.boxShadow = '0 10px 30px rgba(255, 0, 79, 0.2)';
    });

    input.addEventListener('blur', () => {
      input.parentElement.style.transform = 'scale(1)';
      input.parentElement.style.boxShadow = '';
    });
  });
}

/* ── Performance: Debounce Scroll Events ── */
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/* ── Visibility Change Handler ── */
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    // Pause animations
    document.body.style.animationPlayState = 'paused';
  } else {
    // Resume animations
    document.body.style.animationPlayState = 'running';
  }
});

/* ── Initialize All Enhancements on Page Load ── */
function initializeEnhancements() {
  // Wait for DOM to be fully ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => {
        initAdvancedScrollReveal();
        initParallax();
        initMagneticCursor();
        initScrollSpy();
        initScrollToTop();
        initCardGlowEffect();
        initDynamicBackgroundShift();
        initListAnimation();
        initFormAnimations();
        initCounters();
      }, 100);
    });
  } else {
    setTimeout(() => {
      initAdvancedScrollReveal();
      initParallax();
      initMagneticCursor();
      initScrollSpy();
      initScrollToTop();
      initCardGlowEffect();
      initDynamicBackgroundShift();
      initListAnimation();
      initFormAnimations();
      initCounters();
    }, 100);
  }
}

/* ── Trigger Initialization ── */
initializeEnhancements();

/* ── Window Load Event for Post-Load Enhancements ── */
window.addEventListener('load', () => {
  // Optimize animations after images load
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', () => {
      img.style.opacity = '1';
    });
  });
}, { once: true });

/* ── Export for use in other scripts ── */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    initAdvancedScrollReveal,
    initParallax,
    initMagneticCursor,
    initCharacterAnimation,
    initCounters,
    initScrollSpy,
    initScrollToTop,
    initCardGlowEffect
  };
}
