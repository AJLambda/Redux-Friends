import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import rootReducer from "./reducers";
import App from "./App";

// To start out, create a reducer that will be passed as the rootReducer to createStore.
// You will need to use redux-thunk as a middleware inside of src/index.js
// You'll want to be sure to pass it to applyMiddleware() then feed it into your createStore function.
// If you so choose, include redux-logger to your middleware. You're going to have plenty of action creators that will consume our API so you'll get plenty of actions triggered.
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

const rootElement = document.getElementById("root");
//Don't forget to hook up the store using the Provider tag inside of src/index.js, passing it your newly created store.
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
