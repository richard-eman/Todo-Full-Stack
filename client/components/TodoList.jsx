import React from 'react'
import { connect } from 'react-redux'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import Tasks from './Tasks'
import HomePage from './HomePage'
import AddTask from './AddTask'

import { fetchTasks } from '../actions'

class Todo extends React.Component {
  state = {
    tasks: []
  }

  componentDidMount() {
    this.props.dispatch(fetchTasks())
  }

  // shit was breaking because shit was trying to be used when shit was undefined.
  // Changing initialState in reducer to null fixed the issue
  render() {
    return (
      <>
        <Router>
          <Route exact path="/" component={HomePage} />
          <Route path="/AddTask" component={AddTask} />
          <h3><Link to="/">Home</Link></h3>
          <h3><Link to="/AddTask">Add</Link></h3>
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
    tasks: globalState.tasks
  }
}

export default connect(mapStateToProps)(Todo)