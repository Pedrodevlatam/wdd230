const url = "https://brotherblazzard.github.io/canvas-content/fruit.json"

const getFruitsData = async()=>{
    try{
        const res = await fetch(url);
        if (res.ok) {
            const data = await res.json();
            //console.log(data)
            displayResults(data);
          } else {
              throw Error(await res.text());
          }

    } catch (error) {
    console.log(error);
    }
    
}
getFruitsData();

function displayResults(data){
    const fruitList = document.querySelector(".fruits-lst");
    const submitBtn = document.querySelector(".sendBtn");
    const selectedFruit = document.querySelector(".selected-fruit");
    const showFruits = document.querySelector(".selection-fruits")

    //display fruits names
    data.forEach((fruit) =>{
        let label = document.createElement("label");
        let input = document.createElement("input");

        input.setAttribute("type", "checkbox");
        input.setAttribute("name", fruit.name);
        input.setAttribute("value", fruit.name);
        input.classList.add("check");
        
        label.textContent = fruit.name;

        label.appendChild(input);
        fruitList.appendChild(label)
        
        //call a confirmation popup form
        submitBtn.addEventListener("click", confirmInfo());   

    });   

    //Allow only to check 3 inputs 
    let checkInputs = document.querySelectorAll('input[type="checkbox"]');

    for (let i = 0; i < checkInputs.length; i++){
        checkInputs[i].onclick = selectiveCheck;
        }

    function selectiveCheck() {
        let checkedChecks = document.querySelectorAll(".check:checked");
        if (checkedChecks.length > 3){
            return false;}
    };

    //Display fruit list on document
    let confirmBtn = document.querySelector(".confirm");

    checkInputs.forEach((input) =>{
        input.addEventListener("change", ()=>{
            
            let checkedFruits = []
            checkInputs.forEach(d =>{
                            if(d.checked){ 
                                 checkedFruits.push(d.value);
                                 //confirm btn appears, else is no display to submit form
                                 confirmBtn.style.display = "block"
                            };
            });
            selectedFruit.textContent = checkedFruits.join(", ")
            showFruits.textContent = checkedFruits.join(", ")
                        
            if (checkedFruits.length != 0){                
                displayNutritions(data, checkedFruits)
            }
        });
        
    });
    
    
   
};

function displayNutritions(fruits, fruitList){
    let dataTotal = document.querySelector(".total-amount");
    let selections = document.querySelector(".selections");
    
    let carbohydrates = []
    let protein = []
    let fat = []
    let sugar = []
    let calories = []      

    fruits.forEach((f)=>{
        
        fruitList.forEach((e)=>{
            if(e == f.name){
                carbohydrates.push(f.nutritions.carbohydrates)
                protein.push(f.nutritions.protein)
                fat.push(f.nutritions.fat)
                sugar.push(f.nutritions.sugar)
                calories.push(f.nutritions.calories)
            }
        })
    });

    // Sum of each list
    let total = `<br>Carbohydrates: ${carbohydrates.reduce((a,b)=> a + b).toFixed(1)}<br>
                            Protein: ${protein.reduce((a,b)=> a + b).toFixed(1)}<br>
                            Fat: ${fat.reduce((a,b)=> a + b).toFixed(1)}<br>
                            Sugar: ${sugar.reduce((a,b)=> a + b).toFixed(1)}<br>
                            Calories: ${calories.reduce((a,b)=> a + b).toFixed(1)}
                            `
    
     dataTotal.innerHTML = total
     selections.innerHTML = total
                   
};

function confirmInfo(){
    
    let form = document.querySelector("#fill-info");
    let confirmForm = document.querySelector(".confirmation");
    let form2 = document.querySelector("#send-info");



    //Button events to confirm of cancel request
    let confirmBtn = document.querySelector(".confirm");
    let cancelBtn = document.querySelector(".cancel");
    let dataTotal = document.querySelector(".total-amount");

    confirmBtn.addEventListener("click", ()=>{ 
        
        //let drink = Number(localStorage.getItem("drinks"))+1;
        if(dataTotal.textContent !== "-----------Select some fruits to make your request------------"){
            
            form.onsubmit = "";
            form.submit(); 
            //alert("✅ Request Submited")
            
           // localStorage.setItem("drinks",drink)
        }
        
        
    })
    form2.onsubmit = (event)=>{ event.preventDefault(); return false;}
    cancelBtn.addEventListener("click", ()=>{confirmForm.style.display = "none";});


    //inputs information to confirm
    let name = document.querySelector(".name");
    let email = document.querySelector(".email");
    let phone = document.querySelector(".number");
    let moreInstructions = document.querySelector(".text-instruction");
 
    //element to display
    let info = document.querySelector(".personal-info");
    let instructions = document.querySelector(".instructions");

    //when form is submitted prevent default refresh and add inputs information to popup form
    form.onsubmit = function (e){ 
        e.preventDefault();
        confirmForm.style.display = "block"
        
        info.innerHTML = `<b>Name:</b> ${name.value}<br>
                        <b>Email:</b> ${email.value}<br>
                        <b>Phone Number:</b> ${phone.value}<br>`;
                     
        instructions.innerHTML = `<b>Special Instructions:</b> ${moreInstructions.value}`;
        
        return false};

};