import React from 'react'
import { deleteTask } from '../apis'

class DeleteButton extends React.Component {
  state = {
  }

  handleClick = e => {
    const task = {id: this.props.id}
    e.preventDefault()

    deleteTask(task)
  }

  render() {
    return (
      <button onClick={this.handleClick}>DeleteButton</button>
    )
  }
}

export default DeleteButton
