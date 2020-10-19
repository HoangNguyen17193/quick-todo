import React, { useState } from 'react';
import { Input, Button } from 'antd';
import classes from './AddTask.module.scss';
import { PlusOutlined } from '@ant-design/icons';

const { Search } = Input;

export const AddTask = (props) => {
    const [title, setTitle] = useState('');
    const addTask = (title) => {
        if(!title) {
            return;
        }
        props.addTask(title);
        setTitle('');
    };
    return (
        <div>
            <h3 className={classes.Title}>New Task</h3>
            <Search
                placeholder='what needs to be done?'
                enterButton={<Button disabled={!title} icon={<PlusOutlined />} type='primary'>Add Task</Button>}
                size='large'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onSearch={value => addTask(value)}
            />
        </div>
    );
};

export default AddTask;