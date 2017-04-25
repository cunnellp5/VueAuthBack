
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "private"; ALTER SEQUENCE private_id_seq RESTART WITH 2111')
    .then(function () {
      // Inserts seed entries
      return knex('private').insert([
        {
            name: 'Startup Seattle',
            sponsor: 'Mark Zuckerberg',
            seedFund: '10M'
          },
          {
            name: 'Startup Vegas',
            sponsor: 'Bill Gates',
            seedFund: '20M'
          },
          {
            name: 'Startup Addis-Ababa',
            sponsor: 'Aliko Dangote',
            seedFund: '8M'
          },
          {
            name: 'Startup Abuja',
            sponsor: 'Femi Otedola',
            seedFund: '5M'
          },
          {
            name: 'Startup Paris',
            sponsor: 'Jeff Bezos',
            seedFund: '1.6M'
          },
          {
            name: 'Startup London',
            sponsor: 'Dave McClure',
            seedFund: '1M'
          },
          {
            name: 'Startup Oslo',
            sponsor: 'Paul Graham',
            seedFund: '2M'
          },
          {
            name: 'Startup Bangkok',
            sponsor: 'Jeff Clavier',
            seedFund: '5M'
          },
          {
            name: 'Startup Seoul',
            sponsor: 'Paul Buchheit',
            seedFund: '4M'
          }
      ]);
    });
};
