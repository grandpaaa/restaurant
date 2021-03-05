import ActionButton from 'antd/lib/modal/ActionButton'
import * as types from '../actions/types'
import isEmpty from '../validation/isEmpty'

const initialState = {
    isLoading: false,
    restaran: [],
    error: '',
    restaranResponce: '',
    pageSize: '',
    total: '',
    rest: {},
}

export default function restaranReducer(state = initialState, action) {
    switch(action.type) {
        case types.GET_RESTARAN:
            return {...state, isLoading: true}
        case types.GET_RESTARAN_SUCCESS: 
            return {...state, isLoading: false, restaran: action.payload}
        case types.GET_RESTARAN_FAILED: 
            return {...state, isLoading: false, error: action.error}
        case types.GET_REST: 
            return {...state, isLoading: true}
        case types.GET_REST_SUCCESS: 
            return {...state, isLoading: false, restaran: action.payload, pageSize: action.payload.pageSize, total: action.payload.total}
        case types.GET_REST_FAILED: 
            return {...state, isLoading: false, error: action.error}
        case types.ADD_RESTARAN:
            return {...state, isLoading: true}
        case types.ADD_RESTARAN_SUCCESS:
            return {...state, isLoading: false, restaranResponce: 'Successfully added'}
        case types.ADD_RESTARAN_FAILED: 
            return {...state, isLoading: false, error: action.error}
        case types.DEL_RESTARAN:
            return {...state, isLoading: true}
        case types.DEL_RESTARAN_SUCCESS: 
            return {...state, isLoading: false, restaranResponce: 'Successfully deleted'}
        case types.DEL_RESTARAN_FAILED: 
            return {...state, isLoading: false, error: action.error}
        default:
            return state;
    }
}