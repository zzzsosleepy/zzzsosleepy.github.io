let toTopBtn = document.getElementById("toTopBtn");
let y = window.scrollY;

let sectionOne = document.getElementById("sectionOne");
let sectionTwo = document.getElementById("sectionTwo");
let sectionThree = document.getElementById("sectionThree");
let sectionFour = document.getElementById("sectionFour");

let homeBtn = document.getElementById("homeBtn");
let aboutBtn = document.getElementById("aboutBtn");
let skillsBtn = document.getElementById("skillsBtn");
let projectsBtn = document.getElementById("projectsBtn");

let rippleBox = document.getElementById("rippleBox");

homeBtn.addEventListener("click", function () {
  sectionOne.scrollIntoView({
    behavior: "smooth",
  });
});

toTopBtn.addEventListener("click", function () {
  sectionOne.scrollIntoView({
    behavior: "smooth",
  });
});

aboutBtn.addEventListener("click", function () {
  sectionTwo.scrollIntoView({
    behavior: "smooth",
  });
});

skillsBtn.addEventListener("click", function () {
  sectionThree.scrollIntoView({
    behavior: "smooth",
  });
});

projectsBtn.addEventListener("click", function () {
  sectionFour.scrollIntoView({
    behavior: "smooth",
  });
});

rippleBox.addEventListener("click", function () {
  document.location = "www.jeffreychipman.com/rippl";
});

const scrollFunc = () => {
  // Get the current scroll value
  let y = window.scrollY;

  // If the scroll value is greater than the window height, let's add a class to the scroll-to-top button to show it!
  if (y > 700) {
    toTopBtn.className = "backToTop show";
  } else {
    toTopBtn.className = "backToTop hide";
  }
};

window.addEventListener("scroll", scrollFunc);

console.log(y);
