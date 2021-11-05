
exports.seed = function(knex) {
  return knex('projects').insert([
    { project_name: 'Finish program', project_description: 'Complete all program requirements', project_completed: false },
    { project_name: 'Get a job', project_description: 'Working hard to find gainful employment', project_completed: false },
  ]);
};
