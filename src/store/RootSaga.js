import {spawn, all} from 'redux-saga/effects';

import {watchTask} from './Task/TaskSaga';

export default function* rootSaga() {
    yield all([
        spawn(watchTask),
    ]);
}