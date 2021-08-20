"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Videos", "idUser", {
      type: Sequelize.INTEGER,
      allowNull: false,
      refereces: { mondel: "users", key: "id" },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Videos", "idUser");
  },
};
