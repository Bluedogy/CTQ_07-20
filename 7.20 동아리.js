const toDoForm = document.getElementById("todo-form");
const toDoInput= document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

let toDos = [];
const TODOS_KEY = "todos"

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteToDo(event) {
const li = event.target.parentElement;
li.remove();
toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
saveToDos();
} //event.target인 버튼을 눌렀을때 
//버튼의 parentElement인 (부모)(=버튼을 포함하고 있는 거)li를 지운다.  

function paintToDo(newTodo){
    const li = document.createElement("li")
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text; // Span.innerText에다 newTodo를 넣는다. 
 //그러면 Span의 텍스트는 handleToDoSubmit에서 온 newTodo 텍스트가 된다.
    const button = document.createElement("button");
    button.innerText = "X"
    button.addEventListener("click", deleteToDo)
    li.appendChild(span);//Paint는 Span이라는 자식을 가지게 되었다.(Paint안에Span가짐)
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value; //여기서 toDoInput을 newTodo로 저장한거임.
    toDoInput.value = ""; // 그리고 toDoInput을 비움
    const newTodoObj = {
        text:newTodo,
        Id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);

function sayHello(item) {
    console.log("this is the turn of", item);
}

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);

if(saveToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}