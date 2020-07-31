import React from 'react'
import { HashRouter as Router, Route } from "react-router-dom";

import { getTasks } from '../apis'

class App extends React.Component {
  state = {
    tasks: []
  }

  componentDidMount() {

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
      {/* <Router>
        <Route exact path="/list" component={() => <button onClick={}></button>} />
      </Router> */}
      </>
    )
  }
}


export default App
