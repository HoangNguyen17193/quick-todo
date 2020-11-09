import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button} from 'antd';
import {CloudUploadOutlined} from '@ant-design/icons'

import Tasks from '../../components/Tasks/Tasks';
import AddTask from '../../components/Tasks/AddTask/AddTask'
import {addTask, updateTask, saveTasks} from '../../store/Task/TaskAction';
import TaskCreatorFactory from '../../services/Tasks/TaskCreatorFactory';
import TaskValidator from '../../services/Tasks/TaskValidator';
import Spinner from '../../components/Common/Spinner/Spinner';
import classes from './Home.module.scss';


class Home extends Component {
    updateTask = (key, status) => {
        const currentTask = this.props.tasks.find(task => task.key === key);
        if (!currentTask) {
            return;
        }
        if (TaskValidator.validateChangeStatus(currentTask, status)) {
            this.props.updateTask(key, status);
        }
    };

    render() {
        if(this.props.saving) {
            return <Spinner />
        }
        return <div className={classes.Home}>
            <div className={classes.SaveWrapper}>
                {/*<Button*/}
                {/*    className={classes.SaveButton}*/}
                {/*    onClick={this.props.saveTasks}*/}
                {/*    icon={<CloudUploadOutlined/>}*/}
                {/*    type='primary'>*/}
                {/*    Save data to server*/}
                {/*</Button>*/}
            </div>

            <AddTask addTask={this.props.addTask}/>
            <Tasks
                tasks={this.props.tasks}
                updateTask={this.props.updateTask}
            />
        </div>
    }
}


const mapStateToProps = state => {
    const sortedTasks = state.task.tasks
        .map(task => TaskCreatorFactory.createTask(task.key, task.status, task.title))
        .sort((task1, task2) => task2.key - task1.key);
    return {
        tasks: sortedTasks,
        saving: state.task.saving
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addTask: (title) => dispatch(addTask(title)),
        updateTask: (key, status) => dispatch(updateTask(key, status)),
        saveTasks: () => dispatch(saveTasks())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
