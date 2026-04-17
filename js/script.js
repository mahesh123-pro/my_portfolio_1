/* ============================================================
   MAHESH PORTFOLIO — PREMIUM JS (2026 EDITION)
   ============================================================ */

'use strict';

/* ── Lenis Smooth Scroll ── */
(function initLenis() {
  if (window.lenis) return;
  
  if (typeof window.Lenis === 'undefined') {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/lenis@1.1.20/dist/lenis.min.js';
    script.onload = setupLenis;
    document.head.appendChild(script);
  } else {
    setupLenis();
  }

  function setupLenis() {
    if (window.lenis) return;
    const lenis = new window.Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.1,
      infinite: false,
    });

    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }
})();

/* ── Reactive Particles ── */
function createParticles() {
  const c = document.getElementById('particles-container');
  if (!c) return;
  const count = window.innerWidth < 768 ? 20 : 45;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.classList.add('particle');
    const sz = Math.random() * 3 + 1.5;
    const op = Math.random() * 0.4 + 0.1;
    p.style.cssText = `
      width:${sz}px;height:${sz}px;
      left:${Math.random() * 100}%;
      top:${Math.random() * 100}%;
      animation-duration:${Math.random() * 20 + 15}s;
      animation-delay:${Math.random() * 10}s;
      opacity:${op};
      background:rgba(255,255,255,${op});
      box-shadow:0 0 ${sz * 3}px hsla(226, 82%, 63%, 0.3);
    `;
    c.appendChild(p);

    // Mouse reaction
    document.addEventListener('mousemove', e => {
      const dx = e.clientX - p.offsetLeft;
      const dy = e.clientY - p.offsetTop;
      const dist = Math.sqrt(dx*dx + dy*dy);
      if (dist < 150) {
        const force = (150 - dist) / 150;
        p.style.transform = `translate(${dx * force * 0.2}px, ${dy * force * 0.2}px)`;
      } else {
        p.style.transform = '';
      }
    });
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
      mainNav.style.transform = 'translateY(-140%)';
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
const menuToggle = document.querySelector('.menu-toggle');

function openmenu() {
  if (sidemenu) {
    sidemenu.style.right = '12px';
    document.body.style.overflow = 'hidden';
  }
  if (menuToggle) menuToggle.setAttribute('aria-expanded', 'true');
}
function closemenu() {
  if (sidemenu) {
    sidemenu.style.right = '-320px';
    document.body.style.overflow = '';
  }
  if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
}
window.openmenu = openmenu;
window.closemenu = closemenu;

document.addEventListener('click', e => {
  if (sidemenu && !sidemenu.contains(e.target) && !e.target.closest('.menu-toggle')) {
    closemenu();
  }
});

/* ── Smooth scroll ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (!target) return;
    
    e.preventDefault();
    if (window.lenis) {
      window.lenis.scrollTo(target, { 
        offset: -80,
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
      });
    } else {
      const top = target.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
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
        if (msgEl) { msgEl.textContent = '❌ Oops! Something went wrong. Try again.'; msgEl.style.color = '#2563eb'; }
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

/* ── About Image Deep Tilt ── */
const aboutCol = document.querySelector('.about-col-1');
const aboutImg = document.querySelector('.about-img-premium');
if (aboutCol && aboutImg) {
  aboutCol.addEventListener('mousemove', e => {
    const r = aboutCol.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const xc = r.width / 2;
    const yc = r.height / 2;
    const dx = x - xc;
    const dy = y - yc;
    
    // Tilt the image
    aboutImg.style.transition = 'transform .1s ease';
    aboutImg.style.transform = `perspective(1000px) rotateX(${(dy / yc) * -10}deg) rotateY(${(dx / xc) * 10}deg) scale(1.04)`;
    
    // Move the glow background slightly in opposite direction
    const glow = aboutCol.querySelector('::after'); // We can't select pseudo-elements but we can use CSS variables
    aboutCol.style.setProperty('--about-glow-x', `${(dx / xc) * 15}px`);
    aboutCol.style.setProperty('--about-glow-y', `${(dy / yc) * 15}px`);
  });
  
  aboutCol.addEventListener('mouseleave', () => {
    aboutImg.style.transition = 'transform .6s var(--tr)';
    aboutImg.style.transform = 'perspective(1000px)';
    aboutCol.style.setProperty('--about-glow-x', '0px');
    aboutCol.style.setProperty('--about-glow-y', '0px');
  });
}

/* ── Cursor glow (desktop only) ── */
if (window.matchMedia('(hover: hover)').matches) {
  const glow = document.createElement('div');
  glow.style.cssText = `
    position:fixed;width:300px;height:300px;border-radius:50%;
    background:radial-gradient(circle,rgba(37, 99, 235,.08) 0%,transparent 70%);
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
  const hzSections = document.querySelectorAll('.hz-scroll-section');
  
  if (hzSections.length > 0) {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const viewHeight = window.innerHeight;
          
          hzSections.forEach(hzSection => {
            const hzContainer = hzSection.querySelector('.hz-scroll-container');
            const hzGrid = hzSection.querySelector('.hz-grid');
            
            if (hzContainer && hzGrid) {
              const rect = hzSection.getBoundingClientRect();
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
            }
          });
          
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
      if (hero && window.innerWidth > 900) {
        hero.style.transform = `translateY(${y * 0.12}px) scale(1.06)`;
      }
    }
    pTick = false;
  });
}, { passive: true });

/* ── Magnetic Hover Effect ── */
function initMagneticButtons() {
  const btns = document.querySelectorAll('.btn, .nav-magnetic, .logo-link');
  btns.forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const { left, top, width, height } = btn.getBoundingClientRect();
      const x = e.clientX - left - width / 2;
      const y = e.clientY - top - height / 2;
      btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
}
document.addEventListener('DOMContentLoaded', initMagneticButtons);

/* ── Text Scramble Effect ── */
class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = '!<>-_\\/[]{}—=+*^?#________';
    this.update = this.update.bind(this);
  }
  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => (this.resolve = resolve));
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }
  update() {
    let output = '';
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="scramble-char">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

document.addEventListener('DOMContentLoaded', () => {
    const el = document.querySelector('.hero-subtext');
    if (el) {
        const originalText = el.innerText;
        const fx = new TextScramble(el);
        setTimeout(() => fx.setText(originalText), 2000);
    }
});

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
console.log('%c Mahesh\'s Portfolio ', 'background:linear-gradient(90deg,#2563eb,#0ea5e9);color:#fff;font-size:20px;padding:14px 30px;border-radius:10px;font-weight:800;');
console.log('%c Built with passion & modern web tech ', 'color:#2563eb;font-size:13px;padding:4px;');
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

