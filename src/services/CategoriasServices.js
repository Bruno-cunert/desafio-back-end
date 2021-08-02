const Services = require("./Services");
const database = require("../models");
class CategoriasServices extends Services {
  constructor() {
    super("categorias");
    this.filmes = "Videos";
  }
  async videosPorCategoria(categoriaId) {
    return database[this.filmes].findAll({
      where: { categoriaId: categoriaId },
    });
  }
}

module.exports = CategoriasServices;
