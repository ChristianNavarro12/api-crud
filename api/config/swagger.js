const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const express = require("express");
const router = express.Router();

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API crud de estudiantes",
      version: "1.0.0",
      description: "Documentación de la API",
    },
  },
  apis: [
    "src/routes/studentRouter.js"
  ],
};

const specs = swaggerJsdoc(options);

router.use("/docs", swaggerUi.serve);
router.get("/docs", swaggerUi.setup(specs));

module.exports = router;