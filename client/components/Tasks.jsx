import React from 'react'
import { connect } from 'react-redux'
import { HashRouter as Router, Link } from 'react-router-dom'

import DeleteButton from './DeleteButton'

class Tasks extends React.Component {
  state = {
  }

  componentDidMount() {

  }
  
  handleClick = () => {
    this.props.dispatch()
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
          <Link to="/edit">
            <button onClick={this.handleClick}>Edit Task</button>
          </Link>
        </Router>
      </div>
    )
  }
}

function mapStateToProps(gloabalState) {
  return {
    
  }
}

export default connect(mapStateToProps)(Tasks)
