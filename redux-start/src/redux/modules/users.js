import axios from "axios"

// define action type
// 깃헙 api 호출을 시작
export const GET_USERS_START = 'redux-start/users/GET_USERS_START'

// 깃헙 api 호출 응답이 성공적인경우
export const GET_USERS_SUCCESS = 'redux-start/users/GET_USERS_SUCCESS'

// 깃헙 api 호출 응답이 성공적인경우
export const GET_USERS_FAIL = 'redux-start/users/GET_USERS_FAIL'

// redux-promise-middleware
const GET_USERS = "redux-start/users/GET_USERS"

export const GET_USERS_PENDING = 'redux-start/users/GET_USERS_PENDING';
export const GET_USERS_FULFILED = 'redux-start/users/GET_USERS_FULFILED';
export const GET_USERS_REJECTED = 'redux-start/users/GET_USERS_REJECTED'



// create action function
export function getUsersStart() {
  return {
    type: GET_USERS_START
  }
}

export function getUsersSuccess(data) {
  return {
    type: GET_USERS_SUCCESS,
    data
  }
}

export function getUsersFail(error) {
  return {
    type: GET_USERS_FAIL,
    error
  }
}


//init
const initialState = {
  loading: false,
  data: [],
  error: null
}

// reducer
export default function reducer(state = initialState, action) {
  if (action.type === GET_USERS_START || action.type === GET_USERS_PENDING) {
    return {
      ...state,
      loading: true,
      error: null
    }
  }

  if (action.type === GET_USERS_FULFILED) {
    return {
      ...state,
      loading: false,
      data: action.payload
    }
  }

  if (action.type === GET_USERS_FAIL) {
    return {
      ...state,
      loading: false,
      error: action.error
    }
  }

  return state
}

// redux-thunk
export function getUsersThunk() {
  return async (dispatch) => {
    try {
      dispatch(getUsersStart())
      const res = await axios.get('https://api.github.com/users')
      dispatch(getUsersSuccess(res.data))
    } catch (error) {
      dispatch(getUsersFail(error))
    }
  }
}

// redux-promise-middleware


export function getUsersPromise() {
  return {
    type: GET_USERS,
    payload: async () => {
      const res = await axios.get('https://api.github.com/users')
      return res.data;
    }
  }
}