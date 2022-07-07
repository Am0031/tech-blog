const { User, Post, Comment } = require("../../models");

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({
      attributes: ["id", "title", "createdAt"],
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
      attributes: ["id", "title", "postText", "createdAt"],
      include: [
        {
          model: Comment,
          attributes: ["commentText", "createdAt"],
          include: [{ model: User, attributes: ["userName"] }],
        },
        { model: User, attributes: ["userName"] },
      ],
    });
    if (!post) {
      return res.status(500).json({ message: "Post not found" });
    }
    return res.json(post);
  } catch (error) {
    console.error(`ERROR | ${error.message}`);
    return res.status(500).json(error);
  }
};

const createPost = async (req, res) => {
  try {
    const { title, postText } = req.body;
    if (!title && !postText) {
      return res.status(400).json({ message: "Unable to create post" });
    }

    // FOR NOW: hard code user id
    // Later, get user id from logged in session object
    const userId = 1;

    const newPost = await Post.create({ title, postText, userId });
    return res.status(200).json({ message: "Post created", newPost: newPost });
  } catch (error) {
    console.error(`ERROR | ${error.message}`);
    return res.status(500).json(error);
  }
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
