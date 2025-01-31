//! navigation bar animation //

let tl = gsap.timeline(); // timeline

tl.from('.navbar h1', {
  y: -50,
  opacity: 0,
  duration: 1,
  ease: 'expo.out',
  stagger: 0.2, // delay between each element
  delay: 0.5, // delay before starting
});

let tl2 = gsap.timeline();

tl2.from('.navbar h3, h2', {
  y: -50,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  ease: 'expo.out',
  stagger: 0.2, // delay between each element
});

let darkMode = document.getElementById('dark-mode');

darkMode.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  document.body.classList.toggle('light-mode');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// ! hero section animation //
// image animation //

let tlHeroImg = gsap.timeline();

tlHeroImg.from('.hero-section img', {
  scale: 0.5,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  ease: 'expo.out',
});

//  text animation //
let tl3 = gsap.timeline();

tl3.from('.hero-section h3, h1, p', {
  y: -50,
  opacity: 0,
  duration: 1,
  delay: 0.3,
  ease: 'expo.out',
  stagger: 0.2,
});

// button animation //
let tlButton = gsap.timeline();

tlButton.from('.hero-section button', {
  scale: 0.5,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  ease: 'expo.out',
  onComplete: function () {
    gsap.set('.hero-section button', { clearProps: 'all' }); // clear inline styles after animation
  }
});



// ! projects section animation //

//more button animation //

let tlMoreButton = gsap.timeline();

tlMoreButton.from('.projects-section button', {
  scale: 0.5,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  ease: 'expo.out',
  onComplete: function () {
    gsap.set('.projects-section button', { clearProps: 'all' }); // clear inline styles after animation
  }
});

// ! Show more button animation //
// Function to toggle content visibility
function toggleContent(contentId) {
  var content = document.getElementById(contentId);
  if (content.style.display === "none" || content.style.display === "") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
}

// Attach event listeners to buttons
document.getElementById("button1").addEventListener("click", function () {
  toggleContent("content1");
});

document.getElementById("button2").addEventListener("click", function () {
  toggleContent("content2");
});

document.getElementById("button3").addEventListener("click", function () {
  toggleContent("content3");
});


//! Download CV button

let downloadCv = document.getElementById('cv-btn');

downloadCv.addEventListener('click', (e) => {
  const element = document.body;
  html2pdf().from(element).save('SamsuddinPortfolio.pdf');
});






















































