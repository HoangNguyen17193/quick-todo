import React from 'react';
import {List} from 'antd';

import classes from './Task.module.scss';
import Actions from './Actions/Actions';
import Status from './Status/Status'

const task = (props) => (
    <List.Item>
        <span>{props.task.title}</span>
        <div className={classes.TaskStatus}>
            <Status status={props.task.status}/>
        </div>
        <div className={classes.TaskActions}>
            <Actions task={props.task} updateTask={props.updateTask}/>
        </div>
    </List.Item>

);

export default task;
