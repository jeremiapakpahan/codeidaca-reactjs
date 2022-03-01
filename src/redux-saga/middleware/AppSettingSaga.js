import {
    all,
    call,
    fork,
    put,
    takeEvery,
    takeLatest,
} from 'redux-saga/effects';

import apiTalent from '../../api/apiTalent';
import {doGetTalentSucceed, doGetTalentFailed, doUpdateTalentFailed, doUpdateTalentSucceed, doUpdateTalentNoFileSucceed, doUpdateTalentNoFileFailed} from '../actions/AppSettingAction'

//5.redux-saga effect berfungsi untuk medeteksi jika trjadi pengiriman request dari frontend
//disini akan diimport api yang ada di backend untuk dapat dipanggil
//yield akan melakukan panggilan data,ketika pemanggilan api berhasil makan akan mendapat respon succedd
//jika gagal makan akan mendapat failed

function* handleGetTalent(action) {
    const {payload} = action
    try {
        const result = yield call(apiTalent.getTalent, payload);
        yield put(doGetTalentSucceed(result))
    } catch (error) {
        yield put(doGetTalentFailed(error));
    }
}


function* handleUpdateTalent(action) {
    const {payload} = action
    try {
        const result = yield call(apiTalent.updateTalent, payload);
        yield put(doUpdateTalentSucceed(result.data))
    } catch (error) {
        yield put(doUpdateTalentFailed(error));
    }
}

function* handleUpdateTalentNoFile(action) {
    const {payload} = action
    try {
        const result = yield call(apiTalent.updateTalentNoFile, payload);
        yield put(doUpdateTalentNoFileSucceed(result.data))
    } catch (error) {
        yield put(doUpdateTalentNoFileFailed(error));
    }
}


export {
    handleGetTalent,
    handleUpdateTalent,
    handleUpdateTalentNoFile
   // handleTalent
}