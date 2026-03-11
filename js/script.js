/* ============================================================
   MAHESH PORTFOLIO — PREMIUM JS (2026 EDITION)
   ============================================================ */

'use strict';

/* ── Lenis Smooth Scroll ── */
(function initLenis() {
  if (window.lenis) return;
  if (typeof window.Lenis === 'undefined') {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/lenis@1.1.9/dist/lenis.min.js';
    script.onload = setupLenis;
    document.head.appendChild(script);
  } else {
    setupLenis();
  }

  function setupLenis() {
    if (window.lenis) return;
    const lenis = new window.Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      mouseMultiplier: 1,
    });
    window.lenis = lenis;
    function raf(time) {
      if (window.lenis === lenis) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
    }
    requestAnimationFrame(raf);
  }
})();

/* ── Particles ── */
function createParticles() {
  const c = document.getElementById('particles-container');
  if (!c) return;
  for (let i = 0; i < 30; i++) {
    const p = document.createElement('div');
    p.classList.add('particle');
    const sz = Math.random() * 3 + 1.5;
    const op = Math.random() * 0.4 + 0.08;
    p.style.cssText = `
      width:${sz}px;height:${sz}px;
      left:${Math.random() * 100}%;
      animation-duration:${Math.random() * 22 + 14}s;
      animation-delay:${Math.random() * 12}s;
      opacity:${op};
      background:rgba(255,255,255,${op});
      box-shadow:0 0 ${sz * 2}px rgba(255,255,255,.25);
    `;
    c.appendChild(p);
  }
}

/* ── Preloader ── */
window.addEventListener('load', () => {
  const pl = document.getElementById('preloader');
  setTimeout(() => {
    if (!pl) return;
    pl.classList.add('fade-out');
    setTimeout(() => {
      pl.style.display = 'none';
      createParticles();
      initScrollReveal();
    }, 650);
  }, 1800);
});

/* ── Nav ── */
const mainNav = document.querySelector('nav#main-nav');
let lastY = 0;
let navTick = false;

function updateNav() {
  const y = window.scrollY;
  if (mainNav) {
    mainNav.classList.toggle('scrolled', y > 50);
    // Auto-hide on scroll down, show on scroll up
    if (y > lastY && y > 400) {
      mainNav.style.transform = 'translateY(-100%)';
    } else {
      mainNav.style.transform = 'translateY(0)';
    }
  }
  // Scroll progress bar
  const bar = document.getElementById('scroll-progress');
  if (bar) {
    const h = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    bar.style.width = h > 0 ? `${(y / h) * 100}%` : '0%';
  }
  lastY = y;
  navTick = false;
}

window.addEventListener('scroll', () => {
  if (!navTick) { requestAnimationFrame(updateNav); navTick = true; }
}, { passive: true });

/* Active nav link on scroll */
const sections = [...document.querySelectorAll('section[id], div[id]')];
const navLinks = document.querySelectorAll('nav#main-nav ul li a');

function setActiveLink() {
  let cur = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 160) cur = s.id;
  });
  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + cur);
  });
}
window.addEventListener('scroll', setActiveLink, { passive: true });

/* ── Tabs ── */
const tabLinks = document.getElementsByClassName('tab-links');
const tabContents = document.getElementsByClassName('tab-contents');

function opentab(name, e) {
  [...tabLinks].forEach(t => t.classList.remove('active-link'));
  [...tabContents].forEach(t => t.classList.remove('active-tab'));
  e.currentTarget.classList.add('active-link');
  const el = document.getElementById(name);
  if (el) el.classList.add('active-tab');
}
window.opentab = opentab;

/* ── Mobile Menu ── */
const sidemenu = document.getElementById('sidemenu');

function openmenu() {
  if (sidemenu) { sidemenu.style.right = '0'; document.body.style.overflow = 'hidden'; }
}
function closemenu() {
  if (sidemenu) { sidemenu.style.right = '-280px'; document.body.style.overflow = ''; }
}
window.openmenu = openmenu;
window.closemenu = closemenu;

document.addEventListener('click', e => {
  if (sidemenu && !sidemenu.contains(e.target) && !e.target.classList.contains('fa-bars')) {
    closemenu();
  }
});

/* ── Smooth scroll ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    if (window.lenis) {
      window.lenis.scrollTo(target, { offset: -80 });
    } else {
      window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
    }
    closemenu();
  });
});

/* ── Google Sheets form ── */
const scriptURL = 'https://script.google.com/macros/s/AKfycbymhZQRiXeVBwmppCGavvLCxLg2t28vdPTlMFfdgSSLHAc3PFD4dQPUVGmZxddwkH0/exec';
const form = document.forms['submit-to-google-sheet'];
const msgEl = document.getElementById('msg');

