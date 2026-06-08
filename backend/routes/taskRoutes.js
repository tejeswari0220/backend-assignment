const express = require("express");
const verifyToken = require("../middleware/authMiddleware");

const {
  createTask,
  getTasks,
  updateTask,
  deleteTask
} = require("../controllers/taskController");

const router = express.Router();

router.post("/tasks", verifyToken, createTask);

router.get("/tasks", verifyToken, getTasks);

router.put("/tasks/:id", verifyToken, updateTask);
router.delete(
  "/tasks/:id",
  verifyToken,
  deleteTask
);

module.exports = router;