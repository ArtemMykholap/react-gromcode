import { addProduct, removeProduct } from './cart.actions';
import { setUser, removeUser } from './user.actions';
import { setLanguage } from './language.actions';
import store from './store.js';

store.subscribe(() => console.log(store.getState()))





store.subscribe(() => console.log(store.getState()))
store.dispatch(setUser({ id: 1, name: 'Tom' }))
store.dispatch(setUser({ id: 2, name: 'Bob' }))
store.dispatch(addProduct({ id: 3, name: 'Milk' }))
store.dispatch(addProduct({ id: 5, name: 'Water' }))
store.dispatch(removeProduct(5))
store.dispatch(addProduct({ id: 6, name: 'Meat' }))
store.dispatch(setLanguage('jp'));
// store.dispatch(removeProduct(6))