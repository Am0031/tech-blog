const path = require("path");
const dataProvider = require("../../dataProvider");
const { Post, User, Comment } = require("../../models");

const renderHomePage = async (req, res) => {
  try {
    const posts = await dataProvider.getAllPosts();
    const { isLoggedIn } = req.session;

    const formatData = (each) => {
      const id = each.id;
      const title = each.title;
      const user = each.user.username;
      const date = each.updatedAt;
      return {
        id,
        title,
        user,
        date,
      };
    };
    const viewModel = posts.map((d) => d.dataValues).map(formatData);
    return res.render("home", { isLoggedIn, data: viewModel });
  } catch (error) {
    console.log(`${error.message}`);
    res.render("error");
  }
};

const renderFullPost = async (req, res) => {
  try {
    const { id } = req.params;
    const { isLoggedIn } = req.session;
    const post = await dataProvider.getFullPost(id);
    const data = post.dataValues;

    const formatData = (data) => {
      const id = data.id;
      const title = data.title;
      const postText = data.postText;
      const user = data.user.username;
      const date = data.updatedAt;

      const formatComments = (each) => {
        const commentText = each.commentText;
        const commentDate = each.updatedAt;
        const commentUser = each.user.username;
        return { commentText, commentDate, commentUser };
      };
      const comments = data.comments.map(formatComments);
      return {
        id,
        title,
        postText,
        user,
        date,
        comments,
      };
    };

    const viewModel = formatData(data);

    if (isLoggedIn) {
      const sessionUserId = req.session.user.id;
      viewModel.userId = sessionUserId;
    }

    res.render("fullPost", { isLoggedIn, data: viewModel });
  } catch (error) {
    console.log(`${error.message}`);
    res.render("error");
  }
};

const renderLoginPage = (req, res) => {
  return res.render("login", { currentPage: "login" });
};

const renderSignupPage = (req, res) => {
  return res.render("signup", { currentPage: "signup" });
};

module.exports = {
  renderHomePage,
  renderFullPost,
  renderLoginPage,
  renderSignupPage,
};
