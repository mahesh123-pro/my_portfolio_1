/* ============================================
   MODERN PORTFOLIO JS - PREMIUM EDITION V2
   ============================================ */

// ============================================
// FLOATING PARTICLES SYSTEM
// ============================================
function createParticles() {
  const container = document.getElementById('particles-container');
  if (!container) return;

  const particleCount = 35;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    // Random properties for natural look
    const size = Math.random() * 4 + 2;
    const left = Math.random() * 100;
    const animationDuration = Math.random() * 25 + 15;
    const animationDelay = Math.random() * 15;
    const opacity = Math.random() * 0.5 + 0.1;

    particle.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${left}%;
      animation-duration: ${animationDuration}s;
      animation-delay: ${animationDelay}s;
      opacity: ${opacity};
      background: rgba(255, 255, 255, ${opacity});
      box-shadow: 0 0 ${size * 2}px rgba(255, 255, 255, 0.3);
    `;

    container.appendChild(particle);
  }
}

// ============================================
// ENHANCED PRELOADER
// ============================================
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');

  // Delay for dramatic effect
  setTimeout(() => {
    if (preloader) {
      preloader.classList.add('fade-out');

      setTimeout(() => {
        preloader.style.display = 'none';
        // Initialize effects after preloader
        createParticles();
        initTextAnimations();
        initScrollAnimations();
      }, 600);
    }
  }, 2200);
});

// ============================================
// TEXT TYPING ANIMATION
// ============================================
function initTextAnimations() {
  // Animate heading words sequentially
  const heading = document.querySelector('.header-text h1');
  if (heading) {
    heading.style.opacity = '1';
  }

  // Counter animation for stats if present
  const counters = document.querySelectorAll('[data-count]');
  counters.forEach(counter => {
    const target = parseInt(counter.dataset.count);
    animateCounter(counter, target);
  });
}

function animateCounter(element, target, duration = 2000) {
  let start = 0;
  const startTime = performance.now();

  function updateCounter(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Easing function for smooth animation
    const easeOutQuart = 1 - Math.pow(1 - progress, 4);
    const current = Math.floor(easeOutQuart * target);

    element.textContent = current + (element.dataset.suffix || '');

    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target + (element.dataset.suffix || '');
    }
  }

  requestAnimationFrame(updateCounter);
}

// ============================================
// NAVBAR SCROLL EFFECTS
// ============================================
const nav = document.querySelector('nav');
let lastScrollY = 0;
let ticking = false;

function updateNav() {
  const currentScrollY = window.scrollY;

  if (nav) {
    if (currentScrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }

    // Hide/show on scroll direction
    if (currentScrollY > lastScrollY && currentScrollY > 500) {
      nav.style.transform = 'translateY(-100%)';
    } else {
      nav.style.transform = 'translateY(0)';
    }
  }

  lastScrollY = currentScrollY;
  ticking = false;
}

window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(updateNav);
    ticking = true;
  }
});

// Active nav link on scroll
const sections = document.querySelectorAll('section, div[id]');
const navLinks = document.querySelectorAll('nav ul li a');

function setActiveNavLink() {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', setActiveNavLink);

// ============================================
// TABS FUNCTIONALITY
// ============================================
const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname, event) {
  for (let tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (let tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

window.opentab = opentab;

// ============================================
// MOBILE MENU
// ============================================
const sidemenu = document.getElementById("sidemenu");

function openmenu() {
  if (sidemenu) {
    sidemenu.style.right = "0";
    document.body.style.overflow = 'hidden';
  }
}

function closemenu() {
  if (sidemenu) {
    sidemenu.style.right = "-280px";
    document.body.style.overflow = '';
  }
}

window.openmenu = openmenu;
window.closemenu = closemenu;

// Close menu on outside click
document.addEventListener('click', (e) => {
  if (sidemenu && !sidemenu.contains(e.target) && !e.target.classList.contains('fa-bars')) {
    closemenu();
  }
});

// ============================================
// GOOGLE SHEETS FORM
// ============================================
const scriptURL = 'https://script.google.com/macros/s/AKfycbymhZQRiXeVBwmppCGavvLCxLg2t28vdPTlMFfdgSSLHAc3PFD4dQPUVGmZxddwkH0/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.7';

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {
        msg.innerHTML = "Thanks for your feedback!";
        msg.style.color = "#4caf50";
        form.reset();

        // Success animation
        submitBtn.style.background = '#4caf50';
        submitBtn.textContent = 'Sent!';

        setTimeout(() => {
          msg.innerHTML = "";
          submitBtn.style.background = '';
        }, 5000);
      })
      .catch(error => {
        console.error('Error!', error.message);
        msg.innerHTML = "Error sending message. Please try again.";
        msg.style.color = "#ff004f";
      })
      .finally(() => {
        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
          submitBtn.style.opacity = '1';
        }, 2000);
      });
  });
}

// ============================================
// SMOOTH SCROLLING
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      const offsetTop = target.offsetTop - 80;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });

      closemenu();
    }
  });
});

// ============================================
// GALLERY SEE MORE
// ============================================
const seeMoreBtn = document.getElementById('seeMoreBtn');
const extraWorkContainer = document.getElementById('extraWorkContainer');
let expanded = false;

if (seeMoreBtn && extraWorkContainer) {
  seeMoreBtn.addEventListener('click', function (e) {
    e.preventDefault();
    expanded = !expanded;

    if (expanded) {
      extraWorkContainer.style.display = 'grid';
      setTimeout(() => extraWorkContainer.classList.add('show'), 10);
      seeMoreBtn.textContent = 'Show Less';

      setTimeout(() => {
        extraWorkContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    } else {
      extraWorkContainer.classList.remove('show');
      seeMoreBtn.textContent = 'See More';
      document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });

      setTimeout(() => {
        extraWorkContainer.style.display = 'none';
      }, 800);
    }
  });
}

// ============================================
// SCROLL-TRIGGERED ANIMATIONS
// ============================================
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.card, .project-card, .compact-project-card, .premium-project-card, .service-card, .work, .skill-category, .about-col-1, .about-col-2, .footer-brand, .footer-links, .footer-social-wrapper, .footer-bottom');

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -80px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('animate-visible');
        }, index * 100);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animatedElements.forEach(el => {
    el.classList.add('animate-hidden');
    observer.observe(el);
  });
}

// Add CSS for animations dynamically
const animationStyles = document.createElement('style');
animationStyles.textContent = `
  .animate-hidden {
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  .animate-visible {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
`;
document.head.appendChild(animationStyles);

// Initialize ScrollReveal if available
if (typeof ScrollReveal !== 'undefined') {
  ScrollReveal({
    reset: false,
    distance: '60px',
    duration: 1000,
    delay: 100,
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
  });

  ScrollReveal().reveal('.header-text', { origin: 'left', delay: 300 });
  ScrollReveal().reveal('.hero-image', { origin: 'right', delay: 500 });
  ScrollReveal().reveal('.sub-title', { origin: 'top' });
  ScrollReveal().reveal('.card, .project-card, .compact-project-card, .premium-project-card, .service-card', { origin: 'bottom', interval: 150 });
  ScrollReveal().reveal('.work', { origin: 'bottom', interval: 200 });
  ScrollReveal().reveal('.skill-category', { origin: 'bottom', interval: 100 });
  ScrollReveal().reveal('.contact-left', { origin: 'left' });
  ScrollReveal().reveal('.contact-right', { origin: 'right' });
  ScrollReveal().reveal('.footer-brand, .footer-links, .footer-social-wrapper', { origin: 'bottom', interval: 150 });
  ScrollReveal().reveal('.footer-bottom', { origin: 'bottom', delay: 200 });
}

// ============================================
// 3D TILT EFFECT FOR CARDS
// ============================================
const tiltCards = document.querySelectorAll(".card, .service-card, .project-card");

tiltCards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    card.style.transition = 'transform 0.1s ease';

    // Dynamic lighting effect
    const glowX = (x / rect.width) * 100;
    const glowY = (y / rect.height) * 100;
    card.style.background = `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(255, 0, 79, 0.15), transparent 50%), 
                              linear-gradient(145deg, #111111, #181818)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)";
    card.style.transition = 'all 0.5s ease';
    card.style.background = '';
  });
});

