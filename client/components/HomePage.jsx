import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Todo from './Todo'

class App extends React.Component {

  render() {
    return (
      <>
        <h1>homepage</h1>
        <h1 onClick={this.fetchTasks}>Nice</h1>
        <Todo/>
        {/* homepage because I might want auth because I might want to use this :/ */}
        {/* <Router>
          <Route exact path="/list" component={() => <button onClick={}></button>} />
        </Router> */}
      </>
    )
  }
}


export default App
