import React from 'react'
import { connect } from 'react-redux'
import { HashRouter as Router, Route } from 'react-router-dom'

class EditTask extends React.Component {
  state = {
  }

  componentDidMount() {

  }

  render() {
    return (
      <h1>EditTask</h1>
    )
  }
}

function mapStateToProps(globalState) {
  return {

  }
}

export default connect(mapStateToProps)(EditTask)
