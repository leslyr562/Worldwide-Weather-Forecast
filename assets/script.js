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
            console.log(data.list)
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

            //card group//
            ///one///
            var card1 = document.getElementById('detail1')
            var listEl = document.createElement('li')
            listEl.textContent = "Temp: " + todayWeather.main.temp
            card1.appendChild(listEl)

            var listEl2 = document.createElement('li')
            listEl2.textContent = "Wind " + todayWeather.wind.speed + " MPH";
            card1.appendChild(listEl2);

            var listEl3 = document.createElement('li')
            listEl3.textContent = "Humidity: " + todayWeather.main.humidity + " %"
            card1.appendChild(listEl3);

            //two//
            var day2 = data.list[7]
            var card2 = document.getElementById('detail2')
            var cardEl = document.createElement('li')
            cardEl.textContent = "Temp: " + day2.main.temp
            card2.appendChild(cardEl)

            var cardEl2 = document.createElement('li')
            cardEl2.textContent = "Wind " + day2.wind.speed + " MPH";
            card2.appendChild(cardEl2);

            var cardEl3 = document.createElement('li')
            cardEl3.textContent = "Humidity: " + day2.main.humidity + " %"
            card2.appendChild(cardEl3);

            //three//
            var day3 = data.list[15]
            var card3 = document.getElementById('detail3')
            var detailEl = document.createElement('li')
            detailEl.textContent = "Temp: " + day3.main.temp
            card3.appendChild(detailEl)

            var detailEl2 = document.createElement('li')
            detailEl2.textContent = "Wind " + day3.wind.speed + " MPH";
            card3.appendChild(detailEl2);

            var detailEl3 = document.createElement('li')
            detailEl3.textContent = "Humidity: " + day3.main.humidity + " %"
            card3.appendChild(detailEl3);


            //four//
            var day4 = data.list[24]
            var card4 = document.getElementById('detail4')
            var dateEl = document.createElement('li')
            dateEl.textContent = "Temp: " + day4.main.temp
            card4.appendChild(dateEl)

            var dateEl2 = document.createElement('li')
            dateEl2.textContent = "Wind " + day4.wind.speed + " MPH";
            card4.appendChild(dateEl2);

            var dateEl3 = document.createElement('li')
            dateEl3.textContent = "Humidity: " + day4.main.humidity + " %"
            card4.appendChild(dateEl3);


            //five//

            var day5 = data.list[39]
            var card5 = document.getElementById('detail5')
            var dayEl = document.createElement('li')
            dayEl.textContent = "Temp: " + day4.main.temp
            card5.appendChild(dateEl)

            var dayEl2 = document.createElement('li')
            dayEl2.textContent = "Wind " + day5.wind.speed + " MPH";
            card5.appendChild(dayEl2);

            var dayEl3 = document.createElement('li')
            dayEl3.textContent = "Humidity: " + day5.main.humidity + " %"
            card5.appendChild(dayEl3);


        })








    // //list//


    // .list[0].main.humidity


}