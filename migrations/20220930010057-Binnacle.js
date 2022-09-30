const psql = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('lb.binnacle', {
      id: {
        type: psql.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      id_book: {
        type: psql.Sequelize.INTEGER,
        references: {
          model: 'lb.books',
          key: 'id',
        },
        allowNull: false,
      },
      id_user: {
        type: psql.Sequelize.INTEGER,
        references: {
          model: 'lb.users',
          key: 'id',
        },
        allowNull: false,
      }
    });
  },

  async down(queryInterface) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('lb.binnacle');
  }
};
