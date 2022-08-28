const { Router } = require("express");

const router = Router();

const auth = require("../../middleware/auth");
const {
  createComment,
  updateComment,
  deleteComment,
  getMyComments,
} = require("../../controllers/api/comments");

router.post("/", auth, createComment);

//potential other routes? but no button for it yet - need to add to template
router.put("/:id", auth, updateComment);
router.delete("/:id", auth, deleteComment);
router.get("/user/:id", auth, getMyComments);

module.exports = router;
