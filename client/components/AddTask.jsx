import React from 'react'
import { connect } from 'react-redux'
import { HashRouter as Router, Route } from 'react-router-dom'

class AddTask extends React.Component {
  state = {
  }

  componentDidMount() {

  }

  render() {
    return (
      <h1>AddTask</h1>
    )
  }
}

function mapStateToProps(globalState) {
  return {

  }
}

export default connect(mapStateToProps)(AddTask)
