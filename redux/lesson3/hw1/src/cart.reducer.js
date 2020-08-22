import { ADD_PRODUCT, REMOVE_PRODUCT } from './cart.actions.js';

const initialState = {
    cartList: []
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            {
                return {
                    ...state,
                    cartList: state.cartList.concat(action.payload.userData)
                }
            };
        case REMOVE_PRODUCT:
            {
                const newList = state.cartList.filter(
                    user => user.id !== action.payload.userId
                )
                return {
                    ...state,
                    cartList: newList
                };
            }
        default:
            return state
    }
};

export default cartReducer;