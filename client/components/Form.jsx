import React from "react"
import { connect } from 'react-redux'

import { clearTaskFromGlobalState, isUserEditingTask } from '../actions'

import { setTask, postWithCorrectApi } from '../functions/Form'

class Form extends React.Component {
	state = {
		name: "",
    details: "",
    priority: "",
  }

	componentDidMount() {
		if ( this.props.isUserEditing == true ) {
			this.setState({
				name: this.props.task.task_name,
				details: this.props.task.details,
				priority: this.props.task.priority
			})
		}
	}

	componentWillUnmount() {
		// So a task in GS won't show when a user wants to add a task, even if they go back without submitting changes to a task.
		this.props.dispatch(isUserEditingTask(false))
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
		const isUserEditing = this.props.isUserEditing
		let task = {}
		
		e.preventDefault()
		task = setTask(this.state.name, this.state.details, this.state.priority, this.props.task.id, isUserEditing)
		postWithCorrectApi(task, isUserEditing)
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
		task: globalState.tasks.task,
		isUserEditing: globalState.tasks.isUserEditing,
  }
}

export default connect(mapStateToProps)(Form)
