var req = new XMLHttpRequest();
var url = '/nutrition-api/foods?query=';

var searchBox = document.getElementById('searchBox');
var searchBtn = document.getElementById('searchBtn');

var resultsDiv = document.getElementById('results');

searchBtn.addEventListener("click", function () {
    const searchParam = searchBox.value;
    if (searchParam == "") {
        return;
    };
    var newurl = url + searchParam;
    req.open('GET', newurl, false);
    req.setRequestHeader('Accept', "application/json");
    req.setRequestHeader("Ocp-Apim-Subscription-Key", "7c422abe4d30476e9462ed842948b421")
    req.onload = function() {
        var myData = JSON.parse(req.responseText);
        LogData(myData.items);
    };
    req.send();
});

function LogData(data){
    var htmlString = "";
    console.log(data.length);
    for(var i = 0; i < data.length; i++){
        if ('characteristics' in data[i]){
            if (data[i].characteristics.includes("Dairy Free")) {
                htmlString += "<p>" + data[i].product + " - " + data[i].description + " - DAIRY FREE ✔️ </p>";
            } else {
                htmlString += "<p>" + data[i].product + " - " + data[i].description + " - CONTAINS DAIRY ❌ </p>";
            }
        } else {
            console.log("No characteristics for " + data[i]);
            console.log("---");
        }
    }
    if (htmlString != ""){
        resultsDiv.insertAdjacentHTML('beforeend', htmlString)
    }
}



