import React from 'react'
import { connect } from 'react-redux'

class EditTask extends React.Component {
  state = {
    name: this.props.name,
    details: this.props.details,
    priority: this.props.priority,
  }

  handleChange = e => {
    this.setState({
      name: e.target.name,
      details: e.target.details,
    })
  }

  handleSubmit = () => {
    console.log('yo')
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
          <input type="submit" value="Add" />
        </form>
      </>
    )
  }
}

function mapStateToProps(globalState) {
  return {

  }
}

export default connect(mapStateToProps)(EditTask)
