import express from "express";
import * as dotenv from "dotenv";
import productRouter from "./products/controller";
dotenv.config({ path: __dirname + "./../.env" });

const app = express();
const PORT = process.env.PORT ?? 4000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("¡Hola, mundo!");
});

app.use("/product", productRouter);

app.listen(PORT, () => {
  console.log(`Servidor running. PORT: ${PORT}`);
});
