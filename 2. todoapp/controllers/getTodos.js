const Todo = require("../models/Todo");

exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find({});

    res.status(200).json({
      success: true,
      data: todos,
      message: "Todos fetched successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error_message: error.message,
    });
  }
};

exports.getSingleTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findById({ _id: id });

    if (!todo) {
      return res.status(404).json({
        success: false,
        message: `No Todo is found by this ${id}`,
      });
    }

    res.status(200).json({
      success: true,
      data: todo,
      message: "Todo fetched successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error_message: error.message,
    });
  }
};
