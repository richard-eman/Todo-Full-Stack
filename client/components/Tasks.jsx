import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import DeleteButton from './DeleteButton'

class Tasks extends React.Component {
  state = {
  }

  componentDidMount() {

  }

  render() {
    const task = this.props.task

    return (
      <div>
        <h3>{task.task_name}</h3>
        <p>{task.details}</p>
        <p>Priority: {task.priority}</p>
        <DeleteButton />
      </div>
    )
  }
}


export default Tasks
