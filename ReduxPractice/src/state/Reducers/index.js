import { combineReducers } from 'redux';
import { itemUser } from './itemUsers';


const reducers = combineReducers({
    items: itemUser  // reducers

})

export default reducers