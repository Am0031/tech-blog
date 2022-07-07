const { User, Post, Comment } = require("../../models");

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [{ model: User, attributes: ["userName"] }],
    });
    if (!posts) {
      return res.status(500).json({ message: "Posts not found" });
    }
    return res.json(posts);
  } catch (error) {
    console.error(`ERROR | ${error.message}`);
    return res.status(500).json(error);
  }
};

const getPostById = async (req, res) => {
  try {
    const post = await Post.findAll({
      include: [{ model: Comment }, { model: User }],
    });
    if (!post) {
      return res.status(500).json({ message: "Posts not found" });
    }
    return res.json(post);
  } catch (error) {
    console.error(`ERROR | ${error.message}`);
    return res.status(500).json(error);
  }
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
