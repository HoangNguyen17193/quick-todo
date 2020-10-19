import TodoTask from './Model/TodoTask';
import InProgressTask from './Model/InProgressTask';
import DoneTask from './Model/DoneTask';
import CanceledTask from './Model/CanceledTask';
import DeletedTask from './Model/DeletedTask';
import TaskStatus from './TaskStatus';

export default class TaskCreatorFactory {
    static createTask(key, status, title) {
        switch (status) {
            case TaskStatus.TODO : {
                return new TodoTask(key, title);
            }
            case TaskStatus.IN_PROGRESS: {
                return new InProgressTask(key, title);
            }
            case TaskStatus.DONE: {
                return new DoneTask(key, title);
            }
            case TaskStatus.CANCELED: {
                return new CanceledTask(key, title);
            }
            case TaskStatus.DELETED: {
                return new DeletedTask(key, title);
            }
            default: {
                return null;
            }
        }
    }
}