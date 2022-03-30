// yQIQPeqeq9RnbCh7s507
// https://apexlegendsapi.com/
// https://api.mozambiquehe.re/maprotation?auth=YOURAPIKEY

//Declare variables
// Unranked - Battle Royale
let currentMap_BR = document.getElementById("currentMap_BR");
let nextMap_BR = document.getElementById("nextMap_BR");
let timeLeft_BR = document.getElementById("timeLeft_BR");
let main_BR = document.getElementById("main_BR");
let footer_BR = document.getElementById("footer_BR");

// Ranked
let currentMap_Ranked = document.getElementById("currentMap_Ranked");
let main_Ranked = document.getElementById("main_Ranked");

// Arenas
let currentMap_Arenas = document.getElementById("currentMap_Arenas");
let nextMap_Arenas = document.getElementById("nextMap_Arenas");
let timeLeft_Arenas = document.getElementById("timeLeft_Arenas");
let main_Arenas = document.getElementById("main_Arenas");
let footer_Arenas = document.getElementById("footer_Arenas");


let apiKey = "yQIQPeqeq9RnbCh7s507";

// let url = "https://api.mozambiquehe.re/maprotation?auth=" + apiKey;
let url = "https://api.mozambiquehe.re/maprotation?version=2&auth=" + apiKey;

let hourBR = 0;
let minsBR = 0;
let secBR = 0;

let hourArenas = 0;
let minsArenas = 0;
let secArenas = 0;

let receivedData;

//Instantly get our map info from the api
GetMapInfo();

//Fetch JSON data from the API, and call functions to update the HTML when the data is received
function GetMapInfo() {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            receivedData = data;
        })
        .then(() => {
            try {
                PopulateColumnBR(currentMap_BR, nextMap_BR, timeLeft_BR, main_BR, footer_BR);
                PopulateColumnRanked(currentMap_Ranked, main_Ranked);
                PopulateColumnArenas(currentMap_Arenas, nextMap_Arenas, timeLeft_Arenas, main_Arenas, footer_Arenas);
            }
            catch (err) {
                console.error(err.message);
            }
        })
        .catch((err) => { console.log(err); })
}

function PopulateColumnBR(currentMap, next, timeLeft, main, footer) {
    SetCurrentMap(currentMap, receivedData.battle_royale.current.map);
    SetNextMap(next, receivedData.battle_royale.next.map);
    SetTimeLeftBR(timeLeft, receivedData.battle_royale.current.remainingTimer);
    SetImagesBR(main, footer, receivedData.battle_royale.current.map, receivedData.battle_royale.next.map);
}

function PopulateColumnRanked(currentMap, main) {
    SetCurrentMap(currentMap, receivedData.ranked.current.map);
    SetImagesRanked(main, receivedData.ranked.current.map);
}

function PopulateColumnArenas(currentMap, next, timeLeft, main, footer) {
    SetCurrentMap(currentMap, receivedData.arenas.current.map);
    SetNextMap(next, receivedData.arenas.next.map);
    SetTimeLeftArenas(timeLeft, receivedData.arenas.current.remainingTimer);
    SetImagesArenas(main, footer, receivedData.arenas.current.map, receivedData.arenas.next.map);
}

//Set the background images according the current and next maps
function SetImagesBR(main, footer, current, next) {
    // console.log(current);
    switch (current) {
        case "Kings Canyon":
            main.style.backgroundImage = "url(apeximg/kc.png)";
            break;
        case "World's Edge":
            main.style.backgroundImage = "url(apeximg/we.png)";
            break;
        case "Olympus":
            main.style.backgroundImage = "url(apeximg/ol.png)";
            break;
        case "Storm Point":
            main.style.backgroundImage = "url(apeximg/sp.png)";
    }
    switch (next) {
        case "Kings Canyon":
            footer.style.backgroundImage = "url(apeximg/kc.png)";
            break;
        case "World's Edge":
            footer.style.backgroundImage = "url(apeximg/we.png)";
            break;
        case "Olympus":
            footer.style.backgroundImage = "url(apeximg/ol.png)";
            break;
        case "Storm Point":
            footer.style.backgroundImage = "url(apeximg/sp.png)";
            break;
    }
}
function SetImagesRanked(main, current) {
    switch (current) {
        case "Kings Canyon":
            main.style.backgroundImage = "url(apeximg/kc.png)";
            break;
        case "World's Edge":
            main.style.backgroundImage = "url(apeximg/we.png)";
            break;
        case "Olympus":
            main.style.backgroundImage = "url(apeximg/ol.png)";
            break;
        case "Storm Point":
            main.style.backgroundImage = "url(apeximg/sp.png)";
    }
}
function SetImagesArenas(main, footer, current, next) {
    // console.log("Arenas Map: " + current);
    // console.log("Arenas Next Map: " + next);
    switch (current) {
        case "Habitat":
            main.style.backgroundImage = "url(apeximg/hab.png)";
            break;
        case "Encore":
            main.style.backgroundImage = "url(apeximg/enc.png)";
            break;
        case "Overflow":
            main.style.backgroundImage = "url(apeximg/ovr.png)";
            break;
        case "Phase runner":
            main.style.backgroundImage = "url(apeximg/phs.png)";
            break;
        case "Drop Off":
            main.style.backgroundImage = "url(apeximg/drop.png)";
            break;
    }
    switch (next) {
        case "Habitat":
            footer.style.backgroundImage = "url(apeximg/hab.png)";
            break;
        case "Encore":
            footer.style.backgroundImage = "url(apeximg/enc.png)";
            break;
        case "Overflow":
            footer.style.backgroundImage = "url(apeximg/ovr.png)";
            break;
        case "Phase runner":
            footer.style.backgroundImage = "url(apeximg/phs.png)";
            break;
        case "Drop Off":
            footer.style.backgroundImage = "url(apeximg/drop.png)";
            break;
    }
}

//Set current map name
function SetCurrentMap(mapColumn, current) {
    mapColumn.innerText = current;
}

//Set next map name
function SetNextMap(mapColumn, next) {
    mapColumn.innerText = next;
}

//Set the time left counter
function SetTimeLeftBR(timeLeft, time) {
    hourBR = time.slice(0, 2);
    minsBR = time.slice(3, 5);
    secsBR = time.slice(6, 8);
    secBR = parseInt(secsBR);
    timeLeft.innerText = hourBR + ":" + minsBR + ":" + secBR;
}

//Subtract one second from the counter
function SubtractSecondsBR() {
    if (secBR - 1 <= -1) {
        secBR = 60;
        minsBR -= 1;
    }
    secBR -= 1;
    timeLeft_BR.innerText = hourBR + ":" + minsBR + ":" + secBR;
}

//Set the time left counter
function SetTimeLeftArenas(timeLeft, time) {
    hourArenas = time.slice(0, 2);
    minsArenas = time.slice(3, 5);
    secsArenas = time.slice(6, 8);
    secArenas = parseInt(secsArenas);
    timeLeft.innerText = hourArenas + ":" + minsArenas + ":" + secArenas;
}

//Subtract one second from the counter
function SubtractSecondsArenas() {
    if (secArenas - 1 <= -1) {
        secArenas = 60;
        minsArenas -= 1;
    }
    secArenas -= 1;
    timeLeft_Arenas.innerText = hourArenas + ":" + minsArenas + ":" + secArenas;
}

//Subtract from the timer every second
setInterval(SubtractSecondsBR, 1000);

//Subtract from the timer every second
setInterval(SubtractSecondsArenas, 1000);

//Fetch JSON data from the API every 6 seconds
setInterval(GetMapInfo, 6000);