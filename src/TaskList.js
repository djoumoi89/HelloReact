//src/TaskList.js
import React from 'react'
import Task from './Task'

const TaskList = ({ tasks, setTaskStatus }) => {
    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id} className="task-item">
                    <Task
                        task={task}
                        setTaskStatus={isDone => setTaskStatus(task.id, isDone)}
                    />
                </li>
            ))}
        </ul>
    )
}

export default TaskList
