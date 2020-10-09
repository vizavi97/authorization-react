import {BACKEND_URL} from "../../config/config";
import {USER_LOGIN, USER_REGISTER} from "../types";
import {userVerify} from "../../utils/userVerify";


const AUTH_URL = BACKEND_URL + 'auth'



export function register(user) {
  return async (dispatch) => {
    await fetch(AUTH_URL,{
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(dispatch({
        type:USER_REGISTER,
        payload: true
      }))
      .catch(err => console.log('register: ',err))
  }
}

export function login(user) {
  return async (dispatch) => {
    await fetch(AUTH_URL)
      .then(res => res.json())
      .then(res => {
        const checkedUser = userVerify(res,user)
        if(checkedUser.access) {
          dispatch({
            type: USER_LOGIN,
            payload: {
              isAuthenticated: true,
              errors: null,
              user: checkedUser.user
            }
          })
        }
        else {
          dispatch({
            type: USER_LOGIN,
            payload: {
              isAuthenticated: false,
              errors: checkedUser.message,
              user: null
            }
          })
        }
      })
      .catch(err => console.log('login: ',err))
  }
}
