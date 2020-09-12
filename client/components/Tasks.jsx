import React from 'react'
import { connect } from 'react-redux'
import { HashRouter as Router, Link } from 'react-router-dom'

import { setTaskToEdit, isUserEditingTask } from '../actions'

import DeleteButton from './DeleteButton'

class Tasks extends React.Component {
  state = {}
  
  handleClick = () => {
    this.props.dispatch(isUserEditingTask(true))
    this.props.dispatch(setTaskToEdit(this.props.task))
  }

  render() {
    const task = this.props.task

    return (
      <li>
        <div className="taskContent">
          <h3>{task.task_name}</h3>
          <p>{task.details}</p>
        </div>
        <div className="taskButtonArea">
          <p>{task.priority}</p>
          <Router>
            <Link to="/edit">
              <button onClick={this.handleClick}>Edit</button>
            </Link>
          </Router>
          <DeleteButton id={task.id} />
        </div>
      </li>
    )
  }
}

function mapStateToProps(gloabalState) {
  return {
    
  }
}

export default connect(mapStateToProps)(Tasks)
