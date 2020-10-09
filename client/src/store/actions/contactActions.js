import {BACKEND_URL} from "../../config/config";
import {DELETE_CONTACT, CREATE_CONTACT, GET_ALL_CONTACTS, CHANGE_CONTACT} from "../types";

const CONTACTS_URL = BACKEND_URL + 'contacts'


export function createContacts(contact) {
  return async dispatch => {
    dispatch({
      type: CREATE_CONTACT,
      payload: {fetching: true}
    })
    await fetch(CONTACTS_URL, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(contact)
    })
      .then(res => res.json())
      .then(resp => dispatch({
        type: CREATE_CONTACT,
        payload: {
          contacts: resp,
          fetching: false
        }
      }))
      .catch(err => dispatch({
        type: CREATE_CONTACT,
        payload: {
          fetching: false,
          error: err
        }
      }))
  }
}

export function getAllContacts() {
  return async dispatch => {
    dispatch({
      type: GET_ALL_CONTACTS,
      payload: {contacts: [], fetching: true}
    })
    await fetch(CONTACTS_URL)
      .then(res => res.json())
      .then(resp => {
        dispatch({
          type: GET_ALL_CONTACTS,
          payload: {
            fetching: false,
            contacts: resp
          }
        })
      })
      .catch(err => dispatch({
        type: GET_ALL_CONTACTS,
        payload: {
          fetching: false,
          error: err
        }
      }))
  }
}

export function deleteContact(id) {
  return async dispatch => {
    await fetch(CONTACTS_URL + '/' + id, {
      method: "DELETE",
      headers: {"Content-Type": "application/json"},
    })
      .then(dispatch({
        type: DELETE_CONTACT,
        payload: {
          fetching: false,
          contactId: id,
        }
      }))
      .catch(err => err())
  }
}

export function changeContact(id, contact) {
  return async dispatch => {
    await fetch(CONTACTS_URL + '/' + id, {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(contact)
    })
      .then(res => res.json())
      .then(resp => {
          console.log(resp)
          dispatch({
            type: CHANGE_CONTACT,
            payload: {
              contact: resp,
              fetching: false
            }
          })
        })
      .catch(err => dispatch({
        type: CHANGE_CONTACT,
        payload: {
          fetching: false,
          error: err
        }
      }))
  }
}
