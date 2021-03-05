import * as types from './types';


export function getRestaran(data) {
    return {type: types.GET_RESTARAN, data}
}

export function getRest(data) {
    return {type: types.GET_REST, data}
}

export function addRestaran(data) {
    return {type: types.ADD_RESTARAN, data}
}

export function delRestaran(data) {
    return {type: types.DEL_RESTARAN, data}
}

