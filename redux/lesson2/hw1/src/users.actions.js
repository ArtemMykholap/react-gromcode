export const ADD = 'USERS/ADD';
export const DELETE = 'USERS/DELETE';


export const addUser = (user) => {
    return {
        type: ADD,
        user: user,
    }
}
export const deleteUser = (id) => {
    return {
        type: DELETE,
        id
    }
}