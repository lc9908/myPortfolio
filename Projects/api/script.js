// fetch("https://api.openweathermap.org/data/2.5/weather?q=Denver&units=metric&appid=21ab7e611e9f17489a04f1ae8663f12c")
//     .then((response) => response.json())
//     .then((data) => displayWeather(data));

function getWeather(){

    const search = document.getElementById("search-bar");
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+search.value+"&units=metric&appid="+getApi())
    .then((response) => response.json())
    .then((data) => displayWeather(data,search));
}

function displayWeather(data,search){
    //element from api
    if(data.weather != null){
        document.getElementById("location").innerHTML = data.name;
        const temperature = Math.round(data.main.temp);
        const icon = data.weather[0].icon;
        const humidity = data.main.humidity;
        const speed = data.wind.speed;
        const description = data.weather[0].description;
        document.getElementById("icon").src = "http://openweathermap.org/img/wn/"+icon+"@2x.png";
        document.getElementById("temperature").innerHTML = temperature + "°C";
        document.getElementById("humidity").innerHTML = "Humidity: " + humidity + "%";
        document.getElementById("description").innerHTML = description;
        document.getElementById("speed").innerHTML = "Wind Speed: " + speed + "km/h";
    } else {
        alert("Location does not exist");
    }

    search.value ="";

}