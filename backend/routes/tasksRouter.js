const express = require("express");
const tasksRouter = express.Router();

const {
  getAlltasks,
  addTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasksControllers");

// @description -> Get all taskes from the todo list
// @path        -> http://localhost:5000/api/tasks
// @method      -> Get
// @privacy     -> public
tasksRouter.get("/tasks", getAlltasks);

// @description -> Add a new task to the todo list
// @path        -> http://localhost:5000/api/tasks
// @method      -> Post
// @privacy     -> public
tasksRouter.post("/tasks", addTask);

// @description -> update an existing task
// @path        -> http://localhost:5000/api/tasks/:id
// @method      -> Put
// @privacy     -> public
tasksRouter.put("/tasks/:id", updateTask);

// @description -> delete a task from the todo list
// @path        -> http://localhost:5000/api/tasks/:id
// @method      -> Delete
// @privacy     -> public
tasksRouter.delete("/tasks/:id", deleteTask);

module.exports = tasksRouter;
