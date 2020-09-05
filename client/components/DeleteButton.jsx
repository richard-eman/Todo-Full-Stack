import React from 'react'
import { deleteTask } from '../apis'

class DeleteButton extends React.Component {
  state = {
  }

  handleClick = e => {
    deleteTask(this.props.id)
    window.location.reload() // refreshes page
  }

  render() {
    return (
      <button onClick={this.handleClick}>DeleteButton</button>
    )
  }
}

export default DeleteButton
