# Redux

## action

Create <strong>action</strong>s through action constructors. <br/>
Send the created <strong>action</strong> object to the redux store. <br/>
When the redux store receives an <strong>action</strong> object, the state value of the store is changed. <br/>
The component using the state is changed by the changed state value <br/>

<strong>Actions are some kind of input to the store.</strong>

## reducer

When you give an action, that action is applied to create a different result. <br/>
<strong>It is Pure Function Immutable</strong>

```js
function reducer(previousState, action){ return newState; } 
```

## Usage
in store.js
```js
const store = createStore(reducer)
export default store
```

in App.js
```js
import store from './redux/store
```
## store methods
```js
store.getState()
```
Get the current store state

```js
store.dispatch(action)
```

Change the state of the store by putting an action


```js
const unsubscribe = store.subscribe(()=>{})
```

When the state of the store changes, the arrow function is executed.<br/>
unsubscribe() removes the subscribing function

## combineReducers

```js
const reducer = combineReducers({
  todos,
  filter
})
```

Separate reducers and combine them. <br/>

The divided reducers process actions by accessing different states.

## Ducks Pattern

### not useing createActions 
```js
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
```

### using createActions

```js
import {createActions, handleActions} from 'redux-actions'

export const {showAll, showComplete} = createActions('SHOW_ALL', 'SHOW_COMPLETE',{prefix: 'redux-start/filter'})

const initialState = "ALL"

const reducer = handleActions({
  SHOW_ALL: ()=>'ALL',
  SHOW_COMPLETE: ()=> 'COMPLETE'
}, initialState, {prefix: 'redux-start/filter'})

// reducer
export default reducer
```
