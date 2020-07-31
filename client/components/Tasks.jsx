import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import DeleteButton from './DeleteButton'

class Tasks extends React.Component {
  state = {
  }

  componentDidMount() {

  }

  render() {
    return (
      <>
        <h1>Task</h1>
        <DeleteButton/>
      </>
    )
  }
}


export default Tasks
