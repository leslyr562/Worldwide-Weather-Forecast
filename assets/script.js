// fetch ("https://api.openweathermap.org/data/2.5/forecast?q=austin&appid=0b511ddd7a9e1f781148f73c4e808cf6")
// .then(response => response.json())
// .then(data => console.log(data))

//temp= .list.[0].main[5]
//wind=.list.wind.speed
//humidity=.list[0].main.[3]
//uv index=

function myFunction() {
    console.log("myFunction")
    var searchCity = document.getElementById('searchCity').value;


    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' +
        searchCity + "&appid=0b511ddd7a9e1f781148f73c4e808cf6")
    .then(response => {
        console.log("res", response)
        return response.json()
    })
    .then(data => {
        console.log(data)
    })
    console.log("here")
        var cityDisplay = document.querySelector('#cityName')
        cityDisplay.textContent = searchCity;
        console.log(cityDisplay)





    // //list//
    // var currentWeather = document.getElementById('details')
    // var listEl = document.createElement('li')
    // listEl.textContent= "Humidity: " + listContent;

    // .list[0].main.humidity


}