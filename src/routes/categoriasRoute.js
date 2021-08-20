const { Router } = require("express");
const CategoriasController = require("../Controllers/CategoriasController");
const passport = require("passport");
const router = Router();

router.get(
  "/categorias",
  passport.authenticate("bearer", { session: false }),
  CategoriasController.pegaTodasCategorias
);
router.get(
  "/categorias/:id",
  passport.authenticate("bearer", { session: false }),
  CategoriasController.pegaUmCategoria
);
router.get(
  "/categorias/:id/videos",
  passport.authenticate("bearer", { session: false }),
  CategoriasController.videosPorCategoria
);

router.post(
  "/categorias",
  passport.authenticate("bearer", { session: false }),
  CategoriasController.criaCategoria
);

router.put(
  "/categorias/:id",
  passport.authenticate("bearer", { session: false }),
  CategoriasController.atualizaCategoria
);

router.delete(
  "/categorias/:id",
  passport.authenticate("bearer", { session: false }),
  CategoriasController.deletaCategoria
);

module.exports = router;
