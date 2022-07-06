const getAllPosts = (req, res) => {
  console.log("get all posts");
  return res.json({ message: "get all posts" });
};
const getPostById = (req, res) => {
  console.log("get post by id");
  return res.json({ message: "get post by id" });
};

const createPost = (req, res) => {
  console.log("create post");
  return res.json({ message: "create post" });
};

const updatePostById = (req, res) => {
  console.log("update post by id");
  return res.json({ message: "update post" });
};

const deletePostById = (req, res) => {
  console.log("delete post by id");
  return res.json({ message: "delete post by id" });
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePostById,
  deletePostById,
};
