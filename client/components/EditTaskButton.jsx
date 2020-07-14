import React from 'react'
import { connect } from 'react-redux'
import { showEditForm } from '../actions'


class EditTaskButton extends React.Component {
  state = {
    editingTask: false
  }
  
  handleClick = e => {
    this.setToOpposite(this.state.editingTask)
  }
  
  setToOpposite = (boolean) => {
    if (boolean == true){
      this.setState({
        editingTask: false
      }, () => {
        this.dispatchNewBoolean()
      })
    } else {
      this.setState({
        editingTask: true
      }, () => {
        this.dispatchNewBoolean()
      })
    }
  }

  dispatchNewBoolean = () => {
    this.props.dispatch(showEditForm(this.state.editingTask))
  }
  
  render(){

    return (
      <button onClick={this.handleClick}>
        Edit a task
      </button>
    )
  }
}


export default connect()(EditTaskButton)
