import {all, put, takeLatest} from 'redux-saga/effects'
import axios from 'axios'
import * as types from '../actions/types'

function* getFavorite() {
    try {
        const favorites = yield axios.get('http://37.18.30.124:9000/api/favorite').then(res => res.data)
        yield put({type: types.GET_FAVORITE_SUCCESS, payload: favorites})
    } catch(error) {
        yield put({type: types.GET_FAVORITE_FAILED, error})
    }
}

function* addFavorite(action) {
    const {data} = action
    try {
        const favorites = yield axios.post('http://37.18.30.124:9000/api/favorite', data).then(res => res.data)
        yield getFavorite()
        yield put({type: types.ADD_FAVORITE_SUCCESS, payload: favorites})
    } catch(err) {
        yield put({type: types.ADD_FAVORITE_FAILED, err})
    }
}

export function* favoriteSaga() {
    yield all([
        yield takeLatest(types.ADD_FAVORITE, addFavorite),
        yield takeLatest(types.GET_FAVORITE, getFavorite),
    ])
}