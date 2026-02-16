

// ----------------Tabs Functionality------------------
// Get all elements with class="tab-links" and "tab-contents"

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

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



// -----------------side Menu------------------

var sidemenu = document.getElementById("sidemenu");
function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}



//-----------------Google Sheets API------------------
const scriptURL = 'https://script.google.com/macros/s/AKfycbyi2cd9O5YHKGYbQVGs0S-l9X05qB-RBkuauTIjeZsCc6pXe-3lh7EOKnw_iTGOWb2eGw/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      msg.innerHTML = "Message sent Successfully"
      setTimeout(function () {
        msg.innerHTML = ""

      }, 5000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})



// -----------------Typed.js & Glitch Effect Removed (Hero Updated)------------------

// -----------------Smooth Scrolling------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});




// -----------------See More Section------------------
// Function to handle the "See More" button click

const seeMoreBtn = document.getElementById('seeMoreBtn');
const extraWorkContainer = document.getElementById('extraWorkContainer');
let expanded = false;

seeMoreBtn.addEventListener('click', function (e) {
  e.preventDefault();
  expanded = !expanded;

  // Toggling the 'show' class based on the state of `expanded`
  if (expanded) {
    extraWorkContainer.style.display = 'block';
    // Small delay to allow display:block to apply before opacity transition
    setTimeout(() => {
      extraWorkContainer.classList.add('show');
    }, 10);
    seeMoreBtn.textContent = 'Show Less';

    // Smooth scroll to the new items
    setTimeout(() => {
      extraWorkContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300);

  } else {
    extraWorkContainer.classList.remove('show');
    seeMoreBtn.textContent = 'See More';

    // Smooth scroll back to gallery top
    document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });

    // Wait for transition to finish before hiding
    setTimeout(() => {
      extraWorkContainer.style.display = 'none';
    }, 800);
  }
});

//preloader
window.addEventListener('load', function () {
  document.getElementById('preloader').style.display = 'none';
});

document.getElementById('preloader').style.opacity = '0';
setTimeout(() => {
  document.getElementById('preloader').style.display = 'none';
}, 500);


// -----------------Scroll Reveal------------------
ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .skills-container, .project-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


// -----------------Vanilla 3D Tilt Effect for Cards------------------
// Targeting Certification, Service, and Project cards
const cards = document.querySelectorAll(".card, .service-card, .project-card");

cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10; // Max rotation deg
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)";
  });
});

// -----------------Enhanced Services Section Animations------------------
// Scroll-triggered animations for service cards
const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -100px 0px'
};

const serviceObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      // Add staggered animation delay
      setTimeout(() => {
        entry.target.classList.add('service-visible');
      }, index * 150);
    }
  });
}, observerOptions);

// Observe all service cards
// Observe all service cards and work items
document.querySelectorAll('.service-card, .work').forEach((card) => {
  serviceObserver.observe(card);
});

// -----------------Magnetic Effect for Service Cards------------------
// Service cards are attracted to mouse cursor
const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Subtle magnetic pull effect
    const moveX = x * 0.1;
    const moveY = y * 0.1;

    card.style.transform = `translate(${moveX}px, ${moveY}px) translateY(-20px) scale(1.02)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

// -----------------Parallax Effect for Service Icons------------------
// Icons move slightly on scroll
window.addEventListener('scroll', () => {
  const serviceIcons = document.querySelectorAll('.service-card i');
  const scrolled = window.pageYOffset;

  serviceIcons.forEach((icon, index) => {
    const speed = 0.05 + (index * 0.01);
    const yPos = -(scrolled * speed);
    icon.style.transform = `translateY(${yPos}px)`;
  });
});

// -----------------Service Card Counter Animation------------------
// Animate numbers when scrolled into view
const animateValue = (element, start, end, duration) => {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    element.textContent = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
};

// -----------------Gradient Animation on Scroll------------------
// Change gradient colors based on scroll position
const servicesSection = document.querySelector('#services');
if (servicesSection) {
  window.addEventListener('scroll', () => {
    const rect = servicesSection.getBoundingClientRect();
    const scrollPercent = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight));

    // Smoothly transition background gradient
    const hue = 300 + (scrollPercent * 60); // 300 (pink) to 360 (red)
    servicesSection.style.filter = `hue-rotate(${hue - 300}deg)`;
  });
}


// -----------------Dynamic Copyright Year------------------
// -----------------Footer & Scroll Top Logic------------------
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Scroll Top Button Logic
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
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}













