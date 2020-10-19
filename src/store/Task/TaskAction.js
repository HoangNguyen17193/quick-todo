import actionTypes from './TaskActionTypes';

export const addTask = (title) => {
    return {
        title,
        type: actionTypes.ADD_TASK
    }
};

export const updateTask = (key, status) => {
    return {
        key,
        status,
        type: actionTypes.UPDATE_TASK
    }
};

export const startSaveTasks = () => {
    return {
        type: actionTypes.START_SAVE_TASKS
    }
};

export const saveTasks = () => {
    return {
        type: actionTypes.SAVE_TASKS
    }
};

export const saveTaskSuccess = () => {
    return {
        type: actionTypes.SAVE_TASKS_SUCCESS
    }
};

export const saveTaskFail = (e) => {
    return {
        type: actionTypes.SAVE_TASKS_FAIL,
        error: e
    }
};



