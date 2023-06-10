//Days of visits
const visitsDisplay = document.querySelector("#visits");

let currentDate = Date.now();

let visitsNum = Number(window.localStorage.getItem("visits-lst"));
let lastVisit = window.localStorage.getItem("lastVisit")

let days = Math.round((currentDate - lastVisit) / 84600000)

if (visitsNum !== 0){
	visitsDisplay.textContent = days;
}else {
	visitsDisplay.textContent = "🖐 This is your first time, Welcome!";
};

visitsNum = visitsNum +1

localStorage.setItem("visits-lst", visitsNum)
localStorage.setItem("lastVisit", currentDate)