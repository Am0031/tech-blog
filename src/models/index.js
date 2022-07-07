const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

//a post always belongs to only 1 user
Post.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

//a user can create many posts
User.hasMany(Post, {
  foreignKey: "userId",
});

//a comment always belongs to only 1 user
Comment.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

//a user can create many comments
User.hasMany(Comment, {
  foreignKey: "userId",
});

//a comment always belongs to 1 parent post
Comment.belongsTo(Post, {
  foreignKey: "postId",
  onDelete: "CASCADE",
});

//a post can have many comments
Post.hasMany(Comment, {
  foreignKey: "postId",
});

module.exports = { User, Post, Comment };
