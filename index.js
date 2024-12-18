const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const swaggerRouter = require("./src/config/swagger");

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", require("./src/routes/indexRouter"));
app.use("/", swaggerRouter);

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor en el puerto  http://localhost:${PORT}`);
});