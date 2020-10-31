const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('users', [
      {
        nome: 'John Doe',
        email: '78@gmail.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'John Doe 1',
        email: '7878@gmail.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'John Doe 2',
        email: '45444464@gmail.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'John Doe 3',
        email: '787878@gmail.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  down: async () => {},
};
