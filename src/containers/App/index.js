import React from 'react';
import Router from "../Router";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { generateReducers } from "../../reducers";
import { routerMiddleware } from "connected-react-router";

export const history = createBrowserHistory();

const middlewares = [
  applyMiddleware(routerMiddleware(history), thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
];

const store = createStore(generateReducers(history), compose(...middlewares));

export const App = () => (
    <Provider store={store}>
      <Router history={history} />
{/* <h1>Spotenu</h1> */}
    </Provider>
  );

export default App;

