"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Videos",
      [
        {
          titulo: "terror no carro",
          categoriaId: 3,
          descricao: "é frita",
          url: "www.terror.com.br",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          titulo: "terror no banho",
          categoriaId: 4,
          descricao: "é frita",
          url: "www.terror.com.br",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          titulo: "terror no caminhão",
          categoriaId: 3,
          descricao: "é frita",
          url: "www.terror.com.br",
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
