// define action type
const SHOW_ALL = 'redux-start/filter/SHOW_ALL'
const SHOW_COMPLETE = 'redux-start/filter/SHOW_COMPLETE'

// action create function
export function showAll(){
  return {
    type: SHOW_ALL
  }
}
export function showComplete(){
  return {
    type: SHOW_COMPLETE
  }
}

// init
const initialState = "ALL"

// reducer
export default function reducer(previousState = initialState, action){

  if(action.type === SHOW_COMPLETE){
    return 'COMPLETE'
  }

  if(action.type === SHOW_ALL){
    return 'ALL'
  }

  return previousState;
}