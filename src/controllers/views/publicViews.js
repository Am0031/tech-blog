const renderHomePage = (req, res) => {
  console.log("render");
  return res.json({ render: "home page" });
};
const renderFullPost = (req, res) => {
  console.log("render");
  return res.json({ render: "full post" });
};
const renderLoginPage = (req, res) => {
  console.log("render");
  return res.json({ render: "login page" });
};
const renderSignupPage = (req, res) => {
  console.log("render");
  return res.json({ render: "signup page" });
};

module.exports = {
  renderHomePage,
  renderFullPost,
  renderLoginPage,
  renderSignupPage,
};
