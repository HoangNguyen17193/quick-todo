import Task from './Task';
import TaskStatus from "../TaskStatus";

export default class Canceled extends Task {
    constructor(key, title) {
        super(key, title, TaskStatus.CANCELED);
        this.nextStatuses = [
            {
                action: 'Delete',
                status: TaskStatus.DELETED
            }
        ]
    }
}