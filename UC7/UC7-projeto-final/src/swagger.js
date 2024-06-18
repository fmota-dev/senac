const swaggerAutogen = require("swagger-autogen")();
const doc = require("../config/swagger");

const outputFile = "../src/swagger_documentation.json";
const endpoints = ["../routes/eventoRoutes.js"];

swaggerAutogen(outputFile, endpoints, doc);
