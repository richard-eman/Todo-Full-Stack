import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import TodoList from './TodoList'

class App extends React.Component {

  // component={() => <button onClick={}></button>}
  // Will sort this out later... Will do api and form stuff rn
  render() {
    return (
      <>
        <h1>Todo List</h1>
        {/* <Router>
          <Route path="/todolist" component={TodoList} />
          <Link to="/todolist">todolist</Link>
        </Router> */}
      </>
    )
  }
}


export default App
