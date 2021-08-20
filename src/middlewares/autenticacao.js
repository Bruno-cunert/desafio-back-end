const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const BearerStrategy = require("passport-http-bearer").Strategy;
const UsersServices = require("../services/UsersServices");
const usersServices = new UsersServices();

class Auth {
  constructor() {}

  static criaTokenJWT(usuario) {
    const payload = {
      id: usuario.id,
    };
    const token = jwt.sign(payload, process.env.CHAVE_JWT, {
      expiresIn: "15m",
    });
    return token;
  }

  static gerarSenhaHash(senha) {
    const custoHash = 12;
    return bcrypt.hash(senha, custoHash);
  }
  static async verificaSenha(senha, senhaHash) {
    const senhaValida = await bcrypt.compare(senha, senhaHash);
    if (!senhaValida) {
      throw new InvalidArgumentError("E-mail ou senha inválidos!");
    }
  }
  static async verificaEmail(email) {
    const emailValido = await usersServices.pegaUmRegistro({ email: email });
    if (!emailValido) {
      throw new InvalidArgumentError("E-mail ou senha inválidos!");
    }
  }
  static async IdUserPorEmail(email) {
    const user = await usersServices.pegaIdPorEmail(email);
    return user;
  }
  static async temPermissao(usuarioLogado, ownerId) {
    const usuarioId = usuarioLogado;
    const idToUse = ownerId;
    if (usuarioId == idToUse) {
      return true;
    } else {
      return Error("ação não permetida");
    }
  }
}

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "senha",
      session: false,
    },
    async (email, senha, done) => {
      try {
        const usuario = await usersServices.pegaUmRegistro({ email: email });
        await Auth.verificaEmail(email);
        await Auth.verificaSenha(senha, usuario.senha_hash);

        done(null, usuario);
      } catch (erro) {
        done(erro);
      }
    }
  )
);

passport.use(
  new BearerStrategy(async (token, done) => {
    try {
      const payload = jwt.verify(token, process.env.CHAVE_JWT);

      const usuario = await await usersServices.pegaUmRegistro({
        id: payload.id,
      });
      return done(null, usuario, { token: token });
    } catch (erro) {
      done(erro);
    }
  })
);

module.exports = Auth;
