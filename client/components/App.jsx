import React from 'react'
import { connect } from 'react-redux'

import { getTasks } from '../apis'

import TodoList from './TodoList'

class App extends React.Component {
  state = {
    tasks: []
  }

  componentDidMount() {
    console.log('App mount')
  }

  fetchTasks = () => {
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
      <h1 onClick={this.fetchTasks}>Nice</h1>
      <TodoList/>
      </>
    )
  }
}


function mapStateToProps(globalState) {
  return {
    animals: globalState.animals
  }
}

export default connect(mapStateToProps)(App)
