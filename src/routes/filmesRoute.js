const { Router } = require("express");
const FilmesController = require("../Controllers/FilmesController");
const passport = require("passport");
const router = Router();

router.get("/filmes/free", FilmesController.filmesFree);

router.get(
  "/filmes",
  passport.authenticate("bearer", { session: false }),
  FilmesController.pegaTodosFilmes
);
router.get(
  "/filmes/:id",
  passport.authenticate("bearer", { session: false }),
  FilmesController.pegaUmFilme
);
router.get(
  "/filmes/search/",
  passport.authenticate("bearer", { session: false }),
  FilmesController.pesquisaNome
);

router.post(
  "/filmes",
  passport.authenticate("bearer", { session: false }),
  FilmesController.criaFilme
);

router.put(
  "/filmes/:id",
  passport.authenticate("bearer", { session: false }),
  FilmesController.atualizaFilme
);

router.delete(
  "/filmes/:id",
  passport.authenticate("bearer", { session: false }),
  FilmesController.deletaFilme
);

module.exports = router;
