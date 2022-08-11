const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list") ;

const TODOS_KEY = "toDos";
let toDos = [];

const savedTodos = localStorage.getItem(TODOS_KEY);

function saveTodos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    // li 삭제
    const parentLi = event.target.parentElement;
    const id = parentLi.id;
    console.log(id);
    
    
    parentLi.remove();

    const newToDos = toDos.filter((item) => {
        //console.log(id, item.id, item.id != id, item.id !== parseInt(id), typeof id, typeof parseInt(id));
        return item.id !== parseInt(id);
    });

    console.log(newToDos);
    toDos = newToDos;
    
    saveTodos();

}

function paintToDo(newTodoObj){
    console.log("i will paint", newTodoObj.text);
    
    const listItem = document.createElement("li");
    const itemSpan = document.createElement("span");
    const itemButton = document.createElement("button");

    listItem.appendChild(itemSpan);
    listItem.appendChild(itemButton);
    toDoList.appendChild(listItem);

    listItem.classList="todoList";
    itemSpan.className="todoValue";
    itemButton.className="todoDelete";
    listItem.id = newTodoObj.id;
    itemSpan.innerText = newTodoObj.text;
    itemButton.innerText = "❌";
    

    itemButton.onclick = deleteToDo;
}

function handleTodoSubmit(event){
    event.preventDefault();

    const newTodo = toDoInput.value;
    toDoInput.value= "";

    const newTodoObj = {id : Date.now(), text:newTodo};
    toDos.push(newTodoObj);
    console.log(newTodoObj);

    paintToDo(newTodoObj);
    saveTodos();
}



if(savedTodos !== null){
    const parsedTodos = JSON.parse(savedTodos);
    console.log(parsedTodos);
    //parsedTodos.forEach((item) => {console.log(item); paintToDo(item);});
    toDos = parsedTodos;
    parsedTodos.forEach(paintToDo);
}

toDoForm.addEventListener("submit", handleTodoSubmit);