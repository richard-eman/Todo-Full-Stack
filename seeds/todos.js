
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {id: 1, task_name: 'wash dishes', details: '', priority: 'high', completed: false},
        {id: 2, task_name: 'pick up kids', details: 'get in car, drive to school, wait in pickup area, pickup kid, ???.', priority: 'medium', completed: false},
        {id: 3, task_name: 'make bed', details: 'find more blankets', priority: 'high', completed: true},
      ]);
    });
};
