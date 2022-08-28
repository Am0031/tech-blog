const { User, Post, Comment } = require("../../models");

const getMyComments = async () => {
  try {
    const { id } = req.params;

    const myComments = await Comment.findAll({
      attributes: ["id", "commentText", "updatedAt"],
      include: [
        { model: User, attributes: ["id", "username"] },
        { model: Post, attributes: ["id", "title"] },
      ],
    });

    if (!myComments) {
      return res.status(500).json({ message: "Comments not found" });
    }
    return res.json({ data: myComments });
  } catch (error) {
    console.error(`ERROR | ${error.message}`);
    return res.status(500).json(error);
  }
};

const createComment = async (req, res) => {
  try {
    const { postId, commentText, userId } = req.body;
    if (!commentText) {
      return res.status(400).json({ message: "Unable to create comment" });
    }

    const newComment = await Comment.create({ commentText, userId, postId });
    return res
      .status(200)
      .json({ message: "Comment created", newComment: newComment });
  } catch (error) {
    console.error(`ERROR | ${error.message}`);
    return res.status(500).json(error);
  }
};
const deleteComment = async (req, res) => {
  try {
    const { id } = req.params;
    const comment = await Comment.findByPk(id);

    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    await Comment.destroy({ where: { id } });
    return res.status(200).json({ message: "Comment deleted" });
  } catch (error) {
    console.error(`ERROR | ${error.message}`);
    return res.status(500).json(error);
  }
};
const updateComment = async (req, res) => {
  try {
    const { id } = req.params;
    const comment = await Comment.findByPk(id);

    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    const { commentText } = req.body;
    if (!commentText) {
      return res.status(500).json({ message: "Unable to update comment" });
    }
    await Comment.update({ commentText }, { where: { id } });

    return res.status(200).json({ message: "Comment updated" });
  } catch (error) {
    console.error(`ERROR | ${error.message}`);
    return res.status(500).json(error);
  }
};

module.exports = { createComment, updateComment, deleteComment, getMyComments };
