import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  hash_password: {
    type: String,
    required: true,
  },
  profile: {
    type: String,
    default:
      "https://res.cloudinary.com/padmakar15/image/upload/v1627908925/no_profile_yw7k7i.jpg",
  },
  followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  following: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

export default mongoose.model("User", userSchema);
