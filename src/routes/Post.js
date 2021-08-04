const express = require("express");
const { requireSignIn } = require("../middleware/RequireLogin");
const {
  createpost,
  getAllPosts,
  getPosts,
  likePost,
  unlikePost,
  comments,
  deletePost,
  getSubPosts,
} = require("../controller/Post");

const router = express.Router();

router.post("/createpost", requireSignIn, createpost);
router.get("/allposts", requireSignIn, getAllPosts);
router.get("/getPosts", requireSignIn, getPosts);
router.put("/like", requireSignIn, likePost);
router.put("/unlike", requireSignIn, unlikePost);
router.put("/comment", requireSignIn, comments);
router.delete("/deletepost/:postId", requireSignIn, deletePost);
router.get("/getsubposts", requireSignIn, getSubPosts);

module.exports = router;
