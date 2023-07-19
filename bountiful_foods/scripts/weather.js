const url = "https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=imperial&appid=da3e730a4e4f39d541f4572b928edac8"
const dailyForecast = "https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&cnt=24&units=imperial&appid=e69048b761c63a420dffdb9b14015220"

const currentTemp = document.querySelector("#temperature");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector(".description");
const humidity = document.querySelector(".humidity");

const forecast = document.querySelector(".three-days");
const day1 = document.querySelector(".tomorrow");
const day2 = document.querySelector(".day-2");
const day3 =document.querySelector(".day-3");

async function apiFetch(url) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
apiFetch(url);
apiFetch(dailyForecast)

function displayResults(weatherData){
    if(weatherData.main){
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    const weatherHum = weatherData.main.humidity;
    

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    weatherIcon.setAttribute("loading", "lazy")
    captionDesc.textContent = desc.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    humidity.textContent = weatherHum;
    }

    if(weatherData.list){
        const dayone = weatherData.list[6];
        const daytwo = weatherData.list[14];
        const daythree = weatherData.list[22];        

        day1.innerHTML = `<h5>Tomorrow</h5>
                        <img src="${`https://openweathermap.org/img/w/${dayone.weather[0].icon}.png`}" alt="${dayone.weather[0].description}" loading="lazy">
                        <p><span>${dayone.weather[0].description
                            .split(" ")
                            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                            .join(" ")}</span></p>
                        <p><b>Max Temp</b>: <span>${dayone.main.temp_max.toFixed(0)}</span> °F</p>`;

        day2.innerHTML = `<h5>2 Days</h5>
                        <img src="${`https://openweathermap.org/img/w/${daytwo.weather[0].icon}.png`}" alt="${daytwo.weather[0].description}" loading="lazy">
                        <p><span>${daytwo.weather[0].description
                            .split(" ")
                            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                            .join(" ")}</span></p>
                        <p><b>Max Temp</b>: <span>${daytwo.main.temp_max.toFixed(0)}</span> °F</p>`;

        day3.innerHTML = `<h5>3 Days</h5>
                        <img src="${`https://openweathermap.org/img/w/${daythree.weather[0].icon}.png`}" alt="${daythree.weather[0].description}" loading="lazy">
                        <p><span>${daythree.weather[0].description
                            .split(" ")
                            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                            .join(" ")}</span></p>
                        <p><b>Max Temp</b>: <span>${daythree.main.temp_max.toFixed(0)}</span> °F</p>`;


    }
    
};
