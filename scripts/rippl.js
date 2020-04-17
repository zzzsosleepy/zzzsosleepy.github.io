let inputText = document.getElementById("inputText").placeholder;

let randomSearches = [
  "Landscape",
  "Forest",
  "Cooking",
  "Space",
  "Cute",
  "Giraffes",
];
setInterval(ChangeSearchText, 10000);

function ChangeSearchText() {
  let randNum = 0;
  inputText = randomSearches[0];
}
