import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import User from "../models/User.js";

const userMiddleware = {};
userMiddleware.requireSignIn = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization)
    return res.status(401).json({ error: "authorization requred" });
  const token = authorization.replace("Bearer ", "");
  jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
    if (err) return res.status(401).json({ error: err });
    const { _id } = payload;
    User.findById(_id).then((userdata) => {
      req.user = userdata;
      next();
    });
  });
};

export default userMiddleware;
