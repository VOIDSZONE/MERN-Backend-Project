const Comment = require("../models/commentModel");
const Post = require("../models/postModel");

exports.createComment = async (req, res) => {
  try {
    const { post, user, body } = req.body;

    const commentObj = new Comment({ post, user, body });

    const savedComment = await commentObj.save();

    const updatedPost = await Post.findByIdAndUpdate(
      post,
      {
        $push: { comments: savedComment._id },
      },
      { new: true }
    )
      .populate("comments")
      .exec();

    res.json({
      data: updatedPost,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      error: "Error while fetching blogs.",
    });
  }
};
