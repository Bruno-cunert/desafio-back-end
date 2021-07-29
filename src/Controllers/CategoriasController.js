const CategoriasServices = require("../services/CategoriasServices");
const categoriasServices = new CategoriasServices();

class CategoriasController {
  static async pegaTodasCategorias(req, res) {
    try {
      const todasCategorias = await categoriasServices.pegaTodosRegistros();
      return res.status(200).json(todasCategorias);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async pegaUmCategoria(req, res) {
    const { id } = req.params;
    try {
      const pegaCategoria = await categoriasServices.pegaUmRegistro({ id });
      if (pegaCategoria == null) {
        throw new Error("esse id nao existe");
      }
      return res.status(200).json(pegaCategoria);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async criaCategoria(req, res) {
    const novaCategoria = req.body;
    try {
      const novaCategoriaCriado = await categoriasServices.criaRegistro(
        novaCategoria
      );
      return res.status(200).json(novaCategoriaCriado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async atualizaCategoria(req, res) {
    const { id } = req.params;
    const dadosAtualizados = req.body;
    try {
      await categoriasServices.atualizarRegistro(dadosAtualizados, id);
      return res.status(200).json({ mensagem: `id ${id} atualizado` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async deletaCategoria(req, res) {
    const { id } = req.params;
    try {
      await categoriasServices.apagaRegistro(id);
      return res.status(200).json(`O id: ${id} foi apagado com sucesso`);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = CategoriasController;
