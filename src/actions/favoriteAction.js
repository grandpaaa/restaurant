import * as types from './types'

export function addFavorite(data) {
    return {type: types.ADD_FAVORITE, data}
}

export function getFavorite() {
    return {type: types.GET_FAVORITE}
}