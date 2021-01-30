var req = new XMLHttpRequest();
var url = '/nutrition-api/foods?query=';

var searchBox = document.getElementById('searchBox');
var searchBtn = document.getElementById('searchBtn');
var resultsDiv = document.getElementById('results');


searchBtn.addEventListener("click", function () {
    const searchParam = searchBox.value;
    if (searchParam == "") {
        resultsDiv.innerHTML = "";
        return;
    };
    var newurl = url + searchParam + "&start=0&count=100";
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
    resultsDiv.innerHTML = "";
    var htmlString = "";
    var colorType = "";
    console.log(data.length);
    for(var i = 0; i < data.length; i++){
        if ('characteristics' in data[i]){
            if (data[i].characteristics.includes("Dairy Free")) {
                colorType = "greenListItem";
                //<div class="listItem"><p>This is a test</p></div>
                htmlString += "<div class='listItem " + colorType + "'><p>" + data[i].product + " - " + data[i].description + "<br />DAIRY FREE " + "<i class='checkmark fas fa-check-square'></i></p></div>";
            } else {
                colorType = "redListItem";
                htmlString += "<div class='listItem " + colorType + "'><p>" + data[i].product + " - " + data[i].description + "<br />CONTAINS DAIRY " + "<i class='cancel fas fa-times-circle'></i> </p></div>";
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

