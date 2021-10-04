// fetch ("https://api.openweathermap.org/data/2.5/forecast?q=austin&appid=0b511ddd7a9e1f781148f73c4e808cf6")
// .then(response => response.json())
// .then(data => console.log(data))

//temp= .list.[0].main[5]
//wind=.list.wind.speed
//humidity=.list[0].main.[3]
//uv index=

function myFunction() {
    var searchCity = document.getElementById('searchCity').value;


    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' +
        searchCity + "&appid=0b511ddd7a9e1f781148f73c4e808cf6")
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data.list[0].wind.speed)
            var cityDisplay = document.querySelector('#cityName')
            cityDisplay.textContent = searchCity;

            var todayWeather = data.list[0]
        

            var currentWeather = document.getElementById('details')
            var listEl = document.createElement('li')
            listEl.textContent = "Temp: " + todayWeather.main.temp
            currentWeather.appendChild(listEl)

            var listEl2 = document.createElement('li')
            listEl2.textContent = "Wind " + todayWeather.wind.speed + " MPH";
            currentWeather.appendChild(listEl2);

            var listEl3 = document.createElement('li')
            listEl3.textContent = "Humidity: " + todayWeather.main.humidity + " %"
            currentWeather.appendChild(listEl3);
            
            
        

    })

    
    





    // //list//


    // .list[0].main.humidity


}