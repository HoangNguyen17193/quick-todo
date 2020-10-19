import Task from './Task';
import TaskStatus from "../TaskStatus";

export default class DoneTask extends Task {
    constructor(key, title) {
        super(key, title, TaskStatus.DELETED);
    }
}