const path = require("path");

const renderHomePage = (req, res) => {
  const filePath = path.join(__dirname, "../../../public/home.html");
  return res.sendFile(filePath);
};
const renderFullPost = (req, res) => {
  const filePath = path.join(__dirname, "../../../public/fullPost.html");
  return res.sendFile(filePath);
};
const renderLoginPage = (req, res) => {
  const filePath = path.join(__dirname, "../../../public/login.html");
  return res.sendFile(filePath);
};
const renderSignupPage = (req, res) => {
  const filePath = path.join(__dirname, "../../../public/signup.html");
  return res.sendFile(filePath);
};

module.exports = {
  renderHomePage,
  renderFullPost,
  renderLoginPage,
  renderSignupPage,
};
