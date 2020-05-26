const mongoose = require("mongoose");
const todoSchema = mongoose.Schema({
  todo_description: {
    type: String,
  },
  todo_responsible: {
    type: String,
  },
  todo_priority: {
    type: String,
  },
  todo_completed: {
    type: Boolean,
  },
});
const todoModel = mongoose.model("todoschema", todoSchema);
module.exports = todoModel;
