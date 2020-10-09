import {DELETE_CONTACT, CREATE_CONTACT, GET_ALL_CONTACTS, CHANGE_CONTACT} from "../types";

const initialState = {
  contacts: [],
  fetching: false,
  error: null
}


export const contactReducers = (state = initialState , action) => {
  const {type,payload} = action
  switch (type) {
    case GET_ALL_CONTACTS:
      return {
        ...state,
        fetching: payload.fetching,
        contacts: payload.contacts,
        error: payload.error
      }
    case CREATE_CONTACT:
      console.log(payload);
      return {
        ...state,
        fetching: payload.fetching,
        contacts: payload.contacts ? [...state.contacts, payload.contacts] : [...state.contacts],
        error: payload.error
      }
    case DELETE_CONTACT:
      return {
        ...state,
        fetching: payload.fetching,
        contacts: state.contacts.filter(contact => contact.id !== payload.contactId)
      }
    case CHANGE_CONTACT:
      return {
        ...state,
        fetching: payload.fetching,
        contacts: [...state.contacts.filter(contact => contact.id !== payload.contact.id),payload.contact]
      }
    default: return state
  }

}
