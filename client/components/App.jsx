import React from 'react'

import { getTasks } from '../apis'

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
      <h1>Todo</h1>
      <h1 onClick={this.fetchTasks}>Nice</h1>
      </>
    )
  }
}


export default App
