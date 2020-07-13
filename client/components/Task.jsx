import React from 'react'
import { connect } from 'react-redux'

import AddTaskButton from './AddTaskButton'
import AddTaskForm from './AddTaskForm'
import EditTask from './EditTask'
import DeleteTask from './DeleteTask'

function Task(props) {

  return (
    <li>
      // global state data
      <AddTaskButton/>
      <AddTaskForm/>
      <EditTask/>
      <DeleteTask/>
    </li>
  )
}

function mapStateToProps(globalState) {
  return {
    animals: globalState.animals
  }
}

export default connect(mapStateToProps)(Task)