if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const orig = btn.innerHTML;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending…';
    btn.disabled = true;

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(() => {
        if (msgEl) {
          msgEl.textContent = '✅ Message sent! I\'ll get back to you soon.'; msgEl.style.color = '#4caf50';
        }
        btn.innerHTML = '<i class="fa-solid fa-check"></i> Sent!';
        btn.style.background = 'linear-gradient(135deg,#4caf50,#66bb6a)';
        form.reset();
        setTimeout(() => {
          if (msgEl) msgEl.textContent = '';
          btn.innerHTML = orig;
          btn.style.background = '';
          btn.disabled = false;
        }, 5000);
      })
      .catch(() => {
        if (msgEl) { msgEl.textContent = '❌ Oops! Something went wrong. Try again.'; msgEl.style.color = '#ff004f'; }
        btn.innerHTML = orig;
        btn.disabled = false;
      });
  });
}

/* ── Gallery See More ── */
const seeMoreBtn = document.getElementById('seeMoreBtn');
const extraWork = document.getElementById('extraWorkContainer');
let expanded = false;

if (seeMoreBtn && extraWork) {
  seeMoreBtn.addEventListener('click', e => {
    e.preventDefault();
    expanded = !expanded;
    if (expanded) {
      extraWork.classList.add('show');
      seeMoreBtn.textContent = 'Show Less';
      setTimeout(() => extraWork.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 200);
    } else {
      extraWork.classList.remove('show');
      seeMoreBtn.textContent = 'See More';
    }
  });
}

/* ── Scroll-reveal animations ── */
function initScrollReveal() {
  const targets = document.querySelectorAll(
    '.card, .compact-project-card, .service-card, .work, .skill-category, .about-col-1, .about-col-2, .timeline-item'
  );

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('animate-visible'), i * 90);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -60px 0px' });

  targets.forEach(el => { el.classList.add('animate-hidden'); io.observe(el); });

  // ScrollReveal library (if loaded)
  if (typeof ScrollReveal !== 'undefined') {
    const sr = ScrollReveal({ reset: false, distance: '50px', duration: 900, delay: 80, easing: 'cubic-bezier(0.4,0,0.2,1)' });
    sr.reveal('.sub-title', { origin: 'top', delay: 100 });
    sr.reveal('.compact-project-card', { origin: 'bottom', interval: 130 });
    sr.reveal('.card', { origin: 'bottom', interval: 110 });
    sr.reveal('.service-card', { origin: 'bottom', interval: 120 });
    sr.reveal('.work', { origin: 'bottom', interval: 150 });
    sr.reveal('.skill-category', { origin: 'bottom', interval: 100 });
    sr.reveal('.timeline-item', { origin: 'bottom', interval: 150 });
    sr.reveal('.contact-left', { origin: 'left' });
    sr.reveal('.contact-right', { origin: 'right' });
  }
}

/* ── Subtle 3D card tilt ── */
document.querySelectorAll('.compact-project-card, .card.premium-highlight-card, .service-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const rx = ((e.clientY - r.top - r.height / 2) / r.height * -5).toFixed(2);
    const ry = ((e.clientX - r.left - r.width / 2) / r.width * 5).toFixed(2);
    card.style.transition = 'transform .08s ease';
    card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.02,1.02,1.02)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transition = 'transform .5s ease';
    card.style.transform = '';
  });
});

/* ── Cursor glow (desktop only) ── */
if (window.matchMedia('(hover: hover)').matches) {
  const glow = document.createElement('div');
  glow.style.cssText = `
    position:fixed;width:300px;height:300px;border-radius:50%;
    background:radial-gradient(circle,rgba(255,0,79,.08) 0%,transparent 70%);
    pointer-events:none;z-index:0;transition:transform .12s ease;
    transform:translate(-50%,-50%);top:0;left:0;
  `;
  document.body.appendChild(glow);

  document.addEventListener('mousemove', e => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  }, { passive: true });
}

