export const ADD_USER = 'USER/ADD_USER';

export const addUser = (userData) => {
    return {
        type: ADD_USER,
        payload: {
            userData
        }
    };
}

