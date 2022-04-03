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

// Crafting

let dailyItems = document.getElementsByClassName("dailyItem");
let weeklyItems = document.getElementsByClassName("weeklyItem");
let guns = document.getElementsByClassName("gun");


let apiKey = "yQIQPeqeq9RnbCh7s507";

// let url = "https://api.mozambiquehe.re/maprotation?auth=" + apiKey;

// UPGRADED TO VERSION 5 OF THE API
// MAP API
let mapUrl = "https://api.mozambiquehe.re/maprotation?version=5&auth=" + apiKey;

// CRAFTING API
let craftUrl = "https://api.mozambiquehe.re/crafting?version=5&auth=" + apiKey;

let hourBR = 0;
let minsBR = 0;
let secBR = 0;

let hourArenas = 0;
let minsArenas = 0;
let secArenas = 0;

let dailyItem1_name = document.getElementById("dailyItem1_name");
let dailyItem1_img = document.getElementById("dailyItem1_img");
let dailyItem1_cost = document.getElementById("dailyItem1_cost");

let dailyItem2_name = document.getElementById("dailyItem2_name");
let dailyItem2_img = document.getElementById("dailyItem2_img");
let dailyItem2_cost = document.getElementById("dailyItem2_cost");

let gun1_img = document.getElementById("gun1_img");
let gun2_img = document.getElementById("gun2_img");
let gun1_cost = document.getElementById("gun1_cost");
let gun2_cost = document.getElementById("gun2_cost");


let receivedData;

//SET UP AND DISPLAY LOADING SCREEN 
const loader = document.querySelector(".loader");
window.onload = function () {
    setTimeout(function () {
        loader.style.opacity = "0";
        loader.style.pointerEvents = "none";
        setTimeout(function () {
            loader.style.display = "none";
        }, 1700);
    }, 1800);
}

function pcd() {
    var darkmode = document.body;
    darkmode.classList.toggle('dark')
}

//Instantly get our map info from the api
GetMapInfo();
GetCraftingInfo();

//Fetch JSON data from the API, and call functions to update the HTML when the data is received
function GetCraftingInfo() {
    fetch(craftUrl)
        .then((response) => response.json())
        .then((data) => {
            receivedData = data;
        })
        .then(() => {
            try {
                PopulateCrafting();
            }
            catch (err) {
                console.error(err.message);
            }
        })
        .catch((err) => { console.log(err); })
}

function PopulateCrafting() {
    console.log("Crafting Stuff");
    // Daily Items

    // Item 1
    let img1_daily = receivedData[0].bundleContent[0].itemType.asset;
    let cost1_daily = receivedData[0].bundleContent[0].cost;
    let rarity1_daily = receivedData[0].bundleContent[0].itemType.rarityHex;

    // Item 2
    let img2_daily = receivedData[0].bundleContent[1].itemType.asset;
    let cost2_daily = receivedData[0].bundleContent[1].cost;
    let rarity2_daily = receivedData[0].bundleContent[1].itemType.rarityHex;

    // Weekly Items

    // Item 1
    let img1_weekly = receivedData[1].bundleContent[0].itemType.asset;
    let cost1_weekly = receivedData[1].bundleContent[0].cost;
    let rarity1_weekly = receivedData[1].bundleContent[0].itemType.rarityHex;
    console.log("Set weekly Item 1");

    // Item 2
    let img2_weekly = receivedData[1].bundleContent[1].itemType.asset;
    let cost2_weekly = receivedData[1].bundleContent[1].cost;
    let rarity2_weekly = receivedData[1].bundleContent[1].itemType.rarityHex;
    console.log("Set weekly Item 2");

    // Item 3
    let img3_weekly = receivedData[4].bundleContent[0].itemType.asset;
    let cost3_weekly = receivedData[4].bundleContent[0].cost;
    let rarity3_weekly = receivedData[4].bundleContent[0].itemType.rarityHex;
    console.log("Set weekly Item 3");

    // Item 4
    let img4_weekly = receivedData[5].bundleContent[0].itemType.asset;
    let cost4_weekly = receivedData[5].bundleContent[0].cost;
    let rarity4_weekly = receivedData[5].bundleContent[0].itemType.rarityHex;
    console.log("Set weekly Item 4");

    // Guns

    // Gun 1
    let img1_gun = receivedData[2].bundleContent[0].itemType.asset;
    let cost1_gun = receivedData[2].bundleContent[0].cost;
    let rarity1_gun = receivedData[2].bundleContent[0].itemType.rarityHex;
    console.log("Set gun 1");

    // Gun 2
    let img2_gun = receivedData[3].bundleContent[0].itemType.asset;
    let cost2_gun = receivedData[3].bundleContent[0].cost;
    let rarity2_gun = receivedData[3].bundleContent[0].itemType.rarityHex;
    console.log("Set gun 2");

    SetDailyItems(img1_daily, cost1_daily, rarity1_daily, img2_daily, cost2_daily, rarity2_daily);
    SetWeeklyItems(img1_weekly, cost1_weekly, rarity1_weekly, img2_weekly, cost2_weekly, rarity2_weekly, img3_weekly, cost3_weekly, rarity3_weekly, img4_weekly, cost4_weekly, rarity4_weekly);
    SetGuns(img1_gun, cost1_gun, rarity1_gun, img2_gun, cost2_gun, rarity2_gun);
    // startDate, endDate
    // bundleContent [ { cost, itemType { name, rarity, asset, rarityHex } } ]
    // TWO DAILY ITEMS, TWO WEEKLY WEAPONS, FOUR WEEKLY ITEMS
}

