import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes/index.js";

dotenv.config();

const app = express();
const porta = process.env.APP_PORT || 3000;

app.use(cors());
app.use(express.json());
routes(app);

app.listen(porta, () => {
  console.log(`Servidor iniciado na porta ${porta}`);
});
