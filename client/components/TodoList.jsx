import React from 'react'
import { connect } from 'react-redux'

import Task from './Task'

function TodoList(props) {

  return (
    // map data from state with Task component
    <>
      <Task/>
    </>
  )
}

function mapStateToProps(globalState) {
  return {
    animals: globalState.animals
  }
}

export default connect(mapStateToProps)(TodoList)
