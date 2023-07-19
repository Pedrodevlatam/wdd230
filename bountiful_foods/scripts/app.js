//Get last modified
const update = new Date(document.lastModified)

document.getElementById("last-update").textContent = `Last Update: ${update.getMonth()+1}/${update.getDate()}/${update.getFullYear()}   ${update.getHours()}:${update.getMinutes()}:${update.getSeconds()}`;

//Get the current year
const date = new Date();
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

const year = date.getFullYear();
const fulldate = `${daynames[date.getDay()]} ${date.getDate()}, ${months[date.getMonth()]} ${year}`;

document.getElementById("date").textContent = year;

//Get the date forms are send
const orderDate = document.querySelector(".order-date");
const inputDate = document.getElementById("formDateSend");
const sendBtn = document.querySelector(".sendBtn");

if(sendBtn){
sendBtn.addEventListener("click", ()=>{
	inputDate.value = date
  orderDate.textContent = fulldate
})};

const mssgBtn = document.querySelector(".sendMsg");
if(mssgBtn){
	mssgBtn.addEventListener("click", ()=>{alert("✅ Message Send")})
};

//Menu icon
function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
    document.querySelector("nav").classList.toggle("open");
    
}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;

//Progressive Loading
const images = document.querySelectorAll("[data-src]");

function preloadImage(img){
  const src = img.getAttribute("data-src");
  if(!src){
    return;
  }

  img.src = src;
  img.removeAttribute("data-src")
};

const imgOptions = {
  threshold: 0,
  rootMargin: "0px 0px 50px 0px"
};

const imgObserver = new IntersectionObserver( (entries, imgObserver) => {
  entries.forEach(entry => {
                    if (!entry.isIntersecting){
                      return;
                    } else{
                      preloadImage(entry.target);
                      imgObserver.unobserve(entry.target);
                    }
  });

}, imgOptions);

images.forEach(image => { imgObserver.observe(image) });

//Set on localStorage how many drinks where requested
const submited = document.querySelector(".confirm");
if(submited){
  submited.addEventListener("click", ()=>{
    let drinks = Number(window.localStorage.getItem("drinksMade"));

    drinks= drinks + 1;
    localStorage.setItem("drinksMade", drinks);
  });
};

const storeDrinks = document.querySelector(".local-storage");
if(storeDrinks){
let drink = localStorage.getItem("drinksMade");
storeDrinks.textContent = drink
}
 
//------------Slideshow news----------
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  if(slides[slideIndex-1]){
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";}
} 