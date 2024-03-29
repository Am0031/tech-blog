const path = require("path");
const dataProvider = require("../../dataProvider");

const renderDashboardPage = async (req, res) => {
  try {
    const posts = await dataProvider.getAllPosts();
    const { isLoggedIn } = req.session;
    const { id, username } = req.session.user;

    const userPosts = posts
      .map((post) => post.get({ plain: true }))
      .filter((i) => i.user.id === id);

    const formatData = (each) => {
      const id = each.id;
      const title = each.title;
      const date = each.createdAt;
      return {
        id,
        title,
        date,
      };
    };
    const viewModel = userPosts.map(formatData);
    return res.render("dashboard", { isLoggedIn, username, data: viewModel });
  } catch (error) {
    console.log(`${error.message}`);
    res.render("error");
  }
};

const renderDashboardCommentsPage = async (req, res) => {
  try {
    const { isLoggedIn, user } = req.session;

    const comments = await dataProvider.getMyComments(user.id);
    const commentsData = comments.map((comment) =>
      comment.get({ plain: true })
    );

    const formatData = (each) => {
      const id = each.user.id;
      const commentText = each.commentText;
      const commentDate = each.updatedAt;
      const parentPost = each.post.title;
      return {
        id,
        commentText,
        commentDate,
        parentPost,
      };
    };
    const viewModel = commentsData.map(formatData);
    return res.render("dashboard-comments", {
      isLoggedIn,
      user,
      data: viewModel,
    });
  } catch (error) {
    console.log(`${error.message}`);
    res.render("error");
  }
};

const renderEditPost = async (req, res) => {
  try {
    const { isLoggedIn } = req.session;
    const user = req.session.user;
    const { id } = req.params;
    const post = await dataProvider.getFullPost(id);
    const viewModel = post.get({ plain: true });

    return res.render("editPost", {
      isLoggedIn,
      data: viewModel,
      user: user,
    });
  } catch (error) {
    console.log(`${error.message}`);
    res.render("error");
  }
};

const renderCreatePost = async (req, res) => {
  try {
    const { isLoggedIn } = req.session;
    const user = req.session.user;

    return res.render("addPost", { isLoggedIn, user: user });
  } catch (error) {
    console.log(`${error.message}`);
    res.render("error");
  }
};

module.exports = {
  renderDashboardPage,
  renderEditPost,
  renderCreatePost,
  renderDashboardCommentsPage,
};
