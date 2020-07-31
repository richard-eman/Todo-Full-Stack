import React from 'react'
import { connect } from 'react-redux'// I want to update this with props passed into here. What will be passed into here?

class DeleteButton extends React.Component {
  state = {
  }

  componentDidMount() {

  }

  render() {
    return (
      <button>DeleteButton</button>
    )
  }
}

function mapStateToProps(globalState) {
  return {
    
  }
}

export default connect(mapStateToProps)(DeleteButton)
