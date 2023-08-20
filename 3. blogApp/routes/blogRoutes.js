const express = require("express");
const { createBlog, getBlogs } = require("../controllers/postController");
const { createComment } = require("../controllers/commentController");
const { likeComment, unlikeComment } = require("../controllers/likeController");

const router = express.Router();

router.post("/createBlog", createBlog);
router.get("/getBlogs", getBlogs);
router.post("/createComment", createComment);
router.post("/like/like", likeComment);
router.post("/like/unlike", unlikeComment);

module.exports = router;
