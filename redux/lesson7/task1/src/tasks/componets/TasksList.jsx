import React, { Component } from 'react';
import Task from './Task';
import PropTypes from 'prop-types'
import CreateTaskInput from './CreateTaskInput';
import { connect } from 'react-redux'
import * as tasksActions from '../tasks.actions.js'
import {sortedTasksListSelector} from '../tasks.selectors'


class TasksList extends Component {

    // state = {
    //     tasks: []
    // }


    componentDidMount() {
        this.props.getTasksList();
        // this.fetchTasks();
    }


    // fetchTasks = () => {
    //     fetchTasksList()
    //         .then(tasksList =>
    //             this.setState({
    //                 tasks: tasksList,
    //             })
    //         );
    // };

    // onCreate = text => {
    //     const newTask = {
    //         text,
    //         done: false,
    //     };
    //     createTask(newTask)
    //         .then(() => this.fetchTasks());
    // }


    // handleTaskDelete = (id) => {
    //     deleteTask(id).then(() => this.fetchTasks())
    // }

    render() {

        return (
            <div className='todo-list'>
                <CreateTaskInput onCreate={this.props.createTask} />
                <ul className="list">
                    {this.props.tasks.map(task => (
                        <Task key={task.id}
                            {...task}
                            onDelete={this.props.deleteTask}
                            onChange={this.props.updateTask} />
                    ))}
                </ul>
            </div>
        )
    }
}
TasksList.propTypes = {
    updateTask: PropTypes.func.isRequired,
    getTasksList: PropTypes.func.isRequired,
    tasks: PropTypes.arrayOf(PropTypes.shape()),
}

const mapDispatch = {
    getTasksList: tasksActions.getTasksList,
    updateTask: tasksActions.updateTask,
    createTask: tasksActions.createTask,
    deleteTask: tasksActions.deleteTask
}

const mapState = state => {
    return {
        tasks: sortedTasksListSelector(state)
    }
}


export default connect(mapState, mapDispatch)(TasksList);