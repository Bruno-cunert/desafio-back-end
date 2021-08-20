const Services = require("./Services");
const bcrypt = require("bcrypt");
const database = require("../models");

class UsersServices extends Services {
  constructor() {
    super("users");
  }
  async pegaIdPorEmail(email) {
    return database.users.findOne({
      where: { email: email },
    });
  }
  async verificaEmail(email) {
    let valida = await database.users.findOne({
      where: { email: email },
    });
    if (valida == null) {
      return false;
    }
    if (email == valida.email) {
      return true;
    }
  }
}

module.exports = UsersServices;
