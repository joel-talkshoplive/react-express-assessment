import express from "express";

let todos = [
  {
    id: 1,
    todo: "Take Firulais for walk",
    completed: false,
  },
];

const router = express.Router();

router.get("/", (req, res) => {
  return res.json(todos);
});

router.get("/:id", (req, res) => {});

router.post("/", (req, res) => {});

router.put("/:id", (req, res) => {});

router.delete("/", (req, res) => {});

export default router;
