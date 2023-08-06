import express from "express";
import todoRouter from "./todos.js";

const app = express();
const PORT = 3000;
const API_KEY = "my-secret-api-key";

app.get("/health-check", (req, res) => {
  res.json({ status: "up" });
});

app.listen(PORT, () => {
  console.log(`Todo app listening on PORT ${PORT}`);
});
