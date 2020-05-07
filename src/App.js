//src/App.js
import React, { Component } from 'react'
import TaskList from './TaskList'
import TaskForm from './TaskForm'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [
        { id: 1, label: 'Acheter du lait', isDone: true },
        { id: 2, label: 'Prendre des vacances', isDone: false }
      ]
    }
  }

  addTask = label => {
    const newTask = { id: this.state.nextId, label }
    this.setState({
      nextID: this.state.nextID + 1,
      tasks: [...this.state.tasks, newTask]
    })
  }

  setTaskStatus = (taskId, isDone) => {
    const { tasks } = this.state
    const taskIndex = tasks.findIndex(t => t.id === taskId)
    const tasksBefore = tasks.slice(0, taskIndex)
    const tasksAfter = tasks.slice(taskIndex + 1)
    const newTask = [...tasks[taskIndex], isDone ]
    this.setState({
      tasks: [...tasksBefore, newTask, ...tasksAfter]
    })
  }

  render() {
    return (
      <div>
        <h1>Tâches</h1>
        <TaskList
          tasks={this.state.tasks}
          setTaskStatus={this.setTaskStatus}
        />
        <TaskForm addTask={this.addTask} />
      </div>
    )
  }
}

export default App