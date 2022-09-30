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
    await queryInterface.createTable('lb.routes', {
      id: {
        type: psql.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: psql.Sequelize.STRING,
        allowNull: false,
      },
      route: {
        type: psql.Sequelize.STRING,
        allowNull: false,
      },
      id_rol: {
        type: psql.Sequelize.INTEGER,
        references: {
          model: 'lb.rols',
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
     await queryInterface.dropTable('lb.routes');
  },
};
