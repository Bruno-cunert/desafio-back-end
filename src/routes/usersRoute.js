const { Router } = require("express");
const UsersController = require("../Controllers/UsersController");
const passport = require("passport");
const Auth = require("../middlewares/autenticacao");

const router = Router();

router.post("/user/registro", UsersController.criaUser);
router.post(
  "/user/login",
  passport.authenticate("local", { session: false }),
  UsersController.login
);
router.delete(
  "/user/:id",
  passport.authenticate("bearer", { session: false }),
  UsersController.deletaUser
);

module.exports = router;
