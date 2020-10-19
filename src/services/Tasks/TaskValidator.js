export default class TaskValidator {
    static validateChangeStatus(task, nextStatus) {
        if(!task || !task.nextStatuses || !nextStatus) {
            return false;
        }
        return task.nextStatuses.map(status => status.status).includes(nextStatus);
    }
}