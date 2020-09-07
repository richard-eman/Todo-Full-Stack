import React from 'react'
import { connect } from 'react-redux'

import { addTask } from '../apis'

class AddTask extends React.Component {
  state = {
    name: "",
    details: "",
    priority: "",
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
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}/>
          <label htmlFor="details">Details</label>
            <textarea
              name="details"
              value={this.state.details}
              onChange={this.handleChange}/>
          <label htmlFor="priority">Priority</label>
          <select name="priority" onChange={this.handleChange}>
            <option></option>
            <option>Ultra Priority</option>
            <option>High Priority</option>
            <option>Medium Priority</option>
            <option>Low Priority</option>
            <option>Negative Priority</option>
          </select>
          <input type="submit" value="Save"/>
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
