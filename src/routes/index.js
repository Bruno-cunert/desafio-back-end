const filmesRoute = require("./filmesRoute");
const bodyParser = require("body-parser");
const categoriasRoute = require("./categoriasRoute");
const usersRoute = require("./usersRoute");

module.exports = (app) => {
  app.use(bodyParser.json(), filmesRoute);
  app.use(bodyParser.json(), categoriasRoute);
  app.use(bodyParser.json(), usersRoute);
};
