const filmesRoute = require("./filmesRoute");
const bodyParser = require("body-parser");

module.exports = (app) => {
  app.use(bodyParser.json(), filmesRoute);
};
