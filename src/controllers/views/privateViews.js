const path = require("path");

const renderDashboardPage = (req, res) => {
  const filePath = path.join(__dirname, "../../../public/dashboard.html");
  return res.sendFile(filePath);
};
const renderEditPost = (req, res) => {
  const filePath = path.join(__dirname, "../../../public/editPost.html");
  return res.sendFile(filePath);
};
const renderCreatePost = (req, res) => {
  const filePath = path.join(__dirname, "../../../public/createPost.html");
  return res.sendFile(filePath);
};

module.exports = { renderDashboardPage, renderEditPost, renderCreatePost };
