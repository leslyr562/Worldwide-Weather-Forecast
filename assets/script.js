var city = JSON.parse(localStorage.getItem("city")) || [];

function myFunction() {
  var searchCity = document.getElementById("searchCity").value;

  
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        searchCity +
        "&appid=0b511ddd7a9e1f781148f73c4e808cf6&units=imperial"
    )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log("data", data);
      var cityDisplay = document.querySelector("#cityName");
      var getDates = moment().format("(MM/D/YYYY)");
      cityDisplay.textContent = data.name + " " + getDates;


      var currentWeather = document.getElementById("details");
      currentWeather.innerHTML = "";

      var listEl = document.createElement("li");
      listEl.textContent = "Temp: " + data.main.temp + "°F";
      currentWeather.appendChild(listEl);

      var listEl2 = document.createElement("li");
      listEl2.textContent = "Wind " + data.wind.speed + " MPH";
      currentWeather.appendChild(listEl2);

      var listEl3 = document.createElement("li");
      listEl3.textContent = "Humidity: " + data.main.humidity + " %";
      currentWeather.appendChild(listEl3);
    });

    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" +
    searchCity +
    "&appid=0b511ddd7a9e1f781148f73c4e808cf6&units=imperial"
    )
    .then((response) => {
        return response.json()
    })
    .then((data) => {
console.log('data2', data)

      //card group//
      ///one///
      var day1 = data.list[3];
      var card1 = document.getElementById("detail1");
      card1.innerHTML = "";
      var listEl1 = document.createElement("li");
      listEl.textContent = moment().add(1, 'days').format("(MM/D/YYYY)");
      card1.appendChild(listEl1);

      var listEl = document.createElement("li");
      listEl.textContent = "Temp: " + day1.main.temp + "°F";
      card1.appendChild(listEl);

      var listEl2 = document.createElement("li");
      listEl2.textContent = "Wind " + day1.wind.speed + " MPH";
      card1.appendChild(listEl2);

      var listEl3 = document.createElement("li");
      listEl3.textContent = "Humidity: " + day1.main.humidity + " %";
      card1.appendChild(listEl3);

      //two//
      var day2 = data.list[9];
      var card2 = document.getElementById("detail2");
      card2.innerHTML = "";
      var cardEl = document.createElement("li");
      cardEl.textContent = "Temp: " + day2.main.temp + "°F";
      card2.appendChild(cardEl);

      var cardEl2 = document.createElement("li");
      cardEl2.textContent = "Wind " + day2.wind.speed + " MPH";
      card2.appendChild(cardEl2);

      var cardEl3 = document.createElement("li");
      cardEl3.textContent = "Humidity: " + day2.main.humidity + " %";
      card2.appendChild(cardEl3);

      //three//
      var day3 = data.list[17];
      var card3 = document.getElementById("detail3");
      card3.innerHTML = "";
      var detailEl = document.createElement("li");
      detailEl.textContent = "Temp: " + day3.main.temp + "°F";
      card3.appendChild(detailEl);

      var detailEl2 = document.createElement("li");
      detailEl2.textContent = "Wind " + day3.wind.speed + " MPH";
      card3.appendChild(detailEl2);

      var detailEl3 = document.createElement("li");
      detailEl3.textContent = "Humidity: " + day3.main.humidity + " %";
      card3.appendChild(detailEl3);

      //four//
      var day4 = data.list[25];
      var card4 = document.getElementById("detail4");
      card4.innerHTML = "";
      var dateEl = document.createElement("li");
      dateEl.textContent = "Temp: " + day4.main.temp + "°F";
      card4.appendChild(dateEl);

      var dateEl2 = document.createElement("li");
      dateEl2.textContent = "Wind " + day4.wind.speed + " MPH";
      card4.appendChild(dateEl2);

      var dateEl3 = document.createElement("li");
      dateEl3.textContent = "Humidity: " + day4.main.humidity + " %";
      card4.appendChild(dateEl3);

      //five//

      var day5 = data.list[39];
      var card5 = document.getElementById("detail5");
      card5.innerHTML = "";
      var dayEl = document.createElement("li");
      dayEl.textContent = "Temp: " + day5.main.temp + "°F";
      card5.appendChild(dayEl);

      var dayEl2 = document.createElement("li");
      dayEl2.textContent = "Wind " + day5.wind.speed + " MPH";
      card5.appendChild(dayEl2);

      var dayEl3 = document.createElement("li");
      dayEl3.textContent = "Humidity: " + day5.main.humidity + " %";
      card5.appendChild(dayEl3);

      if (city.indexOf(searchCity) === -1) {
        city.push(searchCity);
        localStorage.setItem("city", JSON.stringify(city));
      }
    });

  // //list//

  // .list[0].main.humidity
};
