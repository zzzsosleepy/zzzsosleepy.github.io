// INITIATE ANIMATE ON SCROLL
AOS.init({
    duration: 1200,
    disable: 'mobile',
})

// Get references to the buttons & sections
const homeBtns = document.querySelectorAll(".home-btn");
const aboutBtns = document.querySelectorAll(".about-btn");
const featuresBtns = document.querySelectorAll(".features-btn");
const contactBtns = document.querySelectorAll(".contact-btn");
const logoBtn = document.getElementById("logo");

const homeSection = document.getElementById("home");
const aboutSection = document.getElementById("about");
const featuresSection = document.getElementById("features");
const contactSection = document.getElementById("contact");

// Burger button
const burger = document.getElementById("burger-btn");
const burgerList = document.querySelector(".burger-menu");
const burgerCloseBtn = document.querySelector("#burger-close");
const burgerLinks = document.querySelectorAll(".burger-link");

// Add click event listener to the burger button
burger.addEventListener("click", () => {
    toggleBurgerMenu();
});

// Add click event listener to the burger close button
burgerCloseBtn.addEventListener("click", () => {
    toggleBurgerMenu();
});

// Close the burger menu when a link is clicked
burgerLinks.forEach(link => {
    link.addEventListener("click", () => {
        toggleBurgerMenu();
    });
});

// Function to toggle the burger menu
function toggleBurgerMenu() {
    burgerList.classList.toggle("active");
}

// Add click event listeners to the buttons
logoBtn.addEventListener("click", () => {
    scrollToSection(homeSection);
});

// Helper function to add event listeners to a list of buttons
function addClickListener(buttons, section) {
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            scrollToSection(section);
        });
    });
}

// Add click event listeners to the buttons
addClickListener(homeBtns, homeSection);
addClickListener(aboutBtns, aboutSection);
addClickListener(featuresBtns, featuresSection);
addClickListener(contactBtns, contactSection);

// Function to scroll to a section
function scrollToSection(section) {
    console.log("scrolling to section: ", section);
    section.scrollIntoView({ behavior: "smooth" });
}


