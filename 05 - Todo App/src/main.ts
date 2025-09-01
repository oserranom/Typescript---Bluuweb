import { todoService } from './services/todo.servcice';
import './style.css'
import { renderTodoList } from './ui/todo.ui';

document.addEventListener("DOMContentLoaded", ()=>{

    //Selectores
    const todoForm = document.querySelector("#todo-form") as HTMLFormElement;
    const todoInput = document.querySelector("#todo-input") as HTMLInputElement; 
    const todoList = document.querySelector("#todo-list") as HTMLUListElement;
    

    todoService.initTodos(); 

    const displayTodos = ()=>{
        const todos = todoService.getTodos();
        renderTodoList(todoList, todos);
    }

    displayTodos(); 

    todoForm.addEventListener("submit", e=>{
        e.preventDefault();

        const todoDescription = todoInput.value.trim();

        if(!todoDescription.trim()){
            alert("Escribe una descripción válida");
            return;
        }

        try {
            todoService.addTodo(todoDescription.trim());
            todoInput.value = "";
            displayTodos();
        } catch (error) {
            console.log("Error todo: ", error); 
        }
    }); 
    
});