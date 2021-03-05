import {all} from 'redux-saga/effects';
import {authSaga} from './authSaga';
import {kitchenSaga} from './kitchenSaga';
import {restaranSaga} from './restaranSaga'
import {reviewSaga} from './reviewSaga'
import {favoriteSaga} from './favoriteSaga'
import {orderSaga} from './orderSaga'

export default function* rootSaga() {
    yield all([
        authSaga(),
        kitchenSaga(),
        restaranSaga(),
        reviewSaga(),
        favoriteSaga(),
        orderSaga()
    ])
}