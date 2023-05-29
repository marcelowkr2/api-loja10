const express = require('express')
const handleMiddleware = require('./middlewares/handleMiddleware')
const db = require ('./infrastructure/database')
const cors = require('cors')

const app = express();
const routes = require("./routes");

app.use (cors())

db.hasConnection()

app.use(express.json());
app.use(routes);
app.use(handleMiddleware);

module.exports = app;