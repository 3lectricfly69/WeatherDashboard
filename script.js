var APIkey = "a017045bc9d006d6e1cc77b052551e71";
const searchForm = document.getElementById('search-form');
const currentWeatherSection = document.getElementById('current-weather');
const forecastSection = document.getElementById('forecast');
const searchHistoryList = [];
var iconURL = "http://openweathermap.org/img/w/";
var weatherIcon = document.getElementById("weather-icon");
var cityClassName = ".city";
var tempClassName = ".temperature";
var humidityClassName = ".humidity";
var windClassName = ".wind";
$("#currentDay").text(moment().format("dddd, MMMM Do, YYYY"));

// Using the 5 Day Weather Forecast API, you'll notice that you will need to pass in coordinates 
// instead of just a city name. Using the OpenWeatherMap APIs, how could we retrieve geographical coordinates given a city name?

function searchByCity (){}
$("#submitBtn").on("click", function(event){

event.preventDefault();

var inputText = $("#cityName").val();
console.log(inputText);
var queryURLtoday = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}"
})

$(document).ready(function(e){
    $("#searchField").on("keypress", function(e){
    var code = (e.keyCode ? e.keyCode : e.which);
    if(code == 13) { a017045bc9d006d6e1cc77b052551e71
        console.log("enter press")
        $("#searchBtn").trigger("click")
    }

    })
    $("#searchBtn").on("click", function(e){
        e.preventDefault();
        console.log("on submit clicked");
    })
})

init();