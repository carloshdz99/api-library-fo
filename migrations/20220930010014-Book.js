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
    await queryInterface.createTable('lb.books', {
      id: {
        type: psql.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: psql.Sequelize.STRING,
        allowNull: false,
      },
      author: {
        type: psql.Sequelize.STRING,
        allowNull: false,
      },
      publish_year: {
        type: psql.Sequelize.DATE,
        allowNull: false,
      },
      genre: {
        type: psql.Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'lb.genres',
          key: 'id',
        },
      },
      stock: {
        type: psql.Sequelize.INTEGER,
        allowNull: 0,
      },
    });
  },

  async down(queryInterface) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('lb.books');
  }
};
