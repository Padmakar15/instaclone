import express from "express";
import userController from "../controller/User.js";
const { signup, signin, searchUser, followUser, unfollowUser, updateProfile } =
  userController;
import userMiddleware from "../middleware/RequireLogin.js";
const { requireSignIn } = userMiddleware;

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/user/:id", requireSignIn, searchUser);
router.put("/follow", requireSignIn, followUser);
router.put("/unfollow", requireSignIn, unfollowUser);
router.put("/updateprofile", requireSignIn, updateProfile);

export default router;
