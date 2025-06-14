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
    "api/routes/studentRouter.js"
  ],
};

const specs = swaggerJsdoc(options);

router.use("/", swaggerUi.serve);
router.get("/", swaggerUi.setup(specs));

module.exports = router;