// INITIATE ANIMATE ON SCROLL
AOS.init({
  duration: 1200,
  disable: 'mobile',
})

//Get the back-to-top button:
let backToTopButton = document.getElementById("myBtn");

//  STORE SECTIONS IN VARIABLES
let homeSection = document.getElementById("home");
let aboutSection = document.getElementById("about");
let skillsSection = document.getElementById("skills");
let projectsSection = document.getElementById("projects");

let accentColor = "#ffd700";
//  STORE NAV BUTTONS IN VARIABLES
let navHomeBtn = document.getElementById("navHomeBtn");
let navAboutBtn = document.getElementById("navAboutBtn");
let navSkillsBtn = document.getElementById("navSkillsBtn");
let navProjectsBtn = document.getElementById("navProjectsBtn");

// CREATE AN ARRAY OF ALL NAV BUTTONS
let btn_list = [];
btn_list.push(navHomeBtn, navAboutBtn, navSkillsBtn, navProjectsBtn);

// ADD LISTENERS TO ALL NAV BUTTONS
navHomeBtn.addEventListener("click", () => ScrollToSection(homeSection));
navAboutBtn.addEventListener("click", () => ScrollToSection(aboutSection));
navSkillsBtn.addEventListener("click", () => ScrollToSection(skillsSection));
navProjectsBtn.addEventListener("click", () => ScrollToSection(projectsSection));

// When the user scrolls down 50px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    backToTopButton.style.opacity = 100;
  } else {
    backToTopButton.style.opacity = 0;
  }
  if (document.body.scrollTop > 1800 && document.body.scrollTop < 2800 || document.documentElement.scrollTop > 1800 && document.documentElement.scrollTop < 2800) {
    backToTopButton.style.backgroundColor = "rgb(233, 233, 233)";
    backToTopButton.style.color = "#273036";
  } else if (document.body.scrollTop < 400 || document.documentElement.scrollTop < 400) {
    // AT TOP
    backToTopButton.style.backgroundColor = "#273036";
    backToTopButton.style.color = "rgb(233, 233, 233)";
  } else if (document.body.scrollTop > 2800 || document.documentElement.scrollTop > 2800) {
    backToTopButton.style.backgroundColor = "#273036";
    backToTopButton.style.color = "#273036";
  }
}

// SCROLLS THE PAGE SMOOTHLY TO A SPECIFIC SECTION
function ScrollToSection(sectionName) {
  sectionName.scrollIntoView({
    behavior: 'smooth'
  });
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  window.scroll({
    top: 0,
    behavior: 'smooth'
  })
}

//SET UP AND DISPLAY LOADING SCREEN 
const loader = document.querySelector(".loader");
window.onload = function () {
  setTimeout(function () {
    loader.style.opacity = "0";
    loader.style.pointerEvents = "none";
    btn_list.forEach((btn, i) => {
      setTimeout(() => {
        btn.style.transform = "translateX(0px)";
      }, i * 100);
    });
    setTimeout(function () {
      loader.style.display = "none";
    }, 1700);
  }, 1800);
}