import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

class App extends React.Component {

  // component={() => <button onClick={}></button>}
  // Will sort this out later... Will do api and form stuff rn
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
