exports.up = function (knex, Promise) {
  console.log('Creating definitions')
  return knex.schema.createTableIfNotExists('definitions', function (table) {
    table.increments('id')
    table.string('Term')
    table.string('Explanation')
    table.string('Links')
  })
}

exports.down = function (knex, Promise) {
  console.log('Dropping definitions')
  return knex.schema.dropTableIfExists('definitions').then(function () {
    console.log('definitions table was dropped')
  })
}
