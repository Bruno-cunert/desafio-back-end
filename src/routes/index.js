const filmesRoute = require("./filmesRoute");
const bodyParser = require("body-parser");
const categoriasRoute = require("./categoriasRoute");

module.exports = (app) => {
  app.use(bodyParser.json(), filmesRoute);
  app.use(bodyParser.json(), categoriasRoute);
};
