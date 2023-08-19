const Todo = require("../models/Todo");

exports.createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    const response = await Todo.create({ title, description });
    res.status(200).json({
      success: true,
      data: response,
      message: "Entry Added to Database",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error_message: error.message,
    });
  }
};
