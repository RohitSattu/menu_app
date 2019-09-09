import cartReducer from './cart'
import loggedReducer from './isLogged'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    cartReducer,
    loggedReducer
})

export default rootReducer