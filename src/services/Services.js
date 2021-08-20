const { Sequelize } = require("../models");
const database = require("../models");
const Op = Sequelize.Op;

class Services {
  constructor(nomeModelo) {
    this.nomeModelo = nomeModelo;
  }

  async pegaTodosRegistros(where = {}) {
    return database[this.nomeModelo].findAll({ where: { ...where } });
  }
  async pegaTodosRegistrosPage(page) {
    const limit = 5;
    const offset = page * limit - 5;
    return database[this.nomeModelo].findAll({ offset: offset, limit: limit });
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
  async procuraLikeRegistros(where) {
    return database[this.nomeModelo].findAll({
      where: {
        titulo: {
          [Op.like]: `%${where}%`,
        },
      },
    });
  }
  async pegaCampoDoRegistro(idRegistro, campoDesejado) {
    const registro = await database[this.nomeModelo].findOne({
      where: { id: idRegistro },
    });
    return registro[campoDesejado];
  }
}
module.exports = Services;
