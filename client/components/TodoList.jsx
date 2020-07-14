import React from 'react'
import { connect } from 'react-redux'

import Task from './Task'

function TodoList(props) {
  console.log(props)
  return (

    // shit was breaking because shit was trying to be used when shit was undefined.
    // Changing initialState in reducer to null fixed the issue
    <div>
    {props.tasks != null &&
      props.tasks.map(task => {
        return <Task task={task} key={task.id}/>
      })
    }
    </div>
  )
}


function mapStateToProps(globalState) {
  return {
    tasks: globalState.tasks
  }
}

export default connect(mapStateToProps)(TodoList)
