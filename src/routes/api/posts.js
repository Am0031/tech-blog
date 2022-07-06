const { Router } = require("express");

const router = Router();

const auth = require("../../middleware/auth");

const {
  getAllPosts,
  getPostById,
  createPost,
  updatePostById,
  deletePostById,
} = require("../../controllers/api/posts");

router.get("/", getAllPosts);
router.get("/:id", getPostById);
router.post("/", auth, createPost);
router.put("/:id", auth, updatePostById);
router.delete("/:id", auth, deletePostById);

module.exports = router;
