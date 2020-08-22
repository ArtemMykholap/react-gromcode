import { increment, decrement, reset } from './counter.actions';
import { addUser, deleteUser, updateUser } from './users.actions';
import store from './store.js';



//   store.dispatch(decrement());
//   store.dispatch(decrement());
//   store.dispatch(decrement());

store.subscribe(() => console.log(store.getState()))
store.dispatch(addUser({ id: 1, name: 'Tom' }))
store.dispatch(addUser({ id: 2, name: 'Bob' }))
store.dispatch(deleteUser(1))
store.dispatch(updateUser(2, { name: 'John', age: 3 }))