require("dotenv").config();
const express = require("express");
const routes = require("./routes/index");

const app = express();
const port = process.env.PORT || 3000;

routes(app);

app.listen(port, () => console.log(`servidor rodando na porta ${port}`));

module.exports = app;
