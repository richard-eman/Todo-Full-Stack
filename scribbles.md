# scribbles


## todos table:

* id - increments
* task_name - text
* details - text
* priority - text or can i do multi choice? I guess it would still be text, just the gui would be multi choice.
* completed - boolean

## API stuff:

API
  api does requesting, processing, and responding.
  looks like routing
action
  the return for switches.
reducer
  imports action and has the switch which uses the action if case matches.
  combine so there isn't one massive file but individual files related to a certain thing or task.

actions:

SHOW_ERROR - yeah (how do i do again? action is catch.)
LIST_TASKS - do i need action for this? I guess :/ maybe not. api can do that on it's own without any other user input :////////
ADD_TASK - all fields including boolean incase user wanted to include something they'd already done.
UPDATE_TASK - changes thing if a change has been made to it
DELETE_TASK - deletes task based on name and or id


db functions
  - need to do stuff with action data
  - need to do stuff
  - need to do stuff with api
  - need to stringify and parse json files (in db functions or in that other file we used?).

o make that one api thing work (get tasks)

must use redux.
  two way data flow. (add and get stuff to global state)
must do multiple api stuff.

## Endpoints:

### get tasks:
```js
[
  {
    id: 1,
    task_name: 'wash dishes',
    details: '',
    priority: 'high',
    completed: false
  },
  {
    id: 2,
    task_name: 'pick up kids',
    details: 'get in car, drive to school, wait in pickup area, pickup kid, ???.',
    priority: 'medium',
    completed: false
  }
]
```

### add task:
```js
{
  task_name: 'make bed',
  details: 'find more blankets',
  priority: 'high',
  completed: false
}
```

### delete task:
```js
{
  id: 2,
  task_name: 'pick up kids'
}
```

### edit task:
```js
{
  task_name: 'make bed',
  details: 'find more blankets',
  priority: 'maximum',
  completed: false
}
```

// set GS with data from db when App mounts
// TodoList will mapStateToProps data from GS
// TodoList will map over this GS prop and make li's with Task component
// Task will have buttons that will conditionally show components (wait router routes would be fine? components mount I think so nvm. I won't worry abou it)
// make actions. actions will be used with button clicks to dispatch (change global state and use api to edit stuf in db)
// reducer matches action.type with case. Case uses const names from index
// reducer runs action upon match (sets global state and uses api to set db)
// conditional stuff will bring user back to TodoList
// make sure delete button is not easy to hit on accident.




food app
have list of what you like
in a group, get list of what people like in common (english?)
(family, party, work)

//o set global state
//o create action
//o create dispatch
//o set onClick to dispatch

```js
import React from 'react'
import { connect } from 'react-redux'


class AddTaskButton extends React.Component {
  state = {
    bro: ""
  }
  componentDidMount(){
    console.log('addButton mount')
  }
  
  handleClick = e => {
    event.preventDefault()
    this.setState({
      bro: 'Yowza!'
    })
  }
  
  // set global state
  // create action
  // create dispatch
  // set onClick to dispatch
  
  render(){
    console.log('add but render')
    return (
      <button onClick={this.handleClick}>
        the fox said {this.state.bro} bro
      </button>
    )
  }
}


export default connect()(AddTaskButton)
```

commit 0814a5af563a41a8a78337a47628dbfee18462a6 (HEAD -> richard, origin/richard, richard-back-up)
Author: Rose <62679021+rose-mead@users.noreply.github.com>
Date:   Tue Jul 14 20:14:28 2020 +1200

    make add button work

commit a0de9432420e9c0fd1a8fe8bcada19114c181ca3
Author: Rose <62679021+rose-mead@users.noreply.github.com>
Date:   Tue Jul 14 18:19:29 2020 +1200

    add more small things

commit b7e33e8ead2727ba558c5896373455f1fa98f939
Author: Rose <62679021+rose-mead@users.noreply.github.com>
Date:   Tue Jul 14 17:33:04 2020 +1200

    make redux and props work

commit 568738790d58a201b99361c527cb23cc7962d18e
Author: Rose <62679021+rose-mead@users.noreply.github.com>
Date:   Tue Jul 14 11:53:14 2020 +1200

    make components and start on redux stuff

commit f1adf6dac9334be3222870f6134fafb23c2f2470
Author: Rose <62679021+rose-mead@users.noreply.github.com>
Date:   Tue Jul 14 11:14:51 2020 +1200

    scribble

commit 229d96551c92c4653b6e8094c2609fe44bf967ef
Author: Richard E <46254658+richard-eman@users.noreply.github.com>
Date:   Wed Jul 8 14:05:43 2020 +1200

    make route for api work

commit 2db4850f5194be8a06124b68e31a440ca3969a65
Author: Richard E <46254658+richard-eman@users.noreply.github.com>
Date:   Wed Jul 8 13:32:46 2020 +1200

    test db function
