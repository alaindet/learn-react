'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Users', [
      {
        username: 'johndoe',
        email: 'john.doe@example.com',
        password: 'johndoe',
        favoritePokemon: 'Rowlet',
        avatar: '',
      },
      {
        username: 'janedoe',
        email: 'jane.doe@example.com',
        password: 'janedoe',
        favoritePokemon: 'Vaporeon',
        avatar: '',
      },
      {
        username: 'blacksmith',
        email: 'blacksmith@example.com',
        password: 'blacksmith',
        favoritePokemon: 'Machamp',
        avatar: '',
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
