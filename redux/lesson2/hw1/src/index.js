import store from './store'
import { addUser, deleteUser } from './users.actions'

store.dispatch(addUser({ name: 'Kim', id: 63 }))
store.dispatch(deleteUser(63))
store.dispatch(addUser({ name: 'George', id: 89 }))
store.dispatch(addUser({ name: 'Tom', id: 777 }))
const usersList = store.getState()
console.log(usersList)