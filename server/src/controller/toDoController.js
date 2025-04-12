import Todo from "../model/toDoModel.js";

export const getAllTodos = async (req, res) => {
  try {
    console.log("getting all task");
    const todos = await Todo.find().sort({ createdDate: -1 });
    console.log("task: ", todos);
    res.status(201).json(todos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createTodo = async (req, res) => {
  try {
    const { title, description, priority, dueDate } = req.body;
    console.log("creating task body", req.body);
    const todo = new Todo({
      title: title,
      description: description,
      priority: priority,
      dueDate: dueDate,
    });
    console.log("new todo", todo);
    const savedTodo = await todo.save();
    res.status(201).json(savedTodo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getTodoById = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) return res.status(404).json({ message: "Todo not found" });
    res.status(201).json(todo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getTodoByCategory = async (req, res) => {
  try {
    const todo = await Todo.find({ category: "todo" });
    if (!todo)
      return res.status(404).json({ message: "no list of Todo category" });
    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateTodo = async (req, res) => {
  try {
    console.log("upodating");
    console.log("req.params.id", req.params.id);
    console.log("req.body", req.body);
    const updated = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated) return res.status(404).json({ message: "Todo not found" });
    console.log("updated", updated);
    res.status(201).json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const deleted = await Todo.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Todo not found" });
    console.log("deleted");
    res.status(201).json(deleted);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const addToDoing = async (req, res) => {
  try {
    console.log("adding to doing list ");
    const updated = await Todo.findByIdAndUpdate(
      req.params.id,
      { category: "doing" },
      {
        new: true,
      }
    );
    if (!updated) return res.status(404).json({ message: "Todo not found" });
    console.log("added to doing list ");
    res.status(201).json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const addToDo = async (req, res) => {
  try {
    console.log("adding to doing list ");
    const updated = await Todo.findByIdAndUpdate(
      req.params.id,
      { category: "todo" },
      {
        new: true,
      }
    );
    if (!updated) return res.status(404).json({ message: "Todo not found" });
    console.log("added to doing list ");
    res.status(201).json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const addToDone = async (req, res) => {
  try {
    console.log("adding to doing list ");
    const updated = await Todo.findByIdAndUpdate(
      req.params.id,
      { category: "done" },
      {
        new: true,
      }
    );
    if (!updated) return res.status(404).json({ message: "Todo not found" });
    console.log("added to doing list ");
    res.status(201).json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
