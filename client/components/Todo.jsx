import React from 'react'
import { connect } from 'react-redux'

import TaskList from './TaskList'
import Tasks from './Tasks'

import { getTasks } from '../apis'

class Todo extends React.Component{
  state = {
    tasks: []
  }

  componentDidMount() {
    // fetchTasks = () => { // example for buttons in future
      getTasks()
        .then(tasks => {
          this.setState({
            tasks: tasks
          })
        })
    // }

  }

  // map tasks into TaskList with Task.jsx

  render(){
    return(
      <>
        <TaskList/>
        <Tasks/>
      </>
    )
  }
}

// const mapStateToProps = ({

// })

export default /*connect(mapStateToProps)*/(Todo)