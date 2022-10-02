'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('lb.genres', [
      {
        name: 'Aventura',
      },
      {
        name: 'Drama',
      },
      {
        name: 'Suspenso',
      },
      {
        name: 'Romance',
      },
      {
        name: 'Ciencias',
      },
      {
        name: 'Psicologia',
      },
      {
        name: 'Accion',
      },
      {
        name: 'Historia',
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
