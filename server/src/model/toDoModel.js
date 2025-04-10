import mongoose from "mongoose";

const { Schema } = mongoose;

const todoSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: String,
  priority: {
    type: String,
    enum: ["low", "medium", "high"],
    default: "low",
  },
  dueDate: Date,
  createdDate: {
    type: Date,
    default: Date.now,
  },
  category: ["todo", "doing", "done"],
});

const Todo = mongoose.model("Todo", todoSchema);

export default Todo;
