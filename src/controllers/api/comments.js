const createComment = (req, res) => {
  console.log("create comment");
  return res.json({ message: "create comment" });
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
