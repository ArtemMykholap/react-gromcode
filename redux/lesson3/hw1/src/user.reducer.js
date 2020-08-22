import { ADD_USER, DELETE_USER } from './user.actions'
const initialState = null

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            {
                return action.payload.language;
            };
        case DELETE_USER:
            {
                return null
            }
        default:
            return state
    }
};

export default usersReducer;