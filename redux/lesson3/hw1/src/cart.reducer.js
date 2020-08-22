import { ADD_PRODUCT, REMOVE_PRODUCT } from './cart.actions.js';

const initialState = {
    products: []
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            {
                return {
                    ...state,
                    products: state.products.concat(action.payload.userData)
                }
            };
        case REMOVE_PRODUCT:
            {
                const newList = state.products.filter(
                    user => user.id !== action.payload.userId
                )
                return {
                    ...state,
                    products: newList
                };
            }
        default:
            return state
    }
};

export default cartReducer;