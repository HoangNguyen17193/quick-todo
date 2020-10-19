import actionTypes from './TaskActionTypes';
import TaskStatus from '../../services/Tasks/TaskStatus';

const initialState = {
    tasks: [],
    saving: false,
};

const burgerBuilderReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TASK: {
            const newTask = {
                key:  Date.now(),
                title: action.title,
                status: TaskStatus.TODO
            };
            return {
                ...state,
                tasks: [...state.tasks, newTask]
            };
        }
        case actionTypes.UPDATE_TASK: {
            const {key, status} = action;
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    if(task.key === key) {
                        return {...task, status};
                    }
                    return task;
                })
            };
        }
        case actionTypes.START_SAVE_TASKS: {
            return {
                ...state,
                saving: true
            }
        }
        case actionTypes.SAVE_TASKS_SUCCESS: {
            return {
                ...state,
                saving: false
            }
        }
        case actionTypes.SAVE_TASKS_FAIL: {
            // handler error
            console.log(action.error);
            return {
                ...state,
                saving: false
            }
        }
        default:
            return state
    }
};

export default burgerBuilderReducer;