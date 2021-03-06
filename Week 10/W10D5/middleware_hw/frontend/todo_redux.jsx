import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';


document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
  let store = configureStore(preloadedState);

  //Phase 1:
  // store.dispatch = addLoggingToDispatch(store);

  //Phase 2:
  // store = applyMiddlewares(store, addLoggingToDispatch)

  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
});

window.store = configureStore;

//Phase 1: 
// const addLoggingToDispatch = (store) => {
//   const origDispatch = store.dispatch;
//   return (action) => {
//     console.log(`Old state: ${store.getState()}`);
//     console.log(action);
//     origDispatch(action);
//     console.log(`New state: ${store.getState()}`);
//   }}

//Phase 2:

  // const addLoggingToDispatch = store => next => action => {
  //   console.log(`Old state: ${store.getState()}`);
  //   console.log(action);
  //   next(action);
  //   console.log(`New state: ${store.getState()}`);
  // }

  // const applyMiddlewares = (store, ...middlewares) => {
  //   let dispatch = store.dispatch;

  //   middlewares.forEach(middleware => {
  //     dispatch = middleware(store)(dispatch)
  //   })
    
  //   return Object.assign({}, store, { dispatch })
  // }

