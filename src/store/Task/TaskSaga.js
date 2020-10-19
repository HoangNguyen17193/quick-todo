import axios from 'axios';
import {put, takeLatest, select} from 'redux-saga/effects';

import {startSaveTasks, saveTaskFail, saveTaskSuccess} from "./TaskAction";
import actionTypes from './TaskActionTypes';

const axiosInstance = axios.create({
    baseURL: 'https://react-todo-e217e.firebaseio.com/'
});

function* saveTasks() {
    try {
        yield put(startSaveTasks());
        const state = yield select();
        yield axiosInstance.put('/tasks.json', state.task.tasks);
        yield put(saveTaskSuccess());
    } catch (e) {
        yield put(saveTaskFail(e));
    }
}

export function* watchTask() {
    yield takeLatest(actionTypes.SAVE_TASKS, saveTasks);
}