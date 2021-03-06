import React from 'react';
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import thunk from "redux-thunk";
import { applyMiddleware, compose } from 'redux';

const middlewares = [
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
];


const store = createStore(rootReducer, compose(...middlewares))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
