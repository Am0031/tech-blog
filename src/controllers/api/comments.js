const { User, Post, Comment } = require("../../models");

const createComment = async (req, res) => {
  try {
    const { postId, commentText } = req.body;
    if (!commentText) {
      return res.status(400).json({ message: "Unable to create comment" });
    }

    // FOR NOW: hard code user id
    // Later, get user id from logged in session object
    const userId = 1;

    const newComment = await Comment.create({ commentText, userId, postId });
    return res
      .status(200)
      .json({ message: "Comment created", newComment: newComment });
  } catch (error) {
    console.error(`ERROR | ${error.message}`);
    return res.status(500).json(error);
  }
};
const deleteComment = (req, res) => {
  console.log("delete comment by id");
  return res.json({ message: "delete comment by id" });
};
const updateComment = (req, res) => {
  console.log("update comment by id");
  return res.json({ message: "update comment" });
};

module.exports = { createComment, updateComment, deleteComment };
