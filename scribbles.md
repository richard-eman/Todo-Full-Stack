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