// ============================================
// MAGNETIC HOVER EFFECT
// ============================================
const magneticElements = document.querySelectorAll('.btn, .btn-link, .social-icons a, .footer-social a');

magneticElements.forEach(el => {
  el.addEventListener('mousemove', (e) => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  });

  el.addEventListener('mouseleave', () => {
    el.style.transform = '';
  });
});

// ============================================
// PARALLAX ON SCROLL
// ============================================
let parallaxTicking = false;

window.addEventListener('scroll', () => {
  if (!parallaxTicking) {
    requestAnimationFrame(() => {
      const scrolled = window.pageYOffset;

      // Hero image parallax
      const heroImage = document.querySelector('.hero-image img');
      if (heroImage && scrolled < window.innerHeight) {
        heroImage.style.transform = `translateY(${scrolled * 0.2}px)`;
      }

      // Background lines parallax
      const bgLines = document.querySelectorAll('.bg-lines span');
      bgLines.forEach((line, i) => {
        const speed = 0.1 + (i * 0.02);
        line.style.transform = `translateY(${scrolled * speed}px)`;
      });

      parallaxTicking = false;
    });
    parallaxTicking = true;
  }
});

// ============================================
// DYNAMIC COPYRIGHT YEAR
// ============================================
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// ============================================
// SCROLL TO TOP BUTTON
// ============================================
const scrollTopBtn = document.getElementById('scrollTopBtn');

