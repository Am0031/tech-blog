const { User, Comment, Post } = require("../models");

const getAllPosts = async () => {
  return await Post.findAll({
    attributes: ["id", "title", "createdAt"],
    include: [{ model: User, attributes: ["username"] }],
  });
};

const getFullPost = async (id) => {
  const post = await Post.findByPk(id, {
    attributes: ["id", "title", "postText", "createdAt"],
    include: [
      {
        model: Comment,
        attributes: ["commentText", "createdAt"],
        include: [{ model: User, attributes: ["username"] }],
      },
      { model: User, attributes: ["username"] },
    ],
  });
  return post;
};

module.exports = { getAllPosts, getFullPost };
