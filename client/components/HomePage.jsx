import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

class App extends React.Component {

  render() {
    return (
      <>
        <h2>Home Page</h2>
        <Router>
          <h3><Link to="/todo-list">Your Todo List</Link></h3>
        </Router>
      </>
    )
  }
}


export default App
