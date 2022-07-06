const { Router } = require("express");

const {
  renderDashboardPage,
  renderCreatePost,
  renderEditPost,
} = require("../../controllers/views/privateViews");

const router = Router();

router.get("/dashboard", renderDashboardPage);
router.get("/dashboard/create", renderCreatePost);
router.get("/dashboard/edit/:id", renderEditPost);

module.exports = router;
