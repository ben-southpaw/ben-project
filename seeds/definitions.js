exports.seed = function (knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('definitions').del(),

    // Inserts seed entries
    knex('definitions').insert({
      name: 'API',
      link: 'https://github.com/dev-academy-programme/concepts/blob/master/api/intro.md',

    }),
    knex('definitions').insert({
      name: 'git',
      link: 'https://github.com/dev-academy-programme/curriculum/tree/master/concepts/git-basics',

    }),
    knex('definitions').insert({
      name: 'HTML',
      link: 'https://github.com/dev-academy-programme/curriculum/tree/master/concepts/html-basics-1',

    }),
    knex('definitions').insert({
      name: 'JavaScript',
      link: 'https://github.com/dev-academy-programme/curriculum/tree/master/concepts/js-basics',

    }),
    knex('definitions').insert({
      name: 'TDD',
      link: 'https://github.com/dev-academy-programme/curriculum/tree/master/concepts/test-driven-development',

    }),
    knex('definitions').insert({
      name: 'Command Line',
      link: 'https://github.com/dev-academy-programme/curriculum/tree/master/concepts/command-line-basics',

    }),
    knex('definitions').insert({
      name: 'JS Events',
      link: 'https://github.com/dev-academy-programme/curriculum/tree/master/concepts/events',

    }),
    knex('definitions').insert({
      name: 'Process oer product',
      link: 'https://github.com/dev-academy-programme/curriculum/tree/master/concepts/process-over-product',

    }),
    knex('definitions').insert({
      name: 'Dev for mobile',
      link: 'https://github.com/dev-academy-programme/concepts/blob/master/mobile/debugging.md',

    }),
    knex('definitions').insert({
      name: 'for dinner tonight?',
      link: 'http://www.whatthefuckshouldimakefordinner.com/',

    })
  )
}
