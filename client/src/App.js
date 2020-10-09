import React from 'react';
import {useRoutes} from "./hooks/useRoutes";
import {Container} from "./components/Container";
import {connect} from "react-redux";

function App(props) {
  const routes = useRoutes(props.isAuthenticated)
  return (
    <Container children={routes}/>
  )
}

export default connect(state=>state.user,null)(App);
