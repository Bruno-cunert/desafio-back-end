const database = require("../models");

class Services {
  constructor(nomeModelo) {
    this.nomeModelo = nomeModelo;
  }

  async pegaTodosRegistros(where = {}) {
    return database[this.nomeModelo].findAll({ where: { ...where } });
  }
  async pegaUmRegistro(where = {}) {
    return database[this.nomeModelo].findOne({ where: { ...where } });
  }
  async criaRegistro(dados) {
    return database[this.nomeModelo].create(dados);
  }
  async apagaRegistro(id) {
    return database[this.nomeModelo].destroy({ where: { id: id } });
  }
  async atualizarRegistro(novasInfos, id, transacao = {}) {
    return database[this.nomeModelo].update(
      novasInfos,
      { where: { id: id } },
      transacao
    );
  }
}
module.exports = Services;
