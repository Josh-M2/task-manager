import Todo from "../model/toDoModel.js";

export const getAllTodos = async (req, res) => {
  try {
    console.log("getting all task");
    const todos = await Todo.find().sort({ createdDate: -1 });
    // console.log("all task", todos);
    res.status(201).json(todos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createTodo = async (req, res) => {
  try {
    const socket = req.app.get("socket");
    console.log("creating task body", req.body);

    const todo = new Todo(req.body);
    console.log("new todo", todo);

    const savedTodo = await todo.save();
    console.log("savedTodo", savedTodo);

    savedTodo && socket.emit("updateTask", savedTodo);

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

export const moveTask = async (req, res) => {
  //access the suck it from main shit
  const socket = req.app.get("socket");

  try {
    console.log("adding to doing list ");
    const { toCategory } = req.body.params;
    console.log("move task to category", toCategory);
    const updated = await Todo.findByIdAndUpdate(
      req.params.id,
      { category: toCategory },
      {
        new: true,
      }
    );
    if (!updated) return res.status(404).json({ message: "Todo not found" });
    socket.emit("updateTask", updated);
    res.status(201).json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
