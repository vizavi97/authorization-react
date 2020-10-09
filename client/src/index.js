import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from "./App";
import {applyMiddleware, createStore} from "redux";
import {rootReducers} from "./store/reducers/rootReducer";
import {composeWithDevTools} from "redux-devtools-extension/index";
import thunk from "redux-thunk";
import {Provider} from "react-redux";


const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk))
)

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)
serviceWorker.unregister();
