let cityInput = document.querySelector('#city-input');
let cityBtn = document.querySelector('#search-btn');
let cityNameEl = document.querySelector('#city-name');
let cityArr = [];
let apiOneCallKey = "46859f1820503d06f10d07676350cfbe";
let city = cityInput.value.trim();
const dailyWeatherKey = "fb9de2fd50887c366b2e9d987dd12e03"
let oneCallApi = `https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&units=imperial&appid=${apiOneCallKey}`
let weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${dailyWeatherKey}`
let currentTemp = document.getElementById("current-temp")
// console.log(weatherApi);

//insent variable for input in city name for weather api 


function getDailyWeather() {
    city = cityInput.value.trim();
    weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${dailyWeatherKey}`;
    fetch(weatherApi)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data);
            cityNameEl.textContent = data.name;
            cityNameEl = document.getElementById('city-input');
            
            var lat = data.coord.lat;
            var lon = data.coord.lon;
            oneCallApi = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${apiOneCallKey}`
            console.log(oneCallApi)
            fetch(oneCallApi)
            .then(function(response){
                return response.json()
            })
            .then (function(data){
                console.log(data)
                let currentTemp = document.getElementById("current-temp")
                currentTemp.textContent = data.current.temp
                let feelsLike

            })

            
        })

};

cityBtn.addEventListener("click",function(event){
    event.preventDefault(); 
    city = document.getElementById("city-name")
    var city = cityInput.value.trim();
    console.log(city);
    getDailyWeather();
})

// new function for forecast, in the parenthesis pput whatever daily forcast parameter. for instead of .lenght I'll do less than 5, only want five days. For the date add a variable = new Date((parameter[i].dt)*1000).toLocaleDateString("en-US");-->curret date for boxes
//when you go into dayly you have speatre idexes to axcess the date the key is dt