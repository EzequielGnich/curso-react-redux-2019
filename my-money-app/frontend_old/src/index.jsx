import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import promise from "redux-promise";
import multi from "redux-multi";
import thunk from "redux-thunk";

import Routes from "./main/routes";
import Reducers from "./main/reducers";

// configuração do devTools
const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = applyMiddleware(multi, thunk, promise)(createStore)(
  Reducers,
  devTools
);
const rootElement = document.getElementById("app");

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  rootElement
);
