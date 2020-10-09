import React from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import Auth from "../components/Auth";
import {Main} from "../components/Main";


export const useRoutes = isAuthorization => {
  if(isAuthorization) {
    return (
      <Switch>
        <Route exact path='/' component={Main}/>
        <Redirect to='/'/>
      </Switch>
    )
  }
  return (
    <Switch>
      <Route exact path='/' component={Auth}/>
      <Redirect to='/'/>
    </Switch>
  )
}
