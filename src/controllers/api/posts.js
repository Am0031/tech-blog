const { User, Post, Comment } = require("../../models");

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({
      attributes: ["id", "title", "updatedAt"],
      include: [{ model: User, attributes: ["username"] }],
    });
    if (!posts) {
      return res.status(500).json({ message: "Posts not found" });
    }
    return res.json({ data: posts });
  } catch (error) {
    console.error(`ERROR | ${error.message}`);
    return res.status(500).json(error);
  }
};

const getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findByPk(id, {
      attributes: ["id", "title", "postText", "updatedAt"],
      include: [
        {
          model: Comment,
          attributes: ["commentText", "updatedAt"],
          include: [{ model: User, attributes: ["username"] }],
        },
        { model: User, attributes: ["username"] },
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
    const { title, postText, id } = req.body;
    if (!title && !postText) {
      return res.status(400).json({ message: "Unable to create post" });
    }

    // FOR NOW: hard code user id
    // Later, get user id from logged in session object
    const userId = id;

    const newPost = await Post.create({ title, postText, userId });
    return res.status(200).json({ message: "Post created", newPost: newPost });
  } catch (error) {
    console.error(`ERROR | ${error.message}`);
    return res.status(500).json(error);
  }
};

const updatePostById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findByPk(id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    const { title, postText } = req.body;
    if (!title && !postText) {
      return res.status(500).json({ message: "Unable to update post" });
    }
    await Post.update({ title, postText }, { where: { id } });

    return res.status(200).json({ message: "Post updated" });
  } catch (error) {
    console.error(`ERROR | ${error.message}`);
    return res.status(500).json(error);
  }
};

const deletePostById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findByPk(id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    await Post.destroy({ where: { id } });
    return res.status(200).json({ message: "Post deleted" });
  } catch (error) {
    console.error(`ERROR | ${error.message}`);
    return res.status(500).json(error);
  }
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePostById,
  deletePostById,
};
