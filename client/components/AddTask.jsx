import React from 'react'
import { connect } from 'react-redux'
import { link } from 'react-router-dom'

class AddTask extends React.Component {
  state = {
  }

  componentDidMount() {

  }

  render() {
    return (
      <h2>AddTask</h2>
    )
  }
}

function mapStateToProps(globalState) {
  return {

  }
}

export default connect(mapStateToProps)(AddTask)
