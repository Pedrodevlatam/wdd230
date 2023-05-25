//Hamburger menu
function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
    document.querySelector("nav").classList.toggle("open");
	document.querySelector(".spotlights").classList.toggle("open");
    
}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;


//Get the current year
const date = new Date();
const currentYear = date.getFullYear();
document.getElementById("year").textContent = currentYear;

//Get date

const daynames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];
const d = new Date();
const dayName = daynames[d.getDay()];
const monthName = months[d.getMonth()];
const year = d.getFullYear();
const fulldate = `${dayName} ${d.getDate()}, ${monthName} ${year}`;

document.getElementById("date").textContent = fulldate;

//Get last modified
const update = new Date(document.lastModified)

document.getElementById("last-update").textContent = `Last Update: ${update.getMonth()+1}/${update.getDate()}/${update.getFullYear()}   ${update.getHours()}:${update.getMinutes()}:${update.getSeconds()}`;

//Notification Banner
if (dayName === "Monday"){
	const banner = document.getElementById("welcome-banner");
	banner.style.display = "block"

	document.body.classList.toggle("move-down")
	
	const button = document.querySelector(".close-btn").addEventListener("click", ()=>{
		banner.style.display = "none"
		document.body.classList.remove("move-down")

	});
	 
}

//Lazy Loading
const images = document.querySelectorAll("[data-src]");

function preloadImage(img){
  const src = img.getAttribute("data-src");
  if(!src){
    return;
  }

  img.src = src;
  img.removeAttribute("data-src")
}

const imgOptions = {
  threshold: 0,
  rootMargin: "0px 0px 50px 0px"
};

const imgObserver = new IntersectionObserver((entries, imgObserver) =>{
  entries.forEach(entry => {
    if (!entry.isIntersecting){
      return;
    } else{
      preloadImage(entry.target);
      imgObserver.unobserve(entry.target);
    }
  })

}, imgOptions);

images.forEach(image => {
  imgObserver.observe(image)
})


//form
//Get the date and time when the form was send
const inputDate = document.getElementById("formDateSend");
const sendBtn = document.querySelector(".sendBtn");
if(sendBtn){
sendBtn.addEventListener("click", ()=>{
	inputDate.value = date
})}