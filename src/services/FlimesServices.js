const Services = require("./Services");
const database = require("../models");

class FilmesServices extends Services {
  constructor() {
    super("Videos");
  }
  async pegaFilmesFree() {
    const limit = 5;
    return database[this.nomeModelo].findAll({ limit: limit });
  }
}

module.exports = FilmesServices;
