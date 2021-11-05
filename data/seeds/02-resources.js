
exports.seed = function(knex) {
  return knex('resources').insert([
    { resource_name: 'Online', resource_description: 'Study coding online' },
    { resource_name: 'Friends', resource_description: 'Friends who are in tech' },
  ]);
};
