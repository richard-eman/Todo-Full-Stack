import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import HomePage from './HomePage'
import EditTask from './EditTask'
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
          <Route path="/EditTask" component={EditTask} />
          <h3><Link to="/EditTask">Edit</Link></h3>
        </Router>
      </div>
    )
  }
}


export default Tasks
