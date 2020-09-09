import React from "react"
import { connect } from 'react-redux'

import { clearTaskFromGlobalState } from '../actions'

import { checkIfEditing, setTaskIdToUndefined, setTask, postWithCorrectApi } from '../functions/Form'

class Form extends React.Component {
	state = {
		name: "",
    details: "",
    priority: "",
  }

	componentDidMount() {
		const editingCheck = checkIfEditing(this.props.task.id)
		if ( editingCheck == true ) {
			this.setState({
				name: this.props.task.task_name,
				details: this.props.task.details,
				priority: this.props.task.priority
			})
		}
	}

	componentWillUnmount() {
		// This is to clear the id used for checking whether a user is editing. Temporary until I make GS for editing check.
		// this.props.dispatch(setTaskToEdit(setTaskIdToUndefined()))
		this.props.dispatch(clearTaskFromGlobalState())
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
		e.preventDefault()
		const editingCheck = checkIfEditing(this.props.task.id)
		const task = setTask(this.state.name, this.state.details, this.state.priority, this.props.task.id, editingCheck)
		postWithCorrectApi(task, editingCheck)
    location.assign('http://localhost:3000/#/todo-list')
  }

	render(){
		return(
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
		)
	}
}

function mapStateToProps(globalState) {
  return {
    task: globalState.tasks.task
  }
}

export default connect(mapStateToProps)(Form)
