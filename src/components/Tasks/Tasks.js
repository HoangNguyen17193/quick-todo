import React from 'react';
import {Table} from 'antd';

import Actions from './Task/Actions/Actions';
import Status from './Task/Status/Status';
import classes from './Tasks.module.scss';
import TaskStatus from '../../services/Tasks/TaskStatus';

const tasks = (props) => {
    const columns = [
        {
            title: 'Task',
            dataIndex: 'title',
            key: 'title',
            className: classes.Column,
            sorter: (a, b) => a.title.localeCompare(b.title)
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            className: classes.Column,
            sorter: (a, b) => a.status.localeCompare(b.status),
            filters: Object.keys(TaskStatus).map(key => ({text: key, value: key})),
            onFilter: (value, record) => record.status === value,
            render: status => <Status status={status}/>,
        },
        {
            title: 'Actions',
            dataIndex: 'nextStatuses',
            key: 'nextStatuses',
            className: classes.Column,
            width: 300,
            render: (nextStatuses, task) => <Actions task={task} updateTask={props.updateTask}/>,
        }
    ];

    return (
        <div className={classes.Tasks}>
            <h3 className={classes.Title}>All Tasks</h3>
            <Table
                className={classes.TasksTable}
                bordered={false}
                columns={columns}
                dataSource={props.tasks}
                pagination={false}/>
        </div>
    );
};

export default tasks;