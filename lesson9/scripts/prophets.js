const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const getPhophetData = async()=>{
    const res = await fetch(url);
    const data = await res.json();

    displayProphets(data.prophets);
}
getPhophetData();

function displayProphets(data){
    const cards = document.querySelector(".cards");

    data.forEach((prophet)=>{
        //create elements
        let card = document.createElement("section");
        let h2 = document.createElement("h2");
        let portrait = document.createElement("img");
        let pBirth = document.createElement("p");
        let pPlaceBirth = document.createElement("p");
        let deathDate = document.createElement("p");
        let age = document.createElement("p");

        //get the information to display on html elements
        h2.textContent = `${prophet.name} ${prophet.lastname}`;

        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `Portait of ${prophet.name}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "340");
        portrait.setAttribute("height", "440");

        pBirth.textContent = `Date of Birth: ${prophet.birthdate}`;
        pPlaceBirth.textContent = `Place of Birth: ${prophet.birthplace}`;
        deathDate.textContent = `Death: ${prophet.death}`;
        
        
        //Calculate age for each prophet
        const dateDeath = new Date(prophet.death);
        const dateBirth = new Date(prophet.birthdate);
        const date = new Date(Date.now());

        function calcAge(d2, d1){
            const diff = (d2.getTime() - d1.getTime()) / 1000/(60*60*24);
            return Math.abs(Math.round(diff/365.25))
        }

        if(prophet.death !== null){
            age.textContent = `Age: ${calcAge(dateDeath, dateBirth)}`
        } else{
            age.textContent = `Actual Age: ${calcAge(date, dateBirth)}`
            deathDate.textContent = ``
        };
                
    

        //append elements to section element card
        card.appendChild(h2);
        card.appendChild(pBirth);
        card.appendChild(pPlaceBirth);
        card.appendChild(deathDate);
        card.appendChild(age);
        card.appendChild(portrait);
        
        //append all elements to the cards HTML
        cards.appendChild(card)

    });
}