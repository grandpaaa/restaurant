import * as types from './types'

export function addOrder(data) {
    return {type: types.ADD_ORDER, data}
}

export function getOrder() {
    return {type: types.GET_ORDER}
}
