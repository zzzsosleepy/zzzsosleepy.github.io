var req = new XMLHttpRequest();
var url = 'https://nutrition-api.esha.com/foods?query=';

var searchBox = document.getElementById('searchBox');
var searchBtn = document.getElementById('searchBtn');

searchBtn.addEventListener("click", SearchFood)

function SearchFood(){
    const searchParam = searchBox.value;
    if (searchParam == ""){
        return;
    };
    var newurl = url + searchParam;
    req.open('GET', newurl, false);
    req.setRequestHeader('Accept', "application/json");
    req.setRequestHeader("Ocp-Apim-Subscription-Key","7c422abe4d30476e9462ed842948b421")
    req.send(null);
    console.log(req.responseText);
}



