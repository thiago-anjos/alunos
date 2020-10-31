module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('students', [
      {
        nome: 'John Doe',
        sobrenome: 'SILVA',
        email: 'john@gmail.com',
        idade: 33,
        peso: 84,
        altura: '1.73',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  down: async () => {},
};
