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
LIST_TASKS - do i need action for this? I guess :/
ADD_TASK - all fields including boolean incase user wanted to include something they'd already done.
UPDATE_TASK - changes thing if a change has been made to it
DELETE_TASK - deletes task based on name and or id


db functions
    - need to do stuff with action data
    - need to do stuff
    - need to stringify and parse json files (in db functions or in that other file we used?).
