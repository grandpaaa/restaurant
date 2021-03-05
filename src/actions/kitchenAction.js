import * as types from './types';


export function getKitchen() {
    return {type: types.GET_KITCHEN}
}

export function addKitchen(data) {
    return {type: types.ADD_KITCHEN, data}
}

export function delKitchen(data) {
    return {type: types.DEL_KITCHEN, data}
}

export function editKitchen(data, id) {
    return {type: types.EDIT_KITCHEN, data, id}
}
