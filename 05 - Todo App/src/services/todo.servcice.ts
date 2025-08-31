
export interface Todo{
    id: string;
    description: string;
    done: boolean; 
}

let todos: Todo[] = []; 

//Obtener lista de localStorage
const loadTodos = () =>{
    const todosJSON =  localStorage.getItem('todos');

    if(!todosJSON){
        todos = [];
        return;
    }

    todos =  JSON.parse(todosJSON) as Todo[]; 
}

//Guardar lista en localStorage
const saveTodos = (todos: Todo[]): void =>{
    localStorage.setItem("todos", JSON.stringify(todos)); 
}

const getTodos = (): Todo[] =>{
    return [...todos]; 
}

export const todoService = {

}