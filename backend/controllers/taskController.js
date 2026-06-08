const db = require("../config/db");

const createTask = async (req, res) => {
  try {
    const { title } = req.body;

    const [result] = await db.query(
      "INSERT INTO tasks(title) VALUES(?)",
      [title]
    );

    res.status(201).json({
      message: "Task Created",
      id: result.insertId
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });
  }
};

const getTasks = async (req, res) => {
  try {

    const [tasks] = await db.query(
      "SELECT * FROM tasks"
    );

    res.status(200).json(tasks);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });

  }
};

const updateTask = async (req, res) => {
  try {

    const { id } = req.params;
    const { title } = req.body;

    await db.query(
      "UPDATE tasks SET title = ? WHERE id = ?",
      [title, id]
    );

    res.status(200).json({
      message: "Task Updated Successfully"
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });

  }
};

const deleteTask = async (req, res) => {
  try {

    const { id } = req.params;

    await db.query(
      "DELETE FROM tasks WHERE id = ?",
      [id]
    );

    res.status(200).json({
      message: "Task Deleted Successfully"
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });

  }
};

module.exports = {
  createTask,
  getTasks,
  updateTask,
  deleteTask
};