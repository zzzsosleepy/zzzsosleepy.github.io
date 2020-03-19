let scrollArrow = document.getElementById("arrow");
let whoArrow = document.getElementById("whoarrow");
let skillsArrow = document.getElementById("skillsarrow");
let secondContent = document.getElementById("secondContent");
let thirdContent = document.getElementById("thirdContent");
let fourthContent = document.getElementById("fourthContent");
let skillsBtn = document.getElementById("skillsBtn");
let aboutmeBtn = document.getElementById("aboutmeBtn");
let projectsBtn = document.getElementById("projectsBtn");

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
