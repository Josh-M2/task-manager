import { Router } from "express";

import {
  getAllTodos,
  createTodo,
  getTodoById,
  updateTodo,
  deleteTodo,
  getTodoByCategory,
  moveTask,
} from "../controller/toDoController.js";

const router = Router();

router.get("/", getAllTodos);
router.get("/:id", getTodoById);
router.get("/todo", getTodoByCategory);

router.put("/:id", updateTodo);
router.put("/move-task/:id", moveTask);

router.post("/", createTodo);

router.delete("/:id", deleteTodo);

export default router;
