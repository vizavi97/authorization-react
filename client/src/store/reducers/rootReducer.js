import {combineReducers} from "redux";
import {authReducer} from './authReducer'
import {contactReducers} from "./contactReducers";

export const rootReducers = combineReducers({
    user: authReducer,
    contacts: contactReducers
})
