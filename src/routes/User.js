const express = require("express");
const { requireSignIn } = require("../middleware/RequireLogin");
const {
  signup,
  signin,
  searchUser,
  followUser,
  unfollowUser,
  updateProfile,
} = require("../controller/User");

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/user/:id", requireSignIn, searchUser);
router.put("/follow", requireSignIn, followUser);
router.put("/unfollow", requireSignIn, unfollowUser);
router.put("/updateprofile", requireSignIn, updateProfile);

module.exports = router;
