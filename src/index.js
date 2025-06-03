const express = require('express');
const app = express();
const serverless = require('serverless-http');
const cors = require('cors');
const bodyParser = require('body-parser');
const swaggerRouter = require("./config/swagger");

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", require("./routes/indexRouter"));
app.use("/", swaggerRouter);

module.exports.handler = serverless(app);