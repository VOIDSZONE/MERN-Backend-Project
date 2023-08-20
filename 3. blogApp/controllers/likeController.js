const Like = require("../models/likeModel");
const Post = require("../models/postModel");

exports.likeComment = async (req, res) => {
  try {
    const { post, user } = req.body;

    const likeObj = new Like({ post, user });

    const savedLike = await likeObj.save();

    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { likes: savedLike } },
      { new: true }
    )
      .populate("likes")
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

exports.unlikeComment = async (req, res) => {
  try {
    const { post, like } = req.body;

    await Like.findOneAndDelete({ post: post, _id: like });

    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $pull: { likes: like } },
      { new: true }
    );

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
