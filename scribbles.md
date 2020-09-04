# scribbles


## todos table:

* id - increments
* task_name - text
* details - text
* priority - text or can i do multi choice? I guess it would still be text, just the gui would be multi choice.
* completed - boolean
I had some other idea...
future user_id

## API stuff:

API
  api does requesting, processing, and responding.
  looks like routing

Redux
  this is for global state so I don't need to pass things through props and back up with funtions.
  Useful for apps with lots of components.

Actions
  the return for switches.
  the data for reducer and db functions(?)
  
Reducers
  imports action and has a switch which uses the action if case matches an action name.
  combine so there isn't one massive file but individual files related to a certain thing or task.

### actions:

SHOW_ERROR - yeah. re-learn how to do this bad boy.
LIST_TASKS - do i need action for this? I guess :/ maybe not. api can do that on it's own without any other user input :////////
ADD_TASK - all fields including boolean incase user wanted to include something they'd already done.
EDIT_TASK - changes thing if a change has been made to it
DELETE_TASK - deletes task based on name and or id


### db functions
- reducer will
- need to stringify and parse json files (in db functions or in that other file we used?).

make that one api thing work (get tasks)








## What have I done so far? (31st July 20)

made api route with superAgent
made db function
using route gets body with db data as response
I set local state with data from db on v. server.

## Qs

Nope -did I set up redux (it's components(reducer etc))?
-I should plan and design things

-How does rebase make commit history cleaner? Can ask Eddie. I think he told me during foundations but yeah lol (combining commits for things like for testing).

### What needs GS?
- app/homepage (for when I might want a user to login)
- pull from GS into local state upon loading TaskList
  - pass through props for edit and delete buttons
  - put things in array so edit and deletes can use array indexies

- add task button uses hash router because I don't like google note's desktop UI. Not conducive for writing (doesn't use screen space)
- add button will add stuff to GS and do api call to add to DB. How can I make thing re render?

- delete should call api to delete from db and local state
- page should reload/re-render with local state being changed so that we don't need to wait for server and db

- edit button will use hash route for reason mentioned in add
- GS and api
- How will order be remembered?

new feature
- I'd like to edit order shown in list



##### look up thunk again


## ToDo for the ToDo List web app

- oFind where I made designs in notebook
- olist components
- oset components
- make all tasks display
- I'd like edit tasks to do a hash route I think
- delete will make window show above everything else
- ah fuck I forgot to pull before changing remote repo to my own. shit.







# Old Readme stuff

See the breathtaking designs [here](http://localhost:3000/designs/)

Here's a list of steps in case they are useful.  You can build in any order you like though ;)
1.  Design a database to store a list of tasks, e.g. task details, priority, completed yes/no
1.  Build the migrations and seed data
1.  Build an API to list, add, update and delete
1.  Test you API with Postman/Insomnia
1.  Build React Components from static html
1.  Design Redux Global State (think of it like a JS object)
1.  Build Redux Reducers (the properties or keys of your state design are reducers, the values are hard-code static data as initialState)
1.  Build API Client in the front end
1.  Build Thunk Actions to get task from the API 
1.  Build Redux Actions to save task data from the API (remove hard-code initialState)
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
https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History

https://confluence.atlassian.com/bitbucketserverkb/how-do-you-make-changes-on-a-specific-commit-779171729.html

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



### Epic. Things worked:
git rebase tutorials linked above are good. Once done:
delete remote branch: git push origin --delete richard
then push again


commit a5dd24f87d57aa4b22b35de4577be7de266b9ece (HEAD -> richard)
Author: Richard E <46254658+richard-eman@users.noreply.github.com>
Date:   Tue Jul 14 21:13:54 2020 +1200

    scribble

commit 3a3738f1eddc0c80797be047fdd6753b3c8826e7
Author: Richard E <46254658+richard-eman@users.noreply.github.com>
Date:   Tue Jul 14 21:12:10 2020 +1200

    scribble

commit c56af38c5b408e07959636861aad5a2a9d8bb072
Author: Richard E <46254658+richard-eman@users.noreply.github.com>
Date:   Tue Jul 14 20:14:28 2020 +1200

    make add button work

commit e2ae51f58c6766ba7c8ddda4894e96d1779f4199
Author: Richard E <46254658+richard-eman@users.noreply.github.com>
Date:   Tue Jul 14 18:19:29 2020 +1200

    add more small things

commit e978ab59df0d867af087db615f70debcec584631
Author: Richard E <46254658+richard-eman@users.noreply.github.com>
Date:   Tue Jul 14 17:33:04 2020 +1200

    make redux and props work

commit 52b725a46a9ed569189dccedb495830c681e51db
Author: Richard E <46254658+richard-eman@users.noreply.github.com>
Date:   Tue Jul 14 11:53:14 2020 +1200

    make components and start on redux stuff

commit b8456d1395e4bfd7a9e44a4b0c168c7550669878
Author: Richard E <46254658+richard-eman@users.noreply.github.com>
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












### 3rd & 4th & 7th Aug

- edit
oform
xbuttons with normal routes for now :( Which means calling server more often
oconditional stuff to work with hash router
ohow pass props? Will i have to use GS (comp unmount, comp did mount)?
  I'll use GS because I don't want to use hooks (currently) or params in the url because there's a lot of data. All this because I don't want to call the server for speed.
  will i need a boolean?
holy fuck desktop is slow as fuuck when multi tasking
api
db function
gs
  reducer
  action

check unmount is happening with routing

#### GS:
should get over-written each dispatch
oon but press, dispatch task data to gs
  owhat data is being used?
  oaction
  oreducer
    oimport these 
opull data from gs using connect
on mount/onDismount get changed data from GS for List
  compare ID to that in GS
#### DB:
omake db function for edit
#### API:
make route
import
call api on submit
(refer to previous API/DB work)

- delete
form
buttons with normal routes for now :( Which means calling server more often
api
db function
conditional stuff to work with hash router

## September wk1 friday
skip until required :/ get bearings
  how does routing work currently?
-make apis return something:
  -delete
odelete api return
make page do something on delete:
    update?
    replace thing with message and then remove
    replace using state change
  -add
add api return
make page do something on add
    go back to /#/todo-list
edit api return
make page do something

"see list api for return example"
