// @description -> Get all taskes from the todo list
// @path        -> http://localhost:5000/api/tasks
// @method      -> Get
// @privacy     -> public
const getAlltasks = async (req, res) => {
  try {
    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({ message: `${error.message}` });
  }
};

// @description -> Add a new task to the todo list
// @path        -> http://localhost:5000/api/tasks
// @method      -> Post
// @privacy     -> public
const addTask = async (req, res) => {
  try {
    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({ message: `${error.message}` });
  }
};

// @description -> update an existing task
// @path        -> http://localhost:5000/api/tasks/:id
// @method      -> Put
// @privacy     -> public
const updateTask = async (req, res) => {
  try {
    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({ message: `${error.message}` });
  }
};

// @description -> delete a task from the todo list
// @path        -> http://localhost:5000/api/tasks/:id
// @method      -> Delete
// @privacy     -> public
const deleteTask = async (req, res) => {
  try {
    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({ message: `${error.message}` });
  }
};

module.exports = { getAlltasks, addTask, updateTask, deleteTask };
