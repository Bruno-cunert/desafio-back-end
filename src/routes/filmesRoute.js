const { Router } = require("express");
const FilmesController = require("../Controllers/FilmesController");

const router = Router();

router.get("/filmes", FilmesController.pegaTodosFilmes);

//router.post();

//router.put();

//router.delete();

module.exports = router;
