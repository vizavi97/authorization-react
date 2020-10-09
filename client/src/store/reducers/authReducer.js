import {USER_LOGIN, USER_REGISTER} from "../types";

const initialState = {
  isAuthenticated : false,
  errors: null,
  user: null
}


export const authReducer = (state = initialState, action) => {
  const {type,payload} = action
  switch (type) {
    case USER_LOGIN:
      return {
        ...state,
        isAuthenticated: payload.isAuthenticated,
        errors: payload.errors,
        user: payload.user

      }
    case USER_REGISTER:
      return {
        ...state,
        isAuthenticated: payload
      }
    default: return state
  }
}
