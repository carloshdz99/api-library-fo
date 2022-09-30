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
    await queryInterface.addColumn('lb.users', 'id_rol', {
      type: psql.Sequelize.INTEGER,
      references: {
        model: 'lb.rols',
        key: 'id',
      },
      allowNull: false,
    });
  },
};
