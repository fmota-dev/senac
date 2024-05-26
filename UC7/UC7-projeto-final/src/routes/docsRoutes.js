const express = require("express");
const router = express.Router();
const swaggerUI = require("swagger-ui-express");
const swaggerFile = require("../swagger_documentation.json");

router.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));

module.exports = router;
