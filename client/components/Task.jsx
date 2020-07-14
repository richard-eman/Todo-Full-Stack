import React from 'react'
import { connect } from 'react-redux'

import AddTaskButton from './AddTaskButton'
import AddTaskForm from './AddTaskForm'
import EditTask from './EditTask'
import DeleteTask from './DeleteTask'

function Task(props) {
  console.log('task component loaded', props)
 
  console.log('sdf', props)
  return (
    <li>
      <h2>{props.task.task_name}</h2>
      <AddTaskButton/>
      <AddTaskForm/>
      <EditTask/>
      <DeleteTask/>
    </li>
  )
}

// function mapStateToProps(globalState) {
//   return {
//     tasks: globalState.tasks
//   }
// }

// export default connect(mapStateToProps)(Task)
export default connect()(Task)
