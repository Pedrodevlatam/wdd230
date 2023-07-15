const getDirectory = async() =>{
    try{
        const response = await fetch("json/data.json");
        if (response.ok){
            const data = await response.json();

            displayCompanies(data.companies);
        } else {
            throw Error(await response.text());
        }
    }catch(error) {
        console.log(error);
    }
}
getDirectory();

function displayCompanies(data){

    //filter data to obtain gold ans silver membership
    const membership = data.filter( (item)=> {
        if(item.membershiplevel == "silver" || item.membershiplevel == "gold")
        {return item}} );
   
    const generateCompany = (membership) => {
         let company = membership[Math.floor(Math.random(membership) * membership.length)];

         let spotlightsDiv = document.createElement("div");
         let h4 = document.createElement("h4");
         let imgLogo = document.createElement("img");
         let website = document.createElement("a");
         let phone = document.createElement("p");
         let address = document.createElement("p");
         let hr = document.createElement("hr")
     
         //Set attributes and content of each tag
         imgLogo.setAttribute("src", company.logoimg);
         imgLogo.setAttribute("alt", `Company logo of ${company.name}`);
         imgLogo.setAttribute("loading", "lazy");
         imgLogo.setAttribute("width","200");
     
         h4.textContent = `${company.name}`;
         phone.textContent = `${company.phonenumber}`;
         address.textContent = `${company.address}`;
     
         if(company.websiteurl !== null){
         website.setAttribute("href", company.websiteurl);
         website.textContent = `${company.websiteurl}`;
         website.setAttribute("target", "_blank");
         }

         spotlightsDiv.appendChild(h4);
         spotlightsDiv.appendChild(imgLogo);
         spotlightsDiv.appendChild(phone);
         spotlightsDiv.appendChild(website);
         spotlightsDiv.appendChild(hr);
         spotlightsDiv.appendChild(address);

         return spotlightsDiv.innerHTML;
        }

    const spotlight1 = document.querySelector(".spotlight1");
    const spotlight2 = document.querySelector(".spotlight2");
    const spotlight3 = document.querySelector(".spotlight3");

    spotlight1.innerHTML = generateCompany(membership);
    spotlight2.innerHTML = generateCompany(membership);
    spotlight3.innerHTML = generateCompany(membership);

}