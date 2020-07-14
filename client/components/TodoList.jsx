import React from 'react'
import { connect } from 'react-redux'

import Task from './Task'

function TodoList(props) {
  console.log(props)
  return (
    // map data from state with Task component
    <ul>
    {props.tasks != null &&
      <Task task={props.tasks[0]}/>
    }
    </ul>
  )
}


function mapStateToProps(globalState) {
  return {
    tasks: globalState.tasks
  }
}

export default connect(mapStateToProps)(TodoList)
