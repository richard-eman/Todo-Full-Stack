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