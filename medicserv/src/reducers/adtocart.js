const initialState = {
    cartItems: []
};

const performAddToCart = (state = initialState, action) => {
    try {
        switch (action.type) {
            case "ADD":
                let cartItems=state.cartItems;
                cartItems.push(1);
                state['cartItems']=cartItems;
                console.log("IN performAddToCart cartItems > ",cartItems);
                return state;
            default:
                return state;
        }
    } catch (ex) { }
}
export default performAddToCart;