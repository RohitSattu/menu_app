const cartReducer = (state = [], action) => {
    switch(action.type) {
        case "ADD_TO_CART":
            return state.concat([action.cart])
        case "REMOVE_FROM_CART":
            return state.filter((cart) => cart.id !== action.id)
        default:
            return state
    }
}

export default cartReducer