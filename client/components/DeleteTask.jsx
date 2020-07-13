import React from 'react'
import { connect } from 'react-redux'

function DeleteTask(props) {

  return (
    <>
    </>
  )
}

function mapStateToProps(globalState) {
  return {
    animals: globalState.animals
  }
}

export default connect(mapStateToProps)(DeleteTask)
