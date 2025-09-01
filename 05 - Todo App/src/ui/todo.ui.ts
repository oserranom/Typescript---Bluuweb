import type { Todo } from "../services/todo.servcice";

const todoItemTemplate = document.querySelector("#todo-item-template") as HTMLTemplateElement; 

//Función para crear HTML de un todo con template
export const createTodoItemTemplate = (todo: Todo) =>{
    if(!todoItemTemplate){
        throw new Error("Required template not found"); 
    }

    const todoItem = todoItemTemplate.content.cloneNode(true) as HTMLTemplateElement;

    const li = todoItem.querySelector("LI") as HTMLLIElement;
    const span = todoItem.querySelector("SPAN") as HTMLSpanElement;

    if(!li || !span){
        throw new Error("Required elements not found")
    }

    //Agregar data-id al li
    li.setAttribute("data-id", todo.id);
    span.textContent = todo.description; 

    if(todo.done){
        span.classList.add("done"); 
    }

    return li; 
}

//Function para renderizar toda la lista
export const renderTodoList = (todoList: HTMLUListElement, todos: Todo[]) =>{
    //Limpiar la lista renderizada
    todoList.innerHTML = "";

    //Crear y agregar lista
    todos.forEach(todo =>{
        const todoItem = createTodoItemTemplate(todo);
        todoList.appendChild(todoItem);
    });
}