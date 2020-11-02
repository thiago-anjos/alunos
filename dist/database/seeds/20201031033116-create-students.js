"use strict";module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('students', [
      {
        nome: 'John Doe',
        sobrenome: 'SILVA',
        email: 'john797987987897@gmail.com',
        idade: 33,
        peso: 84,
        altura: 1.73,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Thiago',
        sobrenome: 'dos Anjos Lopes',
        email: 'thiago.w3c7878@gmail.com',
        idade: 34,
        peso: 84,
        altura: 1.73,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  down: async () => {},
};
