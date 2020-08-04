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
          <Route exact path="/" component={HomePage} />
        </Router>
        <button href="/edit:id"></button>
      </div>
    )
  }
}


export default Tasks
