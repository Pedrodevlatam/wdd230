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
    const companies = document.querySelector(".companies");
    const grid = document.getElementById("grid");
    const list = document.getElementById("list");

    data.forEach((company)=>{
        //create html elements
        let companyDiv = document.createElement("div");
        let h4 = document.createElement("h4");
        let imgLogo = document.createElement("img");
        let website = document.createElement("a");
        let phone = document.createElement("p");
        let address = document.createElement("p");
        let membership = document.createElement("p");

        //Set attributes and content of each tag
        imgLogo.setAttribute("src", company.logoimg);
        imgLogo.setAttribute("alt", `Company logo of ${company.name}`);
        imgLogo.setAttribute("loading", "lazy");
        imgLogo.setAttribute("width","200")

        h4.textContent = `${company.name}`;
        phone.textContent = `${company.phonenumber}`;
        address.textContent = `${company.address}`

        if(company.websiteurl !== null){
        website.setAttribute("href", company.websiteurl);
        website.textContent = `${company.websiteurl}`
        website.setAttribute("target", "_blank");
        }

        companyDiv.appendChild(h4);
        companyDiv.appendChild(imgLogo);
        
        companyDiv.appendChild(address)
        companyDiv.appendChild(phone);
        companyDiv.appendChild(website);

        companies.appendChild(companyDiv);

        grid.addEventListener("click", ()=>{
            companies.classList.add("grid");
            companies.classList.remove("list");
        });

        list.addEventListener("click", ()=>{
            companies.classList.add("list");
            companies.classList.remove("grid");
        });
        
    });
}
