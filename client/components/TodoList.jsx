import React from 'react'
import { connect } from 'react-redux'
import { HashRouter as Router, Link } from 'react-router-dom'

import Tasks from './Tasks'

import { fetchTasks } from '../actions'

class Todo extends React.Component {
  state = {}

  componentDidMount() {
    this.props.dispatch(fetchTasks())
  }

  render() {
    return (
      <>
        <Router>
          <h3><Link to="/add">Add New Task</Link></h3>
        </Router>
        {this.props.tasks != null &&
          this.props.tasks.map(task => {
            return <Tasks task={task} key={task.id} />
          })
        }
      </>
    )
  }
}


function mapStateToProps(globalState) {
  return {
    tasks: globalState.tasks.tasks
  }
}

export default connect(mapStateToProps)(Todo)