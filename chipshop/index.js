//Assign each section to a variable
let homeSection = document.getElementById("home");
let aboutSection = document.getElementById("about");
let contactSection = document.getElementById("contact");

//Assign each nav link to a variable
let navHome = document.getElementById('nav-link-home');
let navAbout = document.getElementById('nav-link-about');
let navContact = document.getElementById('nav-link-contact');

//Store all section variables in an array
let sections = [homeSection, aboutSection, contactSection];
let navLinks = [navHome, navAbout, navContact];

//Hide all divs but the home div
$(document).ready(function(){
    SwapToDiv('home');
    $(".fancybox").fancybox();
    // AJAX
    $("form").submit(function (event) {
        var formData = {
          name: $("#inputName").val(),
          email: $("#inputEmail").val(),
          message: $("#inputMessage").val(),
        };
    
        $.ajax({
          type: "POST",
          url: "process.php",
          data: formData,
          dataType: "json",
          encode: true,
        }).done(function (data) {
          console.log(data);
        });
    
        event.preventDefault();
      });
});

//Swaps to a selected div and hides all others
function SwapToDiv(nextDiv){
    for(let i = 0; i < sections.length; i++){
        if (sections[i] == document.getElementById(nextDiv)){
            sections[i].style.display = "block";
            navLinks[i].classList.add("active");
        } else {
            sections[i].style.display = "none";
            navLinks[i].classList.remove("active");
        }
    }
}