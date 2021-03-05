import * as types from './types'

export function addReview(data) {
    return {type: types.ADD_REV, data}
}

export function getReview() {
    return {type: types.GET_REV}
}

export function delReview(data) {
    return {type: types.DEL_REV, data}
}