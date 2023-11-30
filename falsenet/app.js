// INITIATE ANIMATE ON SCROLL
AOS.init({
    duration: 1200,
    disable: 'mobile',
})

// Get references to the buttons and sections
const homeBtn = document.getElementById("home-btn");
const aboutBtn = document.getElementById("about-btn");
const featuresBtn = document.getElementById("features-btn");
const contactBtn = document.getElementById("contact-btn");
const logoBtn = document.getElementById("logo");

const homeSection = document.getElementById("home");
const aboutSection = document.getElementById("about");
const featuresSection = document.getElementById("features");
const contactSection = document.getElementById("contact");

// Add click event listeners to the buttons
logoBtn.addEventListener("click", () => {
    scrollToSection(homeSection);
});

homeBtn.addEventListener("click", () => {
    scrollToSection(homeSection);
});

aboutBtn.addEventListener("click", () => {
    scrollToSection(aboutSection);
});

featuresBtn.addEventListener("click", () => {
    scrollToSection(featuresSection);
});

contactBtn.addEventListener("click", () => {
    scrollToSection(contactSection);
});

// Function to scroll to a section
function scrollToSection(section) {
    console.log("scrolling to section: ", section);
    section.scrollIntoView({ behavior: "smooth" });
}


