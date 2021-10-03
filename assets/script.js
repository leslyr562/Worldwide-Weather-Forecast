// fetch ("https://api.openweathermap.org/data/2.5/forecast?q=austin&appid=0b511ddd7a9e1f781148f73c4e808cf6")
// .then(response => response.json())
// .then(data => console.log(data))

//temp= .list.[0].main[5]
//wind=.list.wind.speed
//humidity=.list[0].main.[3]
//uv index=

function myFunction() {
    var searchCity = document.getElementById('searchCity').value;


fetch ('https://api.openweathermap.org/data/2.5/forecast?q=' + 
searchCity + "&appid=0b511ddd7a9e1f781148f73c4e808cf6")


.then(response => response.json())
.then(data => console.log(data))

var cityDisplay = document.querySelector('#cityName')
cityDisplay.textContent = searchCity;


}