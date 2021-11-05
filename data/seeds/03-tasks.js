
exports.seed = function(knex) {
  return knex('tasks').insert([
    { task_description: 'Pass sprint challenges', task_notes: 'Study hard', task_completed: false, project_id: 1 },
    { task_description: 'Get interviews', task_notes: 'Send resumes', task_completed: false, project_id: 2 },
  ]);
};
