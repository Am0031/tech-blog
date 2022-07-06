const renderDashboardPage = (req, res) => {
  console.log("render");
  return res.json({ render: "dashboard" });
};
const renderEditPost = (req, res) => {
  console.log("render");
  return res.json({ render: "edit post" });
};
const renderCreatePost = (req, res) => {
  console.log("render");
  return res.json({ render: "create post" });
};

module.exports = { renderDashboardPage, renderEditPost, renderCreatePost };
