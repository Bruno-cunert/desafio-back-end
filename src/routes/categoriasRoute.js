const { Router } = require("express");
const CategoriasController = require("../Controllers/CategoriasController");

const router = Router();

router.get("/categorias", CategoriasController.pegaTodasCategorias);
router.get("/categorias/:id", CategoriasController.pegaUmCategoria);
router.get("/categorias/:id/videos", CategoriasController.videosPorCategoria);

router.post("/categorias", CategoriasController.criaCategoria);

router.put("/categorias/:id", CategoriasController.atualizaCategoria);

router.delete("/categorias/:id", CategoriasController.deletaCategoria);

module.exports = router;
