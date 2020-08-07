import React from 'react'
import { connect } from 'react-redux'

import { deleteTask } from '../apis'

class DeleteButton extends React.Component {
  state = {
  }

  handleClick = e => {
    const id = this.props.task.id
    e.preventDefault()

    deleteTask(id)
  }

  render() {
    return (
      <button onClick={this.handleClick}>DeleteButton</button>
    )
  }
}

function mapStateToProps(globalState) {
  return {
    task: globalState.tasks.task
  }
}

export default connect(mapStateToProps)(DeleteButton)
