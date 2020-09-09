import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import HomePage from './HomePage'
import TodoList from './TodoList'
import AddTask from './AddTask'
import EditTask from './EditTask'

const App = () => {

  return (
    <div className="app">

      <Router>
      <h1><Link to="/">Todo List</Link></h1>
        <Route exact path="/" component={HomePage} />
        <Route path="/todo-list" component={TodoList} />
        <Route path="/add" component={AddTask} />
        <Route path="/edit" component={EditTask} />
      </Router>
    </div>
  )
}

export default App
