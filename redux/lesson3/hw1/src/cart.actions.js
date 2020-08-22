export const ADD_PRODUCT = 'PRODUCT/ADD_PRODUCT';
export const REMOVE_PRODUCT = 'PRODUCT/REMOVE_PRODUCT';


export const addProduct = (userData) => {
    return {
        type: ADD_PRODUCT,
        payload: {
            userData
        }
    };
}


export const removeProduct = (userId, userData) => {
    return {
        type: REMOVE_PRODUCT,
        payload: {
            userId,
            userData,
        }
    };
}