//Fetch JSON data from the API, and call functions to update the HTML when the data is received
function GetMapInfo() {
    fetch(mapUrl)
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

// Populate the BR column with the current map name and the next map name and the time left until the next map
function PopulateColumnBR(currentMap, next, timeLeft, main, footer) {
    SetCurrentMap(currentMap, receivedData.battle_royale.current.map);
    SetNextMap(next, receivedData.battle_royale.next.map);
    SetTimeLeftBR(timeLeft, receivedData.battle_royale.current.remainingTimer);
    SetImagesBR(main, footer, receivedData.battle_royale.current.map, receivedData.battle_royale.next.map);
}

// Populate the Ranked column with the current map name
function PopulateColumnRanked(currentMap, main) {
    SetCurrentMap(currentMap, receivedData.ranked.current.map);
    SetImagesRanked(main, receivedData.ranked.current.map);
}

// Populate the Arean column with the current map name and the next map name and the time left until the next map
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

function SetDailyItems(image1, cost1, rarity1, image2, cost2, rarity2) {
    dailyItem1_img.src = image1;
    dailyItem1_cost.innerText = cost1;
    dailyItem2_img.src = image2;
    dailyItem2_cost.innerText = cost2;
    dailyItems[0].style.borderColor = rarity1;
    console.log(rarity1);
    dailyItems[1].style.borderColor = rarity2;
}

function SetWeeklyItems(image1, cost1, rarity1, image2, cost2, rarity2, image3, cost3, rarity3, image4, cost4, rarity4) {
    weeklyItem1_img.src = image1;
    weeklyItem1_cost.innerText = cost1;
    weeklyItem2_img.src = image2;
    weeklyItem2_cost.innerText = cost2;
    weeklyItem3_img.src = image3;
    weeklyItem3_cost.innerText = cost3;
    weeklyItem4_img.src = image4;
    weeklyItem4_cost.innerText = cost4;
    weeklyItems[0].style.borderColor = rarity1;
    weeklyItems[1].style.borderColor = rarity2;
    weeklyItems[2].style.borderColor = rarity3;
    weeklyItems[3].style.borderColor = rarity4;
}

function SetGuns(image1, cost1, rarity1, image2, cost2, rarity2) {
    gun1_img.src = image1;
    gun1_cost.innerText = cost1;
    gun2_img.src = image2;
    gun2_cost.innerText = cost2;
    guns[0].style.borderColor = rarity1;
    guns[1].style.borderColor = rarity2;
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