import { ADD_USER} from './users.actions.js'
const initialState = {
    usersList: null
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            {
                return {
                    ...state,
                    usersList: action.payload.usersList,
                }
            };
     
        default:
            return state
    }
};

export default usersReducer;