/* ── Horizontal Scroll Section ── */
document.addEventListener("DOMContentLoaded", () => {
  const hzSection = document.querySelector('.hz-scroll-section');
  const hzContainer = document.querySelector('.hz-scroll-container');
  const hzGrid = document.querySelector('.hz-grid');
  
  if (hzSection && hzContainer && hzGrid) {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const rect = hzSection.getBoundingClientRect();
          const viewHeight = window.innerHeight;
          const scrollDistance = rect.height - viewHeight;
          const scrolled = Math.max(0, -rect.top); 
          
          if (rect.top <= 0 && rect.bottom >= viewHeight) {
            const progress = scrolled / scrollDistance; // 0 to 1
            const maxTranslate = hzGrid.scrollWidth - window.innerWidth + 80; 
            const moveX = progress * maxTranslate;
            hzContainer.style.transform = `translateX(-${moveX}px)`;
          } else if (rect.top > 0) {
            hzContainer.style.transform = `translateX(0px)`;
          } else if (rect.bottom < viewHeight) {
            const maxTranslate = hzGrid.scrollWidth - window.innerWidth + 80;
            hzContainer.style.transform = `translateX(-${maxTranslate}px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    });
  }
});

/* ── Premium Image Parallax ── */
document.addEventListener("DOMContentLoaded", () => {
  const parallaxImages = document.querySelectorAll('.card-image img, .gallery-img-wrapper img, .about-col-1 img, .service-image-wrapper img, .timeline-image img');
  
  // Set slight scale-up natively so translating it doesn't reveal edges
  parallaxImages.forEach(img => {
      img.style.transformOrigin = 'center';
      img.style.willChange = 'transform';
  });

  function updateImageParallax() {
    const wHeight = window.innerHeight;
    parallaxImages.forEach(img => {
      const parent = img.parentElement;
      if (!parent) return;
      
      const rect = parent.getBoundingClientRect();
      // If element is in viewport
      if (rect.top <= wHeight && rect.bottom >= 0) {
        // Scroll progress through the viewport from 0 to 1
        const progress = (wHeight - rect.top) / (wHeight + rect.height);
        
        // Translate from -15px to 15px max for a subtle premium effect
        const move = (progress - 0.5) * 30; 
        img.style.setProperty('--parallax-y', `${move}px`);
      }
    });
  }

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateImageParallax();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
  updateImageParallax();
});

/* ── Hero parallax ── */
let pTick = false;
window.addEventListener('scroll', () => {
  if (pTick) return;
  pTick = true;
  requestAnimationFrame(() => {
    const y = window.scrollY;
    if (y < window.innerHeight) {
      const hero = document.querySelector('.hero-image img');
      if (hero) hero.style.transform = `translateY(${y * 0.18}px) scale(1.12)`;
    }
    pTick = false;
  });
}, { passive: true });

/* ── Scroll-to-top button ── */
const scrollTopBtn = document.getElementById('scrollTopBtn');
if (scrollTopBtn) {
  window.addEventListener('scroll', () => {
    scrollTopBtn.classList.toggle('active', window.scrollY > 500);
  }, { passive: true });
  scrollTopBtn.addEventListener('click', e => {
    e.preventDefault();
    if (window.lenis) {
      window.lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
}

/* ── Dynamic year ── */
const yr = document.getElementById('year');
if (yr) yr.textContent = new Date().getFullYear();

/* ── Keyboard shortcuts ── */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closemenu();
  if (e.key === 'Home') { 
    e.preventDefault(); 
    if (window.lenis) window.lenis.scrollTo(0);
    else window.scrollTo({ top: 0, behavior: 'smooth' }); 
  }
  if (e.key === 'End') { 
    e.preventDefault(); 
    if (window.lenis) window.lenis.scrollTo(document.body.scrollHeight);
    else window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }); 
  }
});

/* ── Console easter egg ── */
console.log('%c Mahesh\'s Portfolio ', 'background:linear-gradient(90deg,#ff004f,#ff6b6b);color:#fff;font-size:20px;padding:14px 30px;border-radius:10px;font-weight:800;');
console.log('%c Built with passion & modern web tech ', 'color:#ff004f;font-size:13px;padding:4px;');
console.log('%c 📧 kolim5263@gmail.com ', 'color:#888;font-size:12px;');

/* ── Premium Advanced Page Transition ── */
(function initPageTransitions() {
  document.addEventListener('DOMContentLoaded', () => {
    const ptWrapper = document.createElement('div');
    ptWrapper.className = 'pt-wrapper';
    for (let i = 0; i < 5; i++) {
      const strip = document.createElement('div');
      strip.className = 'pt-strip';
      ptWrapper.appendChild(strip);
    }
    document.body.appendChild(ptWrapper);

    if (sessionStorage.getItem('isTransitioning')) {
      sessionStorage.removeItem('isTransitioning');
      document.body.classList.add('pt-enter');
      const pl = document.getElementById('preloader');
      if (pl) pl.style.display = 'none'; // hide normal preloader
      
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          document.body.classList.add('pt-enter-active');
          setTimeout(() => {
            document.body.classList.remove('pt-enter', 'pt-enter-active');
          }, 1100);
        });
      });
    }

    document.addEventListener('click', e => {
      const a = e.target.closest('a');
      if (!a) return;
      
      const href = a.getAttribute('href');
      // Ignore anchors, external protocols, internal JS, un-linkable items
      if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:')) return;
      if (a.getAttribute('target') === '_blank' || a.hasAttribute('download')) return;

      try {
        const url = new URL(a.href);
        if (url.origin !== window.location.origin) return;
      } catch(err) { return; }

      e.preventDefault();
      const targetUrl = a.href;
      document.body.classList.add('pt-leave');
      sessionStorage.setItem('isTransitioning', 'true');
      
      // Navigate exactly after the full transition sweeps (240ms delay + 650ms animation + 10ms padding)
      setTimeout(() => {
        window.location.href = targetUrl;
      }, 900); 
    });
  });
})();
