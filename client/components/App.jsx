import React from 'react'
import { connect } from 'react-redux'
import { getTasks } from '../apis'
import { fetchTasks } from '../actions'

import TodoList from './TodoList'

class App extends React.Component {
  state = {
    tasks: []
  }

  componentDidMount() {
    console.log('App did mount')
    this.props.dispatch(fetchTasks())
  }

  fetchTasksWithAPI = () => {
    getTasks()
      .then(tasks => {
        this.setState({
          tasks: tasks
        })
      })
  }

  render() {

    return (
      <>
      <h1 onClick={this.fetchTasksWithAPI}>Nice</h1>
      <TodoList/>
      </>
    )
  }
}

export default connect()(App)
