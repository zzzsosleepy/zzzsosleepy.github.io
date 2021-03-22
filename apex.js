// yQIQPeqeq9RnbCh7s507
// https://api.mozambiquehe.re/maprotation?auth=YOURAPIKEY
let currentMap = document.getElementById("currentMap");
let nextMap = document.getElementById("nextMap");
let timeLeft = document.getElementById("timeLeft");

let main = document.getElementById("main");
let footer = document.getElementById("footer");

let apiKey = "yQIQPeqeq9RnbCh7s507";

let url = "https://api.mozambiquehe.re/maprotation?auth=" + apiKey;

let hour = 0;
let min = 0;
let sec = 0;

GetMapInfo();

function GetMapInfo(){
    // Replace ./data.json with your JSON feed
    fetch(url)
    .then((response) => {
    return response.json()
    })
    .then((data) => {
    // Work with JSON data here
    console.log(data)
    console.log(data.current.map);
    SetCurrentMap(data.current.map);
    SetNextMap(data.next.map);
    SetTimeLeft(data.current.remainingTimer);
    SetImages(data.current.map, data.next.map);
    })
    .catch((err) => {
    // Do something for an error here
    })
}

function SetImages(current, next){
    switch(current){
        case "Kings Canyon":
            main.style.backgroundImage = "url(apeximg/kc.png)";
            break;
        case "Worlds Edge":
            main.style.backgroundImage = "url(apeximg/we.png)";
            break;
        case "Olympus":
            main.style.backgroundImage = "url(apeximg/ol.png)";
            break;
    }
    switch(next){
        case "Kings Canyon":
            footer.style.backgroundImage = "url(apeximg/kc.png)";
            break;
        case "Worlds Edge":
            footer.style.backgroundImage = "url(apeximg/we.png)";
            break;
        case "Olympus":
            footer.style.backgroundImage = "url(apeximg/ol.png)";
            break;
    }
}

function SetCurrentMap(current){
    currentMap.innerText = current;
}
function SetNextMap(next){
    nextMap.innerText = next;
}
function SetTimeLeft(time){
    hour = time.slice(0,2);
    mins = time.slice(3,5);
    secs = time.slice(6,8);
    sec = parseInt(secs);
    timeLeft.innerText = hour + ":" + mins + ":" + sec;
}

function SubtractSeconds(){
    if (sec - 1 <= -1){
        sec = 60;
        mins -= 1;
    }
    sec -= 1;
    timeLeft.innerText = hour + ":" + mins + ":" + sec;
}
setInterval(SubtractSeconds, 1000);
setInterval(GetMapInfo, 6000);