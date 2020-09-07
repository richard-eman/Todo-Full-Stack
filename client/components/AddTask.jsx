import React from 'react'
import { connect } from 'react-redux'

import { addTask } from '../apis'

class AddTask extends React.Component {
  state = {
    name: "",
    details: "",
    priority: "",
    completed: "0",
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
    else if ( e.target.name == "priority"){
      this.setState({
        priority: e.target.value,
      })
    }
    else if ( e.target.name == "completed" && this.state.completed == "0"){
      this.setState({
        completed: "1",
      })
    }
    else if ( e.target.name == "completed" && this.state.completed == "1"){
      this.setState({
        completed: "0",
      })
    }
  }

  handleSubmit = e => {
    const task = {
      task_name: this.state.name,
      details: this.state.details
    }
    e.preventDefault()
    addTask(task)
    location.assign('http://localhost:3000/#/todo-list')
  }
  
  render() {
    return (
      <>
        <h2>AddTask</h2>
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
            <input type="radio"
              name="priority"
              value="Negative"
              onChange={this.handleChange}
            />
            <input type="radio"
              name="priority"
              value="Ultra"
              onChange={this.handleChange}
            />
          <label htmlFor="completed">Completed</label>
            <input type="checkbox"
              name="completed"
              onChange={this.handleChange}
            />
          <input type="submit" value="Save" />
        </form>
      </>
    )
  }
}

function mapStateToProps(globalState) {
  return {

  }
}

export default connect(mapStateToProps)(AddTask)
