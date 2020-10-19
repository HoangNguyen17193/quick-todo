import Task from './Task';
import TaskStatus from "../TaskStatus";

export default class InProgressTask extends Task {
    constructor(key, title) {
        super(key, title, TaskStatus.IN_PROGRESS);
        this.nextStatuses = [
            {
                action: 'Complete',
                status: TaskStatus.DONE
            },
            {
                action: 'Cancel',
                status: TaskStatus.CANCELED
            }
        ]
    }
}