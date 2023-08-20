const Post = require("../models/postModel");

exports.createBlog = async (req, res) => {
  try {
    const { title, body } = req.body;

    const post = new Post({ title, body });

    const savedPost = await post.save();

    res.json({
      post: savedPost,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      error: "Error while creating blogs.",
    });
  }
};

exports.getBlogs = async (req, res) => {
  try {
    const getAllBlogs = await Post.find({})

      .populate("comments")
      .populate("likes")
      .exec();

    res.json({
      data: getAllBlogs,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      error: "Error while fetching blogs.",
    });
  }
};
