const { Router } = require("express");

const router = Router();

const {
  renderHomePage,
  renderFullPost,
  renderLoginPage,
  renderSignupPage,
} = require("../../controllers/views/publicViews");

router.get("/", renderHomePage);
router.get("/login", renderLoginPage);
router.get("/signup", renderSignupPage);
router.get("/posts/:id", renderFullPost);

module.exports = router;
