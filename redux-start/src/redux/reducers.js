import { ADD_TODO } from "./actions";

// state
// ['롤하기','밥먹기'];

const initialState = [];

export function todoApp(previousState = initialState, action){
  // init
  // if(previousState === undefined){
  //   return [];
  // }
  if(action.type ===ADD_TODO){
    return [...previousState, action.todo]
  }

  return previousState;
}