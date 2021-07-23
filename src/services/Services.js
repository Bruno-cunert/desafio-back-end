const database = require("../models");

class Services {
  constructor(nomeModelo) {
    this.nomeModelo = nomeModelo;
  }

  static async pegaTodosRegistros(where = {}) {
    return database[this.nomeModelo].findAll({ where: { ...where } });
  }
  static async pegaUmRegistro(where = {}) {
    return database[this.nomeModelo].findOne({ where: { ...where } });
  }
  static async criaRegistro(dados) {
    return database[this.nomeModelo].create(dados);
  }
  static async apagaRegistro(id) {
    return database[this.nomeModelo].destroy({ where: { id: id } });
  }
  static async atualizarRegistro(novasInfos, id, transacao = {}) {
    return database[this.nomeModelo].update(
      novasInfos,
      { where: { id: id } },
      transacao
    );
  }
}
module.exports = Services;
