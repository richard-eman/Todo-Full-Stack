import React from 'react'
import { connect } from 'react-redux'

import AddTaskButton from './AddTaskButton'
import AddTaskForm from './AddTaskForm'
import EditTaskForm from './EditTaskForm'
import EditTaskButton from './EditTaskButton'
import DeleteTask from './DeleteTask'

function Task(props) {
const task = props.task
  return (
    <div>
      <h3>{task.task_name}</h3>
      <p>{task.details}</p>
      <p>Priority:</p>
      <p>{task.priority}</p>
      {/* taskId prop is for if I'd want to make only a certain button disapear. Currently, all do because global state boolean is changed. */}
      {props.showAddTaskForm ?
      <AddTaskForm/>
      :
      <AddTaskButton taskId={props.task.id}/>
      }
      {props.showEditForm ?
      <EditTaskForm/>
      :
      <EditTaskButton taskId={props.task.id}/>
      }
      <DeleteTask/>
    </div>
  )
}

function mapStateToProps(globalState) {
  return {
    // I'm sorry
    showAddTaskForm: globalState.showAddButton,

    showEditForm: globalState.showEditForm,
  }
}

export default connect(mapStateToProps)(Task)
