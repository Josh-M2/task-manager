import Todo from "../model/toDoModel.js";

export const getAllTodos = async (req, res) => {
  try {
    console.log("getting all task");
    const todos = await Todo.find().sort({ createdDate: -1 });
    console.log("task: ", todos)
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createTodo = async (req, res) => {
  try {
    const { title, description, priority, duedate} = req.body;
    console.log("creating task body", 
      req.body
    );
    const todo = new Todo({title: title, 
      description: description, 
      priority: priority,
      duedate: dueDate,});
      console.log("new todo", 
        todo
      );
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
    res.json(todo);
  } catch (err) {
    res.status(500).json({ error: err.message });
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
    console.log("updated");
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const deleted = await Todo.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Todo not found" });
    res.json({ message: "Todo deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
