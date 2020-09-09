
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {id: 1, task_name: 'wash dishes', details: '', priority: 'High Priority', completed: false},
        {id: 2, task_name: 'pick up kids', details: 'get in car, drive to school, wait in pickup area, pickup kid, ???.', priority: 'Medium Priority', completed: false},
        {id: 3, task_name: 'make bed', details: 'find more blankets', priority: 'High Priority', completed: true},
        {id: 4, task_name: 'wake up brother', details: '"brother, wake up"', priority: 'High Priority', completed: true},
      ]);
    });
};
