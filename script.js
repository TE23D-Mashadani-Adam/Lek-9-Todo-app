let listaUl = document.querySelector("ul");


function AddList() {
    let task = document.createElement("li");
    let input = document.querySelector("input");
    console.log(input);
    task.textContent = input.value;
    task.classList.add("list_css");
    listaUl.appendChild(task);
    input.value = "";
}