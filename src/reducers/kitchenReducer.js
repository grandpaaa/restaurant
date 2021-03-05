import ActionButton from 'antd/lib/modal/ActionButton'
import * as types from '../actions/types'
import isEmpty from '../validation/isEmpty'

const initialState = {
    isLoading: false,
    kitchen: [],
    error: '',
    kitchenResponce: ''
}

export default function kitchenReducer(state = initialState, action) {
    switch(action.type) {
        case types.GET_KITCHEN:
            return {...state, isLoading: true}
        case types.GET_KITCHEN_SUCCESS: 
            return {...state, isLoading: false, kitchen: action.payload}
        case types.GET_KITCHEN_FAILED: 
            return {...state, isLoading: false, error: action.error}
        case types.ADD_KITCHEN:
            return {...state, isLoading: true}
        case types.ADD_KITCHEN_SUCCESS: 
            return {...state, isLoading: false, kitchenResponce: 'Successfully added'}
        case types.ADD_KITCHEN_FAILED: 
            return {...state, isLoading: false, error: action.error}    
        case types.DEL_KITCHEN:
            return {...state, isLoading: true}
        case types.DEL_KITCHEN_SUCCESS: 
            return {...state, isLoading: false, kitchenResponce: 'Successfully deleted'}
        case types.DEL_KITCHEN_FAILED: 
            return {...state, isLoading: false, error: action.error}
        case types.EDIT_KITCHEN:
            return {...state, isLoading: true}
        case types.EDIT_KITCHEN_SUCCESS: 
            return {...state, isLoading: false, kitchenResponce: 'Successfully edited'}
        case types.EDIT_KITCHEN_FAILED: 
            return {...state, isLoading: false, error: action.error}  
        default:
            return state;
    }
}