
exports.seed = function(knex, Promise) {



  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "public"; ALTER SEQUENCE public_id_seq RESTART WITH 1111')
    .then(function () {
      // Inserts seed entries
      return knex('public').insert([
        {
            name: 'Startup NYC',
            sponsor: 'Alec Pesola',
            seedFund: '500k'
          },
        {
            name: 'Startup NYC',
            sponsor: 'Alec Pesola',
            seedFund: '500k'
          },
        {
            name: 'Startup NYC',
            sponsor: 'Alec Pesola',
            seedFund: '500k'
          },
        {
            name: 'Startup NYC',
            sponsor: 'Alec Pesola',
            seedFund: '500k'
          },
        {
          name: 'Startup Ontario',
          sponsor: 'Ryan Chenkie',
          seedFund: '750k'
          },
        {
          name: 'Startup Uttah',
          sponsor: 'Diego Poza',
          seedFund: '550k'
          },
        {
          name: 'Startup Australia',
          sponsor: 'Eugene Kogan',
          seedFund: '500k'
          },
        {
            name: 'Startup Buenos Aires',
            sponsor: 'Sebastian Peyrott',
            seedFund: '600k'
          },
        {
            name: 'Startup Lagos',
            sponsor: 'Prosper Otemuyiwa',
            seedFund: '650k'
          },
        {
          name: 'Startup Oslo',
          sponsor: 'Mark Fish',
          seedFund: '600k'
          },
        {
          name: 'Startup Calabar',
          sponsor: 'Christian Nwamba',
          seedFund: '800k'
          },
        {
          name: 'Startup Nairobi',
          sponsor: 'Aniedi Ubong',
          seedFund: '700k'
          }
      ]);
    });
};
