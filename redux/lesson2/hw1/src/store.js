import { createStore } from 'redux';
import { reducersOfUsers } from "./users.reducer";


const store = createStore(reducersOfUsers);
export default store;