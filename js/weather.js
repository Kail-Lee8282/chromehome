const WEATHERAPI_KEY = "3f45158215f66dbff63a92b55e62566e";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  console.log("you live it", lat, lon);

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHERAPI_KEY}&units=metric`;
  console.log(url);
  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data);
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child")
        let weatherIcon = `🌧️`;
        const weatherSta = data.weather[0].main;
        if(weatherSta === "Rain"){
          weatherIcon ="🌧️";
        }else if(weatherSta==="Clouds"){
          weatherIcon ="☁️";
        }
        else if(weatherSta ==="Mist"){
          weatherIcon ="🌫️";
        
        }else{
          weatherIcon ="☀️";
        }
        city.innerText = data.name;
        weather.innerText = `${weatherIcon}(${weatherSta}) / ${data.main.temp}°`;
    })
    .catch((err) => console.log("error", err));
}

function onGeoError() {
  //alert("Can't find you. No weather for you.");
  console.error("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
