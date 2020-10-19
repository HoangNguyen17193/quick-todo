import { combineReducers } from 'redux';

import taskReducer from './Task/TaskReducer';

const rootReducer = combineReducers({
    task: taskReducer,
});

export default rootReducer;