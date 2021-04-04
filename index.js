AOS.init({
     duration: 1200,
     disable: 'mobile',
 })

 let homeSection = document.getElementById("home");
 let aboutSection = document.getElementById("about");
 let skillsSection = document.getElementById("skills");
 let projectsSection = document.getElementById("projects");

 let navHomeBtn = document.getElementById("navHomeBtn");
 let navAboutBtn = document.getElementById("navAboutBtn");
 let navSkillsBtn = document.getElementById("navSkillsBtn");
 let navProjectsBtn = document.getElementById("navProjectsBtn");

 let btn_list = [];
    btn_list.push(navHomeBtn, navAboutBtn, navSkillsBtn, navProjectsBtn);

 navHomeBtn.addEventListener("click", () => ScrollToSection(homeSection));
 navAboutBtn.addEventListener("click", () => ScrollToSection(aboutSection));
 navSkillsBtn.addEventListener("click", () => ScrollToSection(skillsSection));
 navProjectsBtn.addEventListener("click", () => ScrollToSection(projectsSection));

 function ScrollToSection(sectionName){
    sectionName.scrollIntoView({ 
        behavior: 'smooth'
    });
 }

let bottomLoadingTextTop = document.getElementById("btm_loading_txt_top");
let bottomLoadingTextBottom = document.getElementById("btm_loading_txt_bot");

let circleTypeTop = new CircleType(bottomLoadingTextTop);
let circleTypeBot = new CircleType(bottomLoadingTextBottom);
circleTypeTop.radius(125);
circleTypeBot.radius(125).dir(-1);

const loader = document.querySelector(".loader");
window.onload = function(){
  setTimeout(function(){
    loader.style.opacity = "0";
    loader.style.pointerEvents = "none";
    btn_list.forEach((btn, i) => {
      setTimeout(() => {
        btn.style.transform = "translateX(0px)";
      }, i * 100);
    });
    setTimeout(function(){
      loader.style.display = "none";
    }, 1700);
  },1800);
}