const toDoForm = document.getElementById("todo-form");
const toDoInput= document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function paintToDo(newTodo){
    const li = document.createElement("li")
    const span = document.createElement("span");
    li.appendChild(span);//Paint는 Span이라는 자식을 가지게 되었다.(Paint안에Span가짐)
    span.innerText = newTodo; // Span.innerText에다 newTodo를 넣는다. 
    //그러면 Span의 텍스트는 handleToDoSubmit에서 온 newTodo 텍스트가 된다.
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value; //여기서 toDoInput을 newTodo로 저장한거임.
    toDoInput.value = ""; // 그리고 toDoInput을 비움
    paintToDo(newTodo)
}

toDoForm.addEventListener("submit", handleToDoSubmit);