import {combineReducers} from 'redux'
import counterReducer from './ConterReducer'
import productReducer from './productreducer'
export default combineReducers({

    product:productReducer,
   counter:counterReducer

})