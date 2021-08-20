"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      users.hasMany(models.Videos, {
        foreignKey: "idUser",
      });
    }
  }
  users.init(
    {
      nome: {
        validate: {
          funValidadora: function (dado) {
            if (dado.length < 3)
              throw new Error("O nome deve ter mais que 3 caracteres");
          },
        },
        type: DataTypes.STRING,
      },
      email: {
        validate: {
          isEmail: { msg: "isto não é um email valido" },
        },
        type: DataTypes.STRING,
        unique: {
          args: true,
          msg: "Email address already in use!",
        },
      },
      senha_hash: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "users",
    }
  );
  return users;
};
