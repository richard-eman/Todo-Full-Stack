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

SHOW_ERROR - yeah
LIST_TASKS - do i need action for this? I guess :/ maybe not. api can do that on it's own without any other user input :////////
ADD_TASK - all fields including boolean incase user wanted to include something they'd already done.
UPDATE_TASK - changes thing if a change has been made to it
DELETE_TASK - deletes task based on name and or id


db functions
    - need to do stuff with action data
    - need to do stuff
    - need to do stuff with api
    - need to stringify and parse json files (in db functions or in that other file we used?).

make that one api thing work (get tasks)

## What have I done so far? (31st July 20)

made api route with superAgent
made db function
using route gets body with db data as response
I set local state with data from db on v. server.

## Qs

did I set up redux (it's components(reducer etc))?
I should plan and design things

How does rebase make commit history cleaner? Can ask Eddie. I think he told me during foundations but yeah lol (combining commits like for testing).

## ToDo for the ToDo List web app

Find where I made designs in notebook
list components
set components
make all tasks display
I'd like edit tasks to do a hash route I think
delete will make window show above everything else