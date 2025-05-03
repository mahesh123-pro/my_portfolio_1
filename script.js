

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

  var sidemenu =document.getElementById("sidemenu");
  function openmenu(){
    sidemenu.style.right = "0";
  }
  function closemenu(){
    sidemenu.style.right = "-200px";
  }



    //-----------------Google Sheets API------------------
  const scriptURL = 'https://script.google.com/macros/s/AKfycbyi2cd9O5YHKGYbQVGs0S-l9X05qB-RBkuauTIjeZsCc6pXe-3lh7EOKnw_iTGOWb2eGw/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent Successfully"
        setTimeout(function(){
          msg.innerHTML = ""

        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })

  
  
    // -----------------Typed.js------------------
  var typed = new Typed("#typing-text", {
    strings: ["Cloud Engineer", "Frontend Developer", "Tech Enthusiast"], 
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
  });


  // -----------------Smooth Scrolling------------------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });

  // -----------------Glitch Effect------------------
  const roles = ["CLOUD SPECIALIST", "FRONTEND SHAPER", "TECH FUTURIST"];
  const el = document.getElementById("typing-text");
  let index = 0;
  
  function glitchText() {
    const originalText = roles[index];
    let displayText = originalText;
    
    // Initial clean display
    el.textContent = displayText;
    el.style.textShadow = "0 0 10px #0ff";
    
    // Add glitch effects
    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        // Random character swaps
        displayText = originalText.split("").map(c => 
          Math.random() > 0.8 ? String.fromCharCode(c.charCodeAt(0) + Math.floor(Math.random() * 10) - 5) : c
        ).join("");
        
        el.textContent = displayText;
        el.style.textShadow = `0 0 ${Math.random() * 15}px rgba(0, 255, 255, ${Math.random()})`;
      }, i * 100);
    }
    
    // Return to normal
    setTimeout(() => {
      el.textContent = originalText;
      el.style.textShadow = "0 0 10px #0ff";
      index = (index + 1) % roles.length;
      setTimeout(glitchText, 2500);
    }, 300);
  }
  
  glitchText();


  
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


   
  
  
  
  
  
  
  

  
  
