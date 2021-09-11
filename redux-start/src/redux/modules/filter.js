import {createActions, handleActions} from 'redux-actions'

export const {showAll, showComplete} = createActions('SHOW_ALL', 'SHOW_COMPLETE',{prefix: 'redux-start/filter'})

const initialState = "ALL"

const reducer = handleActions({
  SHOW_ALL: ()=>'ALL',
  SHOW_COMPLETE: ()=> 'COMPLETE'
}, initialState, {prefix: 'redux-start/filter'})

// reducer
export default reducer