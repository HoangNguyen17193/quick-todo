import Task from './Task';
import TaskStatus from "../TaskStatus";

export default class TodoTask extends Task {
    constructor(key, title) {
        super(key, title, TaskStatus.TODO);
        this.nextStatuses = [
            {
                action: 'Start',
                status: TaskStatus.IN_PROGRESS
            },
            {
                action: 'Delete',
                status: TaskStatus.DELETED
            }
        ]
    }
}