import React from 'react'
import { connect } from 'react-redux'

import AddTaskButton from './AddTaskButton'
import AddTaskForm from './AddTaskForm'
import EditTask from './EditTask'
import DeleteTask from './DeleteTask'

function Task(props) {
const task = props.task
  return (
    <div>
      <h3>{task.task_name}</h3>
      <p>{task.details}</p>
      <p>Priority:</p>
      <p>{task.priority}</p>
      <AddTaskButton/>
      <AddTaskForm/>
      <EditTask/>
      <DeleteTask/>
    </div>
  )
}

// function mapStateToProps(globalState) {
//   return {
//     tasks: globalState.tasks
//   }
// }

// export default connect(mapStateToProps)(Task)
export default connect()(Task)
