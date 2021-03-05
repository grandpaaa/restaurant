import {all, put, takeLatest} from 'redux-saga/effects'
import axios from 'axios'
import * as types from '../actions/types'
import setAuthToken from '../utils/setAuthtoken.js'

function* getKitchen() {
    try {
        const kitchen = yield axios.get(`http://37.18.30.124:9000/api/kitchen`).then(res => res.data)
        yield put({type: types.GET_KITCHEN_SUCCESS, payload: kitchen});
    } catch(error) {
        yield put({type: types.GET_KITCHEN_FAILED, error});
    }
}

function* addKitchen(action) {
    const {data} = action
    try {
        const kitchen = yield axios.post(`http://37.18.30.124:9000/api/kitchen`, data).then(res => res.data)
        yield put({type: types.ADD_KITCHEN_SUCCESS, payload: kitchen});
        yield getKitchen()
    } catch(error) {
        yield put({type: types.ADD_KITCHEN_FAILED, error});
    }
}

function* delKitchen(action) {
    const {data} = action
    console.log(data)
    try {
        const kitchen = yield axios.delete(`http://37.18.30.124:9000/api/kitchen/${data}`).then(res => res.data)
        yield put({type: types.DEL_KITCHEN_SUCCESS, payload: kitchen});
        yield getKitchen()
    } catch(error) {
        yield put({type: types.DEL_KITCHEN_FAILED, error});
    }
}

function* editKitchen(action) {
    const {data, id} = action
    console.log(data)
    try {
        const kitchen = yield axios.put(`http://37.18.30.124:9000/api/kitchen/${id}`, {name: data.name}).then(res => res.data)
        yield put({type: types.EDIT_KITCHEN_SUCCESS, payload: kitchen});
        yield getKitchen()
    } catch(error) {
        yield put({type: types.EDIT_KITCHEN_FAILED, error});
    }
}

export function* kitchenSaga() {
    yield all([
        yield takeLatest(types.GET_KITCHEN, getKitchen),
        yield takeLatest(types.ADD_KITCHEN, addKitchen),
        yield takeLatest(types.DEL_KITCHEN, delKitchen),
        yield takeLatest(types.EDIT_KITCHEN, editKitchen),
    ])
}