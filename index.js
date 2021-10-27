// INITIATE ANIMATE ON SCROLL
AOS.init({
  duration: 1200,
  disable: 'mobile',
})

//  STORE SECTIONS IN VARIABLES
let homeSection = document.getElementById("home");
let aboutSection = document.getElementById("about");
let skillsSection = document.getElementById("skills");
let projectsSection = document.getElementById("projects");

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

// SCROLLS THE PAGE SMOOTHLY TO A SPECIFIC SECTION
function ScrollToSection(sectionName) {
  sectionName.scrollIntoView({
    behavior: 'smooth'
  });
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