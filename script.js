let API_KEY = "64efab1faf39c4a9c5a9ac3091fd72b1";

getWeatherData = (city) => {
    const url = "https://api.openweathermap.org/data/2.5/weather";
    const full_url = `${url}?q=${city}&appid=${API_KEY}`;
    const weatherPromise = fetch(full_url);
    return weatherPromise.then((res) => {
        return res.json();
    })
}

searchCity = () => {
    const city = document.getElementById('city-input').value;
    getWeatherData(city)
     .then((response) => {
         if(!response.name) {
            alert(response.message);
         }
         else{
            showWaeatherData(response);;
         }
     }).catch((error) => {
         console.log(error.message)
     })
     
    document.getElementById('city-input').value = "";
}

showWaeatherData = (weatherData) => {
     const {temp, temp_max, temp_min} = weatherData.main;
     document.getElementById('city-name').innerText = weatherData.name;
     document.getElementById('weather-type').innerText = weatherData.weather[0].description
     document.getElementById('temp').innerText = temp;
     document.getElementById('min-temp').innerText = temp_min;
     document.getElementById('max-temp').innerText = temp_max;
}