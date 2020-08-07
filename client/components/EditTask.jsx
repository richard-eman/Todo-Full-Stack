import React from 'react'
import { connect } from 'react-redux'

import { editTask } from '../apis'

class EditTask extends React.Component {
  state = {
    name: this.props.task.task_name,
    details: this.props.task.details,
    priority: this.props.task.priority,
    completed: this.props.task.completed,
  }

  handleChange = e => {
    if ( e.target.name == "details"){
      this.setState({
        details: e.target.value,
      })
    }
    else if ( e.target.name == "name"){
      this.setState({
        name: e.target.value,
      })
    }
  }

  handleSubmit = e => {
    const task = {
      id: this.props.task.id,
      task_name: this.state.name,
      details: this.state.details
    }
    e.preventDefault()
    editTask(task)
  }

  render() {
    return (
      <>
        <h2>EditTask</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <label htmlFor="details">Details</label>
          <textarea
            name="details"
            value={this.state.details}
            onChange={this.handleChange}
          />
          <label htmlFor="priority">Priority</label>
          {/* radio buttons go here */}
          {/* also completion status */}
          <input type="submit" value="Save" />
        </form>
      </>
    )
  }
}

function mapStateToProps(globalState) {
  return {
    task: globalState.tasks.task
  }
}

export default connect(mapStateToProps)(EditTask)
