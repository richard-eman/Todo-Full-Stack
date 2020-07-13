import React from 'react'
import { connect } from 'react-redux'

function EditTask(props) {

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

export default connect(mapStateToProps)(EditTask)
