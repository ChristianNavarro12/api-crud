const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');
const bodyParser = require('body-parser');
const swaggerRouter = require("./api/config/swagger");

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => res.send("Express on Vercel"));

app.use("/api", require("./api/routes/indexRouter"));
app.use("/docs", swaggerRouter);

// const PORT = process.env.PORT || 9000;

// app.listen(PORT, () => {
//   console.log(`🚀 Servidor en el puerto  http://localhost:${PORT}`);
// });


module.exports = app;
module.exports.handler = serverless(app);