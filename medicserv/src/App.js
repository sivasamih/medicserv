import React from 'react';
import './App.css';
import Home from "./site/home";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "./actions/index";

function App(props) {

  const myState = useSelector((state) => state.performAddToCart);
  const dispatch = useDispatch();
  const cartItems = myState.cartItems;

  return (
    <>
       <Home
          cartItemNumber={props.cartItemNumber}
          cartItems={cartItems}
          myState={myState}
          addToCart={() => dispatch(addToCart())}
        />
    </>
  );
}

export default App;
