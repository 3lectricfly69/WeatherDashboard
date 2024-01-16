var apiKey = "a017045bc9d006d6e1cc77b052551e71";
const searchForm = document.getElementById('search-form');
const searchHistoryList = [];
var iconURL = "http://openweathermap.org/img/w/";
var weatherIcon = document.getElementById("weather-icon");
var cityClassName = ".city";
var tempClassName = ".temperature";
var humidityClassName = ".humidity";
var windClassName = ".wind";
$("#currentDay").text(moment().format("dddd, MMMM Do, YYYY"));

function getCityByName(inputCity)
{
    event.preventDefault();

    var requestURL = `http://api.openweathermap.org/geo/1.0/direct?q=${inputCity}&appid=${apiKey}`;

    fetch(requestURL, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    })
    .then((response) => {
        console.log(response);
        response.json().then((data) => {
            getCityByLatLon(data[0].lat, data[0].lon)
            console.log(data);
            console.log(data[0]);
            console.log(data[0].lat);
            console.log(data[0].lon);
        }) 
        .catch(err => {
            console.error(err);
        });
    });
}

// let searching = browser.history.search(
//     searchHistoryList
// )

function getCityByLatLon(lat, lon) {
    // var lat = data[0].lat;
    // var lon = data[0].lon;
    var requestLatLonURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    return fetch(requestLatLonURL, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    })
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        console.log(data.city.name);
        console.log(data.list[0].main.temp);
        console.log(data.list[0].weather[0].description);
        console.log(data.list[0].weather[0].icon);
        document.querySelector(".cityName").textContent = data.city.name;
        // document.querySelector(".date").textContent = data.list[0].date;
        
        document.querySelector(".tempF").textContent = convertKelvinToFahrenheit(data.list[0].main.temp) + "°F";
        document.querySelector(".humidity").innerHTML = "humidity: " + data.list[0].main.humidity + "%";
        document.querySelector(".windSpeed").innerHTML =  "wind-speed: " + data.list[0].wind.speed + " mph";
        document.querySelector(".description").innerHTML = data.list[0].weather[0].description;
        document.querySelector('.icon').src = "http://openweathermap.org/img/wn/"+ data.list[0].weather[0].icon +".png";
        document.querySelector(".date").innerHTML = "" + moment().format("dddd, MMMM Do, YYYY");


        document.querySelector(".tempF1").textContent = convertKelvinToFahrenheit(data.list[1].main.temp) + "°F";
        document.querySelector(".humidity1").innerHTML = "humidity: " + data.list[1].main.humidity + "%";
        document.querySelector(".windSpeed1").innerHTML = "wind-speed: " + data.list[1].wind.speed + " mph";
        document.querySelector(".description1").innerHTML = data.list[1].weather[0].description;
        document.querySelector('.icon1').src = "http://openweathermap.org/img/wn/"+ data.list[1].weather[0].icon +".png";
        document.querySelector(".date1").innerHTML = "" + moment().add(1,'days').format("dddd, MMMM Do");

        document.querySelector(".tempF2").textContent = convertKelvinToFahrenheit(data.list[2].main.temp) + "°F";
        document.querySelector(".humidity2").innerHTML = "humidity: " + data.list[2].main.humidity + "%";
        document.querySelector(".windSpeed2").innerHTML = "wind-speed: " + data.list[2].wind.speed + " mph";
        document.querySelector(".description2").innerHTML = data.list[2].weather[0].description;
        document.querySelector('.icon2').src = "http://openweathermap.org/img/wn/"+ data.list[2].weather[0].icon +".png";
        document.querySelector(".date2").innerHTML = "" + moment().add(2,'days').format("dddd, MMMM Do");

        document.querySelector(".tempF3").textContent = convertKelvinToFahrenheit(data.list[3].main.temp) + "°F";
        document.querySelector(".humidity3").innerHTML = "humidity: " + data.list[3].main.humidity + "%";
        document.querySelector(".windSpeed3").innerHTML = "wind-speed: " + data.list[3].wind.speed + " mph";
        document.querySelector(".description3").innerHTML = data.list[3].weather[0].description;
        document.querySelector('.icon3').src = "http://openweathermap.org/img/wn/"+ data.list[3].weather[0].icon +".png";
        document.querySelector(".date3").innerHTML = "" + moment().add(3,'days').format("dddd, MMMM Do");

        document.querySelector(".tempF4").textContent = convertKelvinToFahrenheit(data.list[4].main.temp) + "°F";
        document.querySelector(".humidity4").innerHTML = "humidity: " + data.list[4].main.humidity + "%";
        document.querySelector(".windSpeed4").innerHTML = "wind-speed: " + data.list[4].wind.speed + " mph";
        document.querySelector(".description4").innerHTML = data.list[4].weather[0].description;
        document.querySelector('.icon4').src = "http://openweathermap.org/img/wn/"+ data.list[4].weather[0].icon +".png";
        document.querySelector(".date4").innerHTML = "" + moment().add(4,'days').format("dddd, MMMM Do");

        document.querySelector(".tempF5").textContent = convertKelvinToFahrenheit(data.list[5].main.temp) + "°F";
        document.querySelector(".humidity5").innerHTML = "humidity: " + data.list[5].main.humidity + "%";
        document.querySelector(".windSpeed5").innerHTML = "wind-speed: " + data.list[5].wind.speed + " mph";
        document.querySelector(".description5").innerHTML = data.list[5].weather[0].description;
        document.querySelector('.icon5').src = "http://openweathermap.org/img/wn/"+ data.list[5].weather[0].icon +".png";
        document.querySelector(".date5").innerHTML = "" + moment().add(5,'days').format("dddd, MMMM Do");
    })
}
function convertKelvinToFahrenheit(valNum) 
{
    return (((Math.round(valNum - 273.15) * 1.8) + 32));
}

//this is how the javascript tells the html button to fire off the data fetching/displaying functions
//the highest level invoked functionality 
//Kick off the search
$(document).on("click", "#searchbtn", function (event) //******** 
{//******** 
    //assigning the value of the search input to a variable
    var searchedCity = $("#city").val(); //******** 
    //if they hit the submit button without entering a city into the input field, it alerts the user
    if (searchedCity == "")
    {
        alert("Enter a valid city");
    }
    //otherwise, save the searched city to the local storage to be retrieved upon load
    //and use the api call function with city name to get the weather
    else
    {
        getLatitudeAndLongitude(searchedCity); //******** 
        //checkLocalStorage() 
    }
    //resets search input field to empty so another search can be performed
    $("#city").val(""); //******** 
    event.preventDefault(); //******** 
});//******** 

// this is how the javascript tells the html button to fire off the data fetching/displaying functions
// the highest level invoked functionality / button practically activates page
// search
    $(document).on("click", "#submit", function (event) 
{
    var searchedCity = $("#search").val();
    console.log("hey console log is getting triggered by button");
    console.log(searchedCity);
            getCityByName(searchedCity);
    $("#search").val("");
    event.preventDefault();
});
