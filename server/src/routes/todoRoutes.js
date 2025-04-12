import { Router } from "express";

import {
  getAllTodos,
  createTodo,
  getTodoById,
  updateTodo,
  deleteTodo,
  getTodoByCategory,
  addToDoing,
  addToDone,
  addToDo,
} from "../controller/toDoController.js";

const router = Router();

router.get("/", getAllTodos);
router.get("/:id", getTodoById);
router.get("/todo", getTodoByCategory);

router.put("/:id", updateTodo);
router.put("/doing/:id", addToDoing);
router.put("/done/:id", addToDone);
router.put("/todo/:id", addToDo);

router.post("/", createTodo);

router.delete("/:id", deleteTodo);

export default router;
