import {all, put, takeLatest} from 'redux-saga/effects'
import axios from 'axios'
import * as types from '../actions/types'
import setAuthToken from '../utils/setAuthtoken.js'

function* getRestaran(action) {
    const {data} = action
    try {
        const restaran = yield axios.get(`http://37.18.30.124:9000/api/restaurant?query=${data.query}&page=${data.page}`).then(res => res.data)
        yield put({type: types.GET_RESTARAN_SUCCESS, payload: restaran});
    } catch(error) {
        yield put({type: types.GET_RESTARAN_FAILED, error});
    }
}

export function* getRest(action) {
    const { data } = action
    try {
        const restaurant = yield axios.get(`http://37.18.30.124:9000/api/restaurant/${data}`).then(res => res.data)
        yield put({type: types.GET_REST_SUCCESS, payload: restaurant})
    } catch(err) {
        yield put({type: types.GET_REST_FAILED, err})
    }
}

function* addRestaran(action) {
    const {data} = action
    try {
        const fm = new FormData();
        fm.append('image', data.image)
        fm.append('name', data.name)
        fm.append('location', data.location)
        fm.append('phone', data.phone)
        fm.append('amountOfPlace', data.amountOfPlace)
        fm.append('averageBill', data.averageBill)
        fm.append('kitchens', data.kitchens)
        fm.append('rate', data.rate)

        const restaran = yield axios.post(`http://37.18.30.124:9000/api/restaurant`, fm).then(res => res.data)
        yield put({type: types.ADD_RESTARAN_SUCCESS, payload: restaran});
        yield getRestaran({query: '', page: ''})
    } catch(error) {
        yield put({type: types.ADD_RESTARAN_FAILED, error});
    }
}

function* delRestaran(action) {
    const {data} = action
    console.log(data)
    try {
        const restaran = yield axios.delete(`http://37.18.30.124:9000/api/restaurant/${data}`).then(res => res.data)
        yield put({type: types.DEL_RESTARAN_SUCCESS, payload: restaran});
        yield getRestaran({query: '', page: ''})
    } catch(error) {
        yield put({type: types.DEL_RESTARAN_FAILED, error});
    }
}



export function* restaranSaga() {
    yield all([
        yield takeLatest(types.GET_RESTARAN, getRestaran),
        yield takeLatest(types.ADD_RESTARAN, addRestaran),
        yield takeLatest(types.DEL_RESTARAN, delRestaran),
        yield takeLatest(types.GET_REST, getRest)
    ])
}