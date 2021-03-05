import {combineReducers} from 'redux';
import auth from './authReducer'
import kitchen from './kitchenReducer'
import restaran from './restaranReducer'
import review from './reviewReducer'
import favorite from './favoriteReducer'
import order from './orderReducer'
export default combineReducers({
    auth,
    kitchen,
    restaran,
    review,
    favorite,
    order
})