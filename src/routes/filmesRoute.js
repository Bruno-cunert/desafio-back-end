const { Router } = require("express");
const FilmesController = require("../Controllers/FilmesController");

const router = Router();

router.get("/filmes", FilmesController.pegaTodosFilmes);
router.get("/filmes/:id", FilmesController.pegaUmFilme);
router.get("/filmes/search/", FilmesController.pesquisaNome);

router.post("/filmes", FilmesController.criaFilme);

router.put("/filmes/:id", FilmesController.atualizaFilme);

router.delete("/filmes/:id", FilmesController.deletaFilme);

module.exports = router;
