import React from 'react'
import { connect } from 'react-redux'
import { showAddButton } from '../actions'


class AddTaskButton extends React.Component {
  state = {
    addingTask: false
  }
  
  handleClick = e => {
    this.setToOpposite(this.state.addingTask)
  }
  
  setToOpposite = (boolean) => {
    if (boolean == true){
      this.setState({
        addingTask: false
      }, () => {
        this.dispatchNewBoolean()
      })
    } else {
      this.setState({
        addingTask: true
      }, () => {
        this.dispatchNewBoolean()
      })
    }
  }

  dispatchNewBoolean = () => {
    this.props.dispatch(showAddButton(this.state.addingTask))
  }
  
  render(){

    return (
      <button onClick={this.handleClick}>
        Add a task
      </button>
    )
  }
}


export default connect()(AddTaskButton)
