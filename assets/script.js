var city = JSON.parse(localStorage.getItem("city")) || [];

function myFunction() {
  var searchCity = document.getElementById("searchCity").value;
var div2 = document.getElementById('topCard');

function hideDiv () {
if(div2.style.display === 'none'){
    div2.style.display = 'block';
} else{
    div2.style.display = 'none'
}
};

 hideDiv();
  
  //single day fetch call
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

      //city name
      var cityDisplay = document.querySelector("#cityName");
      cityDisplay.textContent = data.name + ", " + data.sys.country;

      //temperature
      var listEl = document.getElementById("temp");
      listEl.textContent = data.main.temp + "°F";

      //icon
      var iconDay = document.getElementById("icon");
      iconDay.src =
        "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";

      //description
      var description = document.getElementById("des");
      description.textContent = data.weather[0].description;

      //date
      var getDates = document.getElementById("todayDate");
      getDates.textContent = moment().format("dddd, h:mm:ss a");

      var currentWeather = document.getElementById("details");
      currentWeather.innerHTML = "";

      // list
      var listEl2 = document.createElement("li");
      listEl2.textContent = "Wind: " + data.wind.speed + " MPH";
      currentWeather.appendChild(listEl2);

      var listEl3 = document.createElement("li");
      listEl3.textContent = "Humidity: " + data.main.humidity + " %";
      currentWeather.appendChild(listEl3);

      var listEl4 = document.createElement("li");
      listEl4.textContent = "Pressure: " + data.main.pressure + " hPa";
      currentWeather.appendChild(listEl4);

      var listEl5 = document.createElement("li");
      listEl5.textContent =
        "Min: " + data.main.temp_min + " " + "Max: " + data.main.temp_max;
      currentWeather.appendChild(listEl5);
    });

  //5 day fetch call
  fetch(
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
      searchCity +
      "&appid=0b511ddd7a9e1f781148f73c4e808cf6&units=imperial"
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log("data2", data);

      //card group//
      //------one

      var day1 = data.list[3];

      // date
      var cardTitle = document.getElementById("card-title1");
      cardTitle.textContent = moment().add(1, "days").format("dddd");

      //icon
      var iconDay1 = document.getElementById("icon1");
      iconDay1.src =
        "https://openweathermap.org/img/wn/" +
        data.list[3].weather[0].icon +
        "@2x.png";

      //temperature
      var temp1 = document.getElementById("temp1");
      temp1.textContent = day1.main.temp + "°F";

      var des1 = document.getElementById("des1");
      des1.textContent = day1.weather[0].description;


      //-----two
      var day2 = data.list[9];

      // date
      var cardTitle = document.getElementById("card-title2");
      cardTitle.textContent = moment().add(2, "days").format("dddd");

      //icon
      var iconDay2 = document.getElementById("icon2");
      iconDay2.src =
        "https://openweathermap.org/img/wn/" +
        data.list[9].weather[0].icon +
        "@2x.png";


      //details
      var temp2 = document.getElementById("temp2");
      temp2.textContent = day2.main.temp + "°F";


      var des2 = document.getElementById("des2");
      des2.textContent = day2.weather[0].description;

      //------three
      var day3 = data.list[17];

      // date
      var cardTitle3 = document.getElementById("card-title3");
      cardTitle3.textContent = moment().add(3, "days").format("dddd");

      //icon
      var iconDay3 = document.getElementById("icon3");
      iconDay3.src =
        "https://openweathermap.org/img/wn/" +
        data.list[17].weather[0].icon +
        "@2x.png";

      var temp3 = document.getElementById("temp3");
      temp3.textContent = day3.main.temp + "°F";

      var des3 = document.getElementById("des3");
      des3.textContent = day3.weather[0].description;
      

      //------four
      var day4 = data.list[25];

      // date
      var cardTitle4 = document.getElementById("card-title4");
      cardTitle4.textContent = moment().add(4, "days").format("dddd");

      //icon
      var iconDay4 = document.getElementById("icon4");
      iconDay4.src =
        "https://openweathermap.org/img/wn/" +
        data.list[3].weather[0].icon +
        "@2x.png";

      //details
      var temp4 = document.getElementById("temp4");
      temp4.textContent = day4.main.temp + "°F";

  
      var des4 = document.getElementById("des4");
      des4.textContent = day4.weather[0].description;



      //-----five

      var day5 = data.list[39];

      // date
      var cardTitle5 = document.getElementById("card-title5");
      cardTitle5.textContent = moment().add(5, "days").format("dddd");

      //icon
      var iconDay5 = document.getElementById("icon5");
      iconDay5.src =
        "https://openweathermap.org/img/wn/" +
        data.list[39].weather[0].icon +
        "@2x.png";
      //details
      var temp5 = document.getElementById("temp5");
      temp5.textContent = day5.main.temp + "°F";


      var des5 = document.getElementById("des5");
      des5.textContent = day5.weather[0].description;

      //adding searches to the local storage
      if (city.indexOf(searchCity) === -1) {
        city.push(searchCity);
        localStorage.setItem("city", JSON.stringify(city));
      }
    });

  // //list//

  // .list[0].main.humidity
}
