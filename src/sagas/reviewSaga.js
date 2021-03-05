import {all, put, takeLatest} from 'redux-saga/effects'
import axios from 'axios'
import * as types from '../actions/types'
import isEmpty  from '../validation/isEmpty'
import { message } from 'antd'
import { getRest } from './restaranSaga'



function* getReview() {
    try {
        const reviews = yield axios.get('http://37.18.30.124:9000/api/review').then(res => res.data)
        yield put({type: types.GET_REV_SUCCESS, payload: reviews})
    }catch(error) {
        yield put({type: types.GET_REV_FAILED, error})
    }
}

function* addReview(action) {
    const {data} = action
    try {
        const review = yield axios.post('http://37.18.30.124:9000/api/review', data).then(res => res.data)
        yield put({type: types.ADD_REV_SUCCESS, payload: review})
        yield getRest({data: data.restaurantId})
    }catch(error){
        yield put({type: types.ADD_REV_FAILED, error})
    }
}

function* delReview(action) {
    const {data} = action
    try {
        yield axios.delete(`http://37.18.30.124:9000/api/review/${data}`).then(res => res.data)
        yield put({type: types.DEL_REV_SUCCESS})
        yield getReview()
    }catch(error) {
        yield put({type: types.DEL_REV_FAILED, error})
    }
}


export function* reviewSaga() {
    yield all([
        yield takeLatest(types.GET_REV, getReview),
        yield takeLatest(types.ADD_REV, addReview),
        yield takeLatest(types.DEL_REV, delReview),
    ])
}