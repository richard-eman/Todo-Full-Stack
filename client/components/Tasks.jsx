import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import HomePage from './HomePage'
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
        <Router>
          <Link to="/edit">Edit Task</Link>
        </Router>
      </div>
    )
  }
}


export default Tasks
