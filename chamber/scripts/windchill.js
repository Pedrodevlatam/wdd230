// 🚑  The formula to calculate the wind chill factor is , 
// f = 35.74 + 0.6215 * t - 35.75 * (s ** 0.16) + 0.4275 * t * (s ** 0.16)
// where f is the wind chill factor in Fahrenheit, t is the air average
//  temperature in Fahrenheit, and s is the wind speed in miles per hour.

const temp = document.getElementById("temperature").textContent;
const windSpeed = document.getElementById("wind-speed").textContent;

function calcWindChill(t, s){
    if(t <= 50 && s > 3.0){
    let f = Math.round(35.74 + (0.6215 * t) - ( 35.75 * (s ** 0.16)) + (0.4275 * t * (s ** 0.16)));

    return `${f}°F`;
    }
    else{ return "N/A"}
}
document.querySelector(".wind-chill").textContent = calcWindChill(temp, windSpeed);