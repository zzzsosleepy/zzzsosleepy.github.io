let scrollArrow = document.getElementById("arrow");
let whoArrow = document.getElementById("whoarrow");
let skillsArrow = document.getElementById("skillsarrow");
let secondContent = document.getElementById("secondContent");
let thirdContent = document.getElementById("thirdContent");
let fourthContent = document.getElementById("fourthContent");
let skillsBtn = document.getElementById("skillsBtn");
let aboutmeBtn = document.getElementById("aboutmeBtn");
let projectsBtn = document.getElementById("projectsBtn");

let instaBtn = document.getElementById("instagramBtn");
let githubBtn = document.getElementById("githubBtn");
let linkedBtn = document.getElementById("linkedBtn");

let demoCTABtn = document.getElementById("demoCTABtn");

scrollArrow.addEventListener("click", function() {
  secondContent.scrollIntoView();
});

aboutmeBtn.addEventListener("click", function() {
  secondContent.scrollIntoView();
});

skillsBtn.addEventListener("click", function() {
  thirdContent.scrollIntoView();
});

projectsBtn.addEventListener("click", function() {
  fourthContent.scrollIntoView();
});

whoArrow.addEventListener("click", function() {
  thirdContent.scrollIntoView();
});
skillsArrow.addEventListener("click", function() {
  fourthContent.scrollIntoView();
});

githubBtn.addEventListener("click", function() {
  window.open("https://github.com/zzzsosleepy");
});

instaBtn.addEventListener("click", function() {
  window.open("https://www.instagram.com/zzzjeffrey/");
});

linkedBtn.addEventListener("click", function() {
  window.open("https://www.linkedin.com/in/jeffrey-chipman-1a4289172/");
});

demoCTABtn.addEventListener("click", function() {});
var a = ["dog", "cat"];
a[100] = "fox";
console.log("a");
