
export interface Todo{
    id: string;
    description: string;
    done: boolean; 
}

let todos: Todo[] = []; 

const initTodos = ()=>{
    loadTodos(); 
}

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

const addTodo = (description: string): void =>{
    if(!description || !description.trim()){
        throw new Error("Todo description is requried");
    }

    const newTodo: Todo = {
        id: crypto.randomUUID(),
        description: description.trim(),
        done: false
    } 

    todos.push(newTodo);
    saveTodos(todos); 
}

//Actualizar toggle todo
const toggleTodo = (id: string) =>{
    todos = todos.map((todo) =>{
        if(todo.id === id){
            return { ...todo, done: !todo.done}
        }
        return todo;
    }); 

    saveTodos(todos);
}

//Eliminar un todo
const deleteTodo = (id: string) =>{
    todos = todos.filter((todo) =>todo.id !== id);
    saveTodos(todos); 
}

export const todoService = {
    getTodos,
    addTodo,
    toggleTodo,
    deleteTodo,
    initTodos
}