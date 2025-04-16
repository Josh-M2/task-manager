import { TaskTypes } from "@/types/todoTypes";
import DOMpurify from "dompurify";

export const isValidTask = (task: TaskTypes): boolean => {
  if (typeof task !== "object" || task === null) return false;

  task.title = DOMpurify.sanitize(task.title);
  task.description = DOMpurify.sanitize(task.description);

  if (typeof task.title !== "string") return false;
  if (typeof task.description !== "string") return false;
  if (typeof task.priority !== "string") return false;
  if (!["low", "medium", "high"].includes(task.priority)) return false;
  if (typeof task.category !== "string") return false;
  if (!["todo", "doing", "done"].includes(task.category)) return false;
  if (typeof task.dueDate !== "string" && task.dueDate !== null) return false;

  return true;
};

export const validateNewTask = (task: TaskTypes): boolean => {
  task.title = DOMpurify.sanitize(task.title);
  task.description = DOMpurify.sanitize(task.description);

  if (typeof task.title !== "string" || task.title === "") return false;
  if (typeof task.description !== "string" || task.description === "")
    return false;
  if (!["low", "medium", "high"].includes(task.priority)) return false;
  if (task.dueDate === null) return false;

  return true;
};
