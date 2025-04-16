import sanitizeHtml from "sanitize-html";

export const validateTodo = ({
  title,
  description,
  dueDate,
  priority,
  category,
}) => {
  title = sanitizeHtml(title);
  description = sanitizeHtml(description);
  dueDate = sanitizeHtml(dueDate);
  priority = sanitizeHtml(priority);
  category = sanitizeHtml(category);
  // console.log("sanitized title", title);
  if (
    typeof title !== "string" ||
    title.trim() === "" ||
    typeof description !== "string" ||
    description.trim() === "" ||
    typeof dueDate !== "string" ||
    !["low", "medium", "high"].includes(priority) ||
    !["todo", "doing", "done"].includes(category)
  ) {
    return false;
  }

  return true;
};
