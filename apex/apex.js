// yQIQPeqeq9RnbCh7s507
// https://apexlegendsapi.com/
// https://api.mozambiquehe.re/maprotation?auth=YOURAPIKEY

//Declare variables
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

//Instantly get our map info from the api
GetMapInfo();

//Fetch JSON data from the API, and call functions to update the HTML when the data is received
function GetMapInfo(){
    fetch(url)
    .then((response) =>  response.json())
    .then((data) => {
        console.log(data)
        console.log(data.current.map);
        SetCurrentMap(data.current.map);
        SetNextMap(data.next.map);
        SetTimeLeft(data.current.remainingTimer);
        SetImages(data.current.map, data.next.map);
    })
    .catch((err) => { console.log(err); })
}

//Set the background images according the current and next maps
function SetImages(current, next){
    switch(current){
        case "Kings Canyon":
            main.style.backgroundImage = "url(apeximg/kc.png)";
            break;
        case "World's Edge":
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
        case "World's Edge":
            footer.style.backgroundImage = "url(apeximg/we.png)";
            break;
        case "Olympus":
            footer.style.backgroundImage = "url(apeximg/ol.png)";
            break;
    }
}

//Set current map name
function SetCurrentMap(current){
    currentMap.innerText = current;
}

//Set next map name
function SetNextMap(next){
    nextMap.innerText = next;
}

//Set the time left counter
function SetTimeLeft(time){
    hour = time.slice(0,2);
    mins = time.slice(3,5);
    secs = time.slice(6,8);
    sec = parseInt(secs);
    timeLeft.innerText = hour + ":" + mins + ":" + sec;
}

//Subtract one second from the counter
function SubtractSeconds(){
    if (sec - 1 <= -1){
        sec = 60;
        mins -= 1;
    }
    sec -= 1;
    timeLeft.innerText = hour + ":" + mins + ":" + sec;
}

//Subtract from the timer every second
setInterval(SubtractSeconds, 1000);

//Fetch JSON data from the API every 6 seconds
setInterval(GetMapInfo, 6000);