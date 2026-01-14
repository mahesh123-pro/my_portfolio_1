

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
  extraWorkContainer.classList.toggle('show', expanded);

  // Changing the button text
  seeMoreBtn.textContent = expanded ? 'Show Less' : 'See More';
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


// -----------------Dynamic Copyright Year------------------
const copyrightP = document.querySelector(".copyright p");
if (copyrightP) {
  const currentYear = new Date().getFullYear();
  copyrightP.innerHTML = `Copyright &copy; ${currentYear} Mahesh. Made with <i class="fa-solid fa-heart" style="color: #ff004f;"></i> by Me`;
}













