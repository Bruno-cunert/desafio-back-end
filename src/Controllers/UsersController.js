const UsersServices = require("../services/UsersServices");
const usersServices = new UsersServices();
const Auth = require("../middlewares/autenticacao");

class UsersController {
  static async criaUser(req, res) {
    const dados = req.body;
    const confereEmail = await usersServices.verificaEmail(dados.email);
    if (confereEmail == true) {
      return res.status(500).json("Esse email ja existe");
    }
    const senha = dados.senha;
    const hash = await Auth.gerarSenhaHash(senha);
    const novoUser = {
      nome: dados.nome,
      email: dados.email,
      senha_hash: hash,
    };

    try {
      const novoUserCriado = await usersServices.criaRegistro(novoUser);
      return res.status(200).json(novoUserCriado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async login(req, res) {
    const infos = req.body;
    const user = await Auth.IdUserPorEmail(infos.email);
    try {
      const token = Auth.criaTokenJWT(user);
      res.set("Authorization", token);
      res.status(204).send();
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async deletaUser(req, res) {
    const { id } = req.params;
    const user = req.user;
    const permissao = await Auth.temPermissao(user.id, id);
    try {
      if (permissao == true) {
        await usersServices.apagaRegistro(id);
        return res.status(200).json(`O id: ${id} foi apagado com sucesso`);
      } else {
        throw Error("ação nao permitida");
      }
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = UsersController;
