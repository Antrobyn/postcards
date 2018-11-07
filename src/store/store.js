import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from './promise-middleware';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  composeEnhancers(
    applyMiddleware(
      promiseMiddleware
    )
  )
);

export default store;