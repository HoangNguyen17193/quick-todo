import React from 'react';
import {Tag} from 'antd';
import {CheckCircleOutlined, ClockCircleOutlined, SyncOutlined, ExclamationCircleOutlined, CloseCircleOutlined} from '@ant-design/icons';

import TaskStatus from '../../../../services/Tasks/TaskStatus';
import classes from './Status.module.scss';

const Status = (props) => {
    if(props.status === TaskStatus.TODO) {
        return <Tag className={classes.TaskStatus}  icon={<ClockCircleOutlined />} color='#8CA2A5'>
            {props.status}
        </Tag>
    }
    if(props.status === TaskStatus.IN_PROGRESS) {
        return <Tag className={classes.TaskStatus}  icon={<SyncOutlined spin />} color='#0CA9ED'>
            {props.status}
        </Tag>
    }
    if(props.status === TaskStatus.CANCELED) {
        return <Tag className={classes.TaskStatus}  icon={<ExclamationCircleOutlined />} color='#FF9B00'>
            {props.status}
        </Tag>
    }
    if(props.status === TaskStatus.DONE) {
        return <Tag className={classes.TaskStatus}  icon={<CheckCircleOutlined />} color='#2FC6AB'>
            {props.status}
        </Tag>
    }
    if(props.status === TaskStatus.DELETED) {
        return <Tag className={classes.TaskStatus}  icon={<CloseCircleOutlined />} color='#FC636B'>
            {props.status}
        </Tag>
    }
    return null;
};

export default Status;