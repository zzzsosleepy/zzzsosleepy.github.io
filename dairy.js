var req = new XMLHttpRequest();
var url = '/nutrition-api/foods?query=';

var searchBox = document.getElementById('searchBox');
var searchBtn = document.getElementById('searchBtn');

let resultsDiv = document.getElementById('results');

searchBtn.addEventListener("click", SearchFood)

function SearchFood() {
    const searchParam = searchBox.value;
    if (searchParam == "") {
        return;
    };
    var newurl = url + searchParam;
    req.open('GET', newurl);
    req.setRequestHeader('Accept', "application/json");
    req.setRequestHeader("Ocp-Apim-Subscription-Key", "7c422abe4d30476e9462ed842948b421")
    req.onload = function() {
        var myData = JSON.parse(req.responseText);
        LogData(myData.items);
    };
    req.send();
}

function LogData(data){
    var htmlString = "";
    for(var i = 0; i < data.length; i++){
        if ('characteristics' in data[i]){
            if (data[i].characteristics.includes("Dairy Free")) {
                htmlString += "<p>" + data[i].product + " - " + data[i].description + " is dairy free! </p>";
                resultsDiv.insertAdjacentHTML('beforeend', htmlString)
            } else {
                htmlString += "<p>" + data[i].product + " - " + data[i].description + " is NOT dairy free! </p>";
            }
        } else {
            console.log("No characteristics for " + data[i]);
            console.log("---");
        }
    }
}



