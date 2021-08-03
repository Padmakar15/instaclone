import express from "express";
import postController from "../controller/Post.js";
const {
  createpost,
  getAllPosts,
  getPosts,
  likePost,
  unlikePost,
  comments,
  deletePost,
  getSubPosts,
} = postController;
import userMiddleware from "../middleware/RequireLogin.js";
const { requireSignIn } = userMiddleware;

const router = express.Router();

router.post("/createpost", requireSignIn, createpost);
router.get("/allposts", requireSignIn, getAllPosts);
router.get("/getPosts", requireSignIn, getPosts);
router.put("/like", requireSignIn, likePost);
router.put("/unlike", requireSignIn, unlikePost);
router.put("/comment", requireSignIn, comments);
router.delete("/deletepost/:postId", requireSignIn, deletePost);
router.get("/getsubposts", requireSignIn, getSubPosts);

export default router;
