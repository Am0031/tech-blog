const { User, Comment, Post } = require("../models");

const getAllPosts = async () => {
  return await Post.findAll({
    attributes: ["id", "title", "updatedAt"],
    include: [{ model: User, attributes: ["id", "username"] }],
  });
};

const getFullPost = async (id) => {
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
  return post;
};

module.exports = { getAllPosts, getFullPost };
