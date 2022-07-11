import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store';
import {Provider} from "react-redux";

let cartItemNumber=0;
store.subscribe(()=>{
  console.log("store : ",store)
  // console.log("store.getState() : ",store.getState())
  cartItemNumber=store.getState();
  // console.log("cartItemNumber : ",cartItemNumber)
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App/>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
