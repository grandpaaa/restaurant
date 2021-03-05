import * as types from '../actions/types'

const initialState = {
    isLoading: false,
    orders: [],
    order: {},
    error: '',
    orderResponse: ''
}

export default function orderReducer(state = initialState, action) {
    switch(action.type) {
        case types.GET_ORDER: 
            return {...state, isLoading: true}
        case types.GET_ORDER_SUCCESS: 
            return {...state, isLoading: false, orders: action.payload}
        case types.GET_ORDER_FAILED: 
            return {...state, isLoading: false, error: action.error}        
        case types.ADD_ORDER: 
            return {...state, isLoading: true}
        case types.ADD_ORDER_SUCCESS: 
            return {...state, isLoading: false, orderResponse: 'Successfully Added!', order: action.payload}
        case types.ADD_ORDER_FAILED: 
            return {...state, isLoading: false, error: action.error}
        default: 
            return state
    }
}