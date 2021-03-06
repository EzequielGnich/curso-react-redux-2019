import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from './serviceWorker';
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import promise from "redux-promise";
import multi from "redux-multi";
import thunk from "redux-thunk";

import AuthOrApp from './main/authOrApp'
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
    <AuthOrApp />
  </Provider>,
  rootElement
);

serviceWorker.register();
