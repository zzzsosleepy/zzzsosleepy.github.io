let scrollArrow = document.getElementById("arrow");
let secondContent = document.getElementById("secondContent");
let skillsBtn = document.getElementById("skillsBtn");

scrollArrow.addEventListener("click", function() {
  secondContent.scrollIntoView();
});

skillsBtn.addEventListener("click", function() {
  secondContent.scrollIntoView();
});
