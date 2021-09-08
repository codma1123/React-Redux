export const ADD_TODO = 'ADD_TODO';  // define action type

export default function addTodo(todo){
  return {
    type: ADD_TODO,
    todo
  }
}