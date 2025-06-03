const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const swaggerRouter = require("./config/swagger");

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send(JSON.stringify({
    mensaje: "📌 API REST en Vercel funcionando correctamente",
    rutas_disponibles: {
      GET: "/api/...",
      POST: "/api/...",
      PUT: "/api/...",
      DELETE: "/api/..."
    },
    nota: "Swagger no está disponible porque Vercel usa funciones serverless"
  }));
});

app.use("/api", require("./routes/indexRouter"));
app.use("/docs", swaggerRouter);

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor en el puerto  http://localhost:${PORT}`);
});

module.exports = app;