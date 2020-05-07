// src/Task.js
import React, { Component } from 'react'
import './Task.css'

class Task extends Component {
    render() {
        const { task } = this.props;
        return (
            <label>
                <input
                    type="checkbox"
                    checked={task.isDone}
                    onChange={event => {
                        const isDone = event.target.checked
                        this.props.setTaskStatus(isDone)
                    }}
                />
                {task.label}
            </label>
        )
    }
}

export default Task
