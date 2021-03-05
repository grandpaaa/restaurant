import * as types from '../actions/types'
import isEmpty from '../validation/isEmpty'

const initialState = {
    isLoading: false,
    reviews: [],
    review: {},
    error: ''
    
}

export default function revReducer(state = initialState, action) {
    switch(action.type) {
        case types.GET_REV: 
            return {...state, isLoading: true}
        case types.GET_REV_SUCCESS: 
            return {...state, isLoading: false, reviews: action.payload}
        case types.GET_REV_FAILED: 
            return {...state, isLoading: false, error: action.error}        
        case types.ADD_REV: 
            return {...state, isLoading: true}
        case types.ADD_REV_SUCCESS: 
            return {...state, isLoading: false, addResponse: 'Successfully Added!', review: isEmpty(action.payload), review: action.payload}
        case types.ADD_REV_FAILED: 
            return {...state, isLoading: false, error: action.error}
        case types.DEL_REV: 
            return {...state, isLoading: true}
        case types.DEL_REV_SUCCESS: 
            return {...state, isLoading: false, delResponse: 'Successfully deleted!'}
        case types.DEL_REV_FAILED: 
            return {...state, isLoading: false, error: action.error}
        
        default: 
            return state
    }
}