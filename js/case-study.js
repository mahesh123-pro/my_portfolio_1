/* ============================================================
   CASE STUDY PAGE — PREMIUM INTERACTIONS
   ============================================================ */

'use strict';

/* ── 1. Scroll Progress Bar ── */
const progressBar = document.getElementById('cs-progress');
function updateProgress() {
    if (!progressBar) return;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = pct + '%';
}
window.addEventListener('scroll', updateProgress, { passive: true });

/* ── 2. Nav scroll state ── */
const nav = document.querySelector('nav');
function updateNav() {
    if (!nav) return;
    if (window.scrollY > 30) {
        nav.classList.add('scrolled');
        nav.style.transform = 'translateY(0)';
    } else {
        nav.classList.add('scrolled'); // always keep scrolled style on case-study pages
    }
}
window.addEventListener('scroll', updateNav, { passive: true });
updateNav();

/* ── 3. Mobile menu (re-use from main script) ── */
const sidemenu = document.getElementById('sidemenu');
function openmenu() {
    if (sidemenu) {
        sidemenu.style.right = '0';
        document.body.style.overflow = 'hidden';
    }
}
function closemenu() {
    if (sidemenu) {
        sidemenu.style.right = '-280px';
        document.body.style.overflow = '';
    }
}
window.openmenu = openmenu;
window.closemenu = closemenu;

// Close on outside click
document.addEventListener('click', (e) => {
    if (sidemenu && !sidemenu.contains(e.target) && !e.target.classList.contains('fa-bars')) {
        closemenu();
    }
});

/* ── 4. Scroll-Reveal Cards ── */
function initCardReveal() {
    const cards = document.querySelectorAll('.cs-card');
    if (!cards.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.08,
        rootMargin: '0px 0px -50px 0px',
    });

    cards.forEach((card, i) => {
        // stagger via inline CSS delay
        card.style.transitionDelay = `${i * 0.07}s`;
        observer.observe(card);
    });
}

/* ── 5. Cursor Glow Effect (desktop only) ── */
function initCursorGlow() {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const glow = document.createElement('div');
    glow.className = 'cs-cursor-glow';
    document.body.appendChild(glow);

    let mx = 0, my = 0, cx = 0, cy = 0;
    let rafId;

    document.addEventListener('mousemove', (e) => {
        mx = e.clientX;
        my = e.clientY;
    }, { passive: true });

    function animate() {
        cx += (mx - cx) * 0.1;
        cy += (my - cy) * 0.1;
        glow.style.left = cx + 'px';
        glow.style.top = cy + 'px';
        rafId = requestAnimationFrame(animate);
    }
    animate();
}

/* ── 6. Hero Image Parallax ── */
function initParallax() {
    const heroImg = document.querySelector('.cs-hero-image img');
    if (!heroImg) return;

    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                const scrolled = window.scrollY;
                if (scrolled < window.innerHeight * 1.5) {
                    heroImg.style.transform = `scale(1.03) translateY(${scrolled * 0.08}px)`;
                }
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
}

/* ── 7. Dynamic Year ── */
const yrSpan = document.getElementById('year');
if (yrSpan) yrSpan.textContent = new Date().getFullYear();

/* ── 8. Card hover tilt (subtle 3D) ── */
function initTilt() {
    const cards = document.querySelectorAll('.cs-card');
    cards.forEach((card) => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
            const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
            card.style.transform = `translateY(-4px) rotateX(${-y * 3}deg) rotateY(${x * 3}deg)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
        });
    });
}

/* ── 9. Smooth scroll for any anchor links ── */
document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
        const target = document.querySelector(a.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

/* ── 10. Keyboard nav ── */
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closemenu();
    if (e.key === 'Home') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

/* ── Init all on DOM ready ── */
document.addEventListener('DOMContentLoaded', () => {
    initCardReveal();
    initCursorGlow();
    initParallax();
    initTilt();
});

/* ── Console Easter Egg ── */
console.log(
    '%c Mahesh\'s Case Study ',
    'background: linear-gradient(90deg,#ff004f,#ff6b6b); color:#fff; font-size:16px; padding:10px 24px; border-radius:8px; font-weight:700;'
);
