let listaUl = document.querySelector("ul");

let maxValue = 5;
let currentValue = 0;



function AddList() {
    if (currentValue < maxValue) {
        let task = document.createElement("li");
        let input = document.querySelector("input");
        console.log(input);
        task.textContent = input.value;
        task.classList.add("list_css");
        if (input.value != "") {
            listaUl.appendChild(task);
        }else{
            alert("You can not add empty task")
        }
        input.value = "";
        currentValue++;
    }
    else {
        alert("You can add max 5 tasks!")
    }
}

function Remove_List() {
    listaUl.removeChild(listaUl.lastChild);
    currentValue--;
}