const input = document.querySelector("input");
const list = document.querySelector("ul");
const btn = document.querySelector("button");

btn.addEventListener("click", ( )=>{
    const element = input.value;
    const itemList = document.createElement("li");
    const deleteBtn = document.createElement("button");

    itemList.textContent = element;
    deleteBtn.textContent ="❌";

    itemList.appendChild(deleteBtn);

    list.appendChild(itemList);

    deleteBtn.addEventListener("click", () =>{
        itemList.remove();
        input.focus();
    });

    input.focus();

    input.value = "";
})