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
            // getCityByLatLon(data[0].lat,lon)
            console.log(data);
            console.log(data[0]);
            console.log(data[0].lat);
            console.log(data[0].lon);
        }) 
        .catch(error => {
            console.error(error);
        });
    });
}
function getCityByLatLon(lat, lon) {
    // var lat = data[0].lat;
    // var lon = data[0].lon;
    var requestLatLonURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    return fetch(requestLatLonURL), {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    }  
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
}
    // var lat = data[0].lat;
    // var lon = data[0].lon;
    // var requestLatLonURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    
    // fetch(requestLatLonURL), {
    //     method: 'GET',
    //     headers: {
    //         'Accept': 'application/json',
    //     },
    // }
    // .then((response) => {
    //     console.log(response);
    //     response.json().then((data) => {
    //         console.log("this is firing off");
    //         console.log(data);
    //     });
    // });
    

//this is how the javascript tells the html button to fire off the data fetching/displaying functions
//the highest level invoked functionality / button practically activates page
//search
    $(document).on("click", "#submit", function (event) 
{
    var searchedCity = $("#search").val();
    console.log("hey console log is getting triggered by button");
    console.log(searchedCity);
            getCityByName(searchedCity);
    $("#search").val("");
    event.preventDefault();
});