if (scrollTopBtn) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      scrollTopBtn.classList.add('active');
    } else {
      scrollTopBtn.classList.remove('active');
    }
  });

  scrollTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ============================================
// IMAGE LAZY LOADING
// ============================================
const lazyImages = document.querySelectorAll('img[loading="lazy"]');

const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;

      if (img.complete) {
        img.style.opacity = '1';
      } else {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s ease';

        img.onload = () => {
          img.style.opacity = '1';
        };
      }

      imageObserver.unobserve(img);
    }
  });
});

lazyImages.forEach(img => imageObserver.observe(img));

// ============================================
// KEYBOARD NAVIGATION
// ============================================
document.addEventListener('keydown', (e) => {
  if (e.key === 'Home') {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  if (e.key === 'End') {
    e.preventDefault();
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }

  if (e.key === 'Escape') {
    closemenu();
  }
});

// ============================================
// HOVER SOUND EFFECT (Optional - Commented)
// ============================================
/*
const hoverSound = new Audio('assets/sounds/hover.mp3');
hoverSound.volume = 0.1;

document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', () => {
    hoverSound.currentTime = 0;
    hoverSound.play().catch(() => {});
  });
});
*/

// ============================================
// MOUSE TRAIL EFFECT
// ============================================
function createMouseTrail() {
  const trail = [];
  const trailLength = 10;

  for (let i = 0; i < trailLength; i++) {
    const dot = document.createElement('div');
    dot.className = 'mouse-trail-dot';
    dot.style.cssText = `
      position: fixed;
      width: ${8 - i * 0.5}px;
      height: ${8 - i * 0.5}px;
      background: rgba(255, 255, 255, ${0.5 - i * 0.04});
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      opacity: 0;
      transition: opacity 0.3s ease;
    `;
    document.body.appendChild(dot);
    trail.push({ el: dot, x: 0, y: 0 });
  }

  let mouseX = 0, mouseY = 0;
  let isMoving = false;
  let hideTimeout;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    isMoving = true;

    trail.forEach(dot => dot.el.style.opacity = '1');

    clearTimeout(hideTimeout);
    hideTimeout = setTimeout(() => {
      trail.forEach(dot => dot.el.style.opacity = '0');
      isMoving = false;
    }, 100);
  });

  function animateTrail() {
    let x = mouseX, y = mouseY;

    trail.forEach((dot, i) => {
      const nextX = x;
      const nextY = y;

      dot.x += (nextX - dot.x) * (0.35 - i * 0.02);
      dot.y += (nextY - dot.y) * (0.35 - i * 0.02);

      dot.el.style.left = dot.x + 'px';
      dot.el.style.top = dot.y + 'px';

      x = dot.x;
      y = dot.y;
    });

    requestAnimationFrame(animateTrail);
  }

  animateTrail();
}

// Only enable trail on desktop
if (window.matchMedia('(hover: hover)').matches) {
  createMouseTrail();
}

// ============================================
// SMOOTH SECTION TRANSITIONS
// ============================================
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('section-visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('section, div[id]').forEach(section => {
  section.classList.add('section-hidden');
  sectionObserver.observe(section);
});

// Add section transition styles
const sectionStyles = document.createElement('style');
sectionStyles.textContent = `
  .section-hidden {
    opacity: 0.8;
  }
  .section-visible {
    opacity: 1;
    transition: opacity 0.8s ease;
  }
`;
document.head.appendChild(sectionStyles);

// ============================================
// CONSOLE EASTER EGG
// ============================================
console.log('%c Welcome to Mahesh\'s Portfolio! ', 'background: linear-gradient(90deg, #ff004f, #ff6b6b); color: white; font-size: 20px; padding: 15px 30px; border-radius: 10px; font-weight: bold;');
console.log('%c Built with passion, creativity & modern web tech ', 'color: #ff004f; font-size: 14px; padding: 5px;');
console.log('%c Contact: kolim5263@gmail.com ', 'color: #888; font-size: 12px;');
