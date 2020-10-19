import React from 'react';

import classes from './Actions.module.scss';

const Actions = (props) => {
    if (!props.task.nextStatuses) {
        return null;
    }
    return props.task.nextStatuses.map(nextStatus => (
        <button key={nextStatus.status} onClick={() => props.updateTask(props.task.key, nextStatus.status)}
                className={classes[nextStatus.action]}>
            {nextStatus.action}
        </button>
    ));
};

export default Actions;