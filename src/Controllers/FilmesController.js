const sequelize = require("sequelize");
const FilmesServices = require("../services/FlimesServices");
const filmesServices = new FilmesServices();
const Auth = require("../middlewares/autenticacao");

class FilmesController {
  static async pegaTodosFilmes(req, res) {
    //console.log("é aqui");
    const page = req.query.page ? req.query.page : 1;
    try {
      const todosFilmes = await filmesServices.pegaTodosRegistrosPage(page);
      return res.status(200).json(todosFilmes);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async pegaUmFilme(req, res) {
    const { id } = req.params;
    try {
      const pegaFilme = await filmesServices.pegaUmRegistro({ id });
      if (pegaFilme == null) {
        throw new Error("esse id nao existe");
      }
      return res.status(200).json(pegaFilme);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async criaFilme(req, res) {
    const novoFilme = req.body;
    try {
      const novoFilmeCriado = await filmesServices.criaRegistro(novoFilme);
      return res.status(200).json(novoFilmeCriado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async atualizaFilme(req, res) {
    const { id } = req.params;
    const dadosAtualizados = req.body;
    try {
      await filmesServices.atualizarRegistro(dadosAtualizados, id);
      return res.status(200).json({ mensagem: `id ${id} atualizado` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async deletaFilme(req, res) {
    const { id } = req.params;
    const idUserLogado = req.user.id;
    const ownerPostId = await filmesServices.pegaCampoDoRegistro(id, "idUser");

    const permissao = await Auth.temPermissao(idUserLogado, ownerPostId);
    try {
      if (permissao == true) {
        await filmesServices.apagaRegistro(id);
        return res.status(200).json(`O id: ${id} foi apagado com sucesso`);
      } else {
        throw Error("ação nao permitida");
      }
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async pesquisaNome(req, res) {
    const search = req.query.search;
    try {
      const filmesLike = await filmesServices.procuraLikeRegistros(search);
      return res.status(200).json(filmesLike);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async filmesFree(req, res) {
    console.log("é aqui");
    try {
      const listaFree = await filmesServices.pegaFilmesFree();
      return res.status(200).json(listaFree);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}
module.exports = FilmesController;
