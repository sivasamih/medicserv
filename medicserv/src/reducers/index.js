import performAddToCart from "./adtocart";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    performAddToCart: performAddToCart
});
export default rootReducer;