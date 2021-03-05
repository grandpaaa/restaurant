import {all, put, takeLatest} from 'redux-saga/effects'
import axios from 'axios'
import * as types from '../actions/types'
import setAuthToken from '../utils/setAuthtoken.js'
import { message } from 'antd'

function* getOrder(action) {
    const {data} = action
    try {
        const order = yield axios.get(`http://37.18.30.124:9000/api/order`, data).then(res => res.data)
        yield put({type: types.GET_ORDER_SUCCESS, payload: order});
    } catch(error) {
        yield put({type: types.GET_ORDER_FAILED, error});
    }
}

function* addOrder(action) {
    const {data} = action
    try {
        const order = yield axios.post(`http://37.18.30.124:9000/api/order`, data).then(res => res.data)
        yield put({type: types.ADD_ORDER_SUCCESS, payload: order});
        message.success('Успешная бронь')
    } catch(error) {
        yield put({type: types.ADD_ORDER_FAILED, error});
    }
}

export function* orderSaga() {
    yield all([
        yield takeLatest(types.GET_ORDER, getOrder),
        yield takeLatest(types.ADD_ORDER, addOrder),
    ])
}