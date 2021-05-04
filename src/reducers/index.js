import contactListReducer from './contactListReducer'; 
import {combineReducers} from 'redux'; 

const rootReducer = combineReducers({
    contactList: contactListReducer
})

export default rootReducer; 