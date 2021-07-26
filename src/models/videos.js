"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Videos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Videos.init(
    {
      titulo: {
        validate: {
          funValidadora: function (dado) {
            if (dado.length < 3)
              throw new Error("O titulo deve ter mais que 3 caracteres");
          },
        },
        type: DataTypes.STRING,
      },
      descricao: {
        validate: {
          funValidadora: function (dado) {
            if (dado.length < 10)
              throw new Error("A descrição deve ter mais que 10 caracteres");
          },
        },
        type: DataTypes.STRING,
      },
      url: {
        validate: {
          isUrl: {
            msg: "Isto não é um URL valido",
          },
        },
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Videos",
    }
  );
  return Videos;
};
