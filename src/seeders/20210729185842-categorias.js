"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "categorias",
      [
        {
          titulo: "Livre",
          cor: "Branca",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          titulo: "ação",
          cor: "Roxo",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          titulo: "drama",
          cor: "Verde",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          titulo: "terror",
          cor: "Azul",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete("categorias", null, {});
  },
};
