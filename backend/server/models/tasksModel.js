import mongoose from "mongoose";
const taskSchema = new mongoose.Schema({
  id: String,
  list: String,
  category: String,
  subtasks: [
    {
      name: String,
      date: String,
      completed: Boolean,
    },
  ],
});
const taskModel = new mongoose.model("tasks", taskSchema);
export default taskModel;
