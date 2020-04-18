let inputText = document.getElementById("inputText");
let selectedIndex;
let randomSearches = [
  "Landscape",
  "Forest",
  "Cooking",
  "Space",
  "Cute",
  "Giraffes",
];
setInterval(ChangeSearchText, 2000);

function ChangeSearchText() {
  let randNum = Math.floor(Math.random() * Math.floor(randomSearches.length));
  if (randNum != selectedIndex) {
    selectedIndex = randNum;
    $("#inputText").attr("placeholder", randomSearches[randNum]);
    console.log("hi " + randomSearches[randNum]);
  } else {
    ChangeSearchText();
  }
}
