//define action type 
export const ADD_TODO = 'redux-start/todos/ADD_TODO';  // define action type
export const COMPLETE_TODO = 'redux-start/todos/COMPLETE_TODO'

// create action function
// {type: ADD_TODO, text:'할일'}
export function addTodo(text){
  return {
    type: ADD_TODO,
    text
  }
}
// {type: COMPLETE_TODO, index: 3}
export function completeTodo(index){
  return {
    type: COMPLETE_TODO,
    index
  }
}

// init
const initialState = [];

// reducer 
export default function reducer(previousState = initialState, action){
  if(action.type ===ADD_TODO){
    return [...previousState, {text: action.text, done: false}]
  }

  if(action.type === COMPLETE_TODO){
    return previousState.map((todo, index)=>{
        if(index===action.index){
          return {...todo, done: true}
        }
        return todo;
      })
  }
  return previousState;
}