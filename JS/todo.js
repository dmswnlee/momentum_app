const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-txt");
const toDoList = document.querySelector("#todo-list");
let toDos = [];

const TODOS = "todos";

function savedList(){
    localStorage.setItem(TODOS,JSON.stringify(toDos));
}

function listRemove(e){
    const li = e.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    savedList();
}

function listAdd(newToDo){
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const button = document.createElement("button");
    button.addEventListener("click",listRemove);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function toDoAdd(e){
    e.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text : newToDo,
        id : Date.now(), 
    }
    toDos.push(newTodoObj);
    listAdd(newTodoObj);
    savedList();
}

toDoForm.addEventListener("submit",toDoAdd);

const savedToDos = localStorage.getItem(TODOS);

if(savedToDos !== null){
    const parseToDos = JSON.parse(savedToDos);
    toDos = parseToDos;
    parseToDos.forEach(listAdd);
}

