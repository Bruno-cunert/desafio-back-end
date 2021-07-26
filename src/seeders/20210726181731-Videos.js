"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Videos",
      [
        {
          titulo: "batatinha",
          descricao: "é frita",
          url: "www.batata.com.br",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Videos", null, {});
  },
};
