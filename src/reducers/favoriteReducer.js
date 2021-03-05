import * as types from '../actions/types'

const initialState = {
    isLoading: false,
    favorite: {},    
    error: '',
    favorites: []
}

export default function favoriteReducer(state = initialState, action) {
    switch(action.type) {
        case types.GET_FAVORITE: 
            return {...state, isLoading: true}
        case types.GET_FAVORITE_SUCCESS: 
            return {...state, isLoading: false, favorites: action.payload}
        case types.GET_FAVORITE_FAILED: 
            return {...state, isLoading: false, error: action.error}
        case types.ADD_FAVORITE: 
            return {...state, isLoading: true}
        case types.ADD_FAVORITE_SUCCESS: 
            return {...state, isLoading: false, favorite: action.payload}
        case types.ADD_FAVORITE_FAILED: 
            return {...state, isLoading: false, error: action.error}
        default: 
            return state
    }
}