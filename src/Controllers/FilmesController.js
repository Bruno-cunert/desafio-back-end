const sequelize = require("sequelize");
const FilmesServices = require("../services/FlimesServices");

class FilmesController {
  static async pegaTodosFilmes(req, res) {
    try {
      const todasPessoas = await FilmesServices.pegaTodosRegistros();
      return res.status(200).json(todasPessoas);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = FilmesController;
