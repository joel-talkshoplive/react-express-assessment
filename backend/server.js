import express from "express";
import todoRouter from "./todos.js";

const app = express();
const port = 3001;
const API_KEY = "my-secret-api-key";

app.listen(port, () => {
  console.log(`Todo app listening on port ${port}`);
});
