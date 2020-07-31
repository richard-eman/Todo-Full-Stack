import React from 'react'
import { connect } from 'react-redux'

import Tasks from './Tasks'

import { getTasks } from '../apis'
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
      <div>
        {this.props.tasks != null &&
          this.props.tasks.map(task => {
            return <Tasks task={task} key={task.id} />
          })
        }
      </div>
    )
  }
}


function mapStateToProps(globalState) {
  return {
    tasks: globalState.tasks
  }
}

export default connect(mapStateToProps)(Todo)