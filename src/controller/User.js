const express = require("express");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Post = require("../models/Post");
const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: process.env.MAILSENDER,
    },
  })
);
exports.signup = (req, res) => {
  const { name, email, password, profile } = req.body;
  if (!name || !email || !password)
    return res.status(422).json({ error: "please add all the fields" });
  User.findOne({ email: email })
    .then(async (saveduser) => {
      if (saveduser)
        return res.status(422).json({ error: "user already exists" });
      const hash_password = await bcrypt.hash(password, 10);
      const user = new User({
        name,
        email,
        hash_password,
        profile,
      });
      user
        .save()
        .then((user) => {
          transporter.sendMail({
            to: user.email,
            from: process.env.EMAIL,
            subject: "signup success",
            html: "<h1>Welcome to instagram</h1>",
          });
          res.status(200).json({ message: "user saved successfully" });
        })
        .catch((error) => res.status(400).json({ message: error }));
    })
    .catch((error) => res.status(400).json({ message: error }));
};

exports.signin = (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(422).json("please add email and password");
  User.findOne({ email: email }).then((savedUser) => {
    if (!savedUser) return res.status(422).json("invalid email or password");
    bcrypt
      .compare(password, savedUser.hash_password)
      .then((doMatch) => {
        if (doMatch) {
          const token = jwt.sign(
            { _id: savedUser._id },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
          );
          const { _id, name, email, followers, following, profile } = savedUser;
          res.status(200).json({
            token,
            user: { _id, name, email, followers, following, profile },
          });
        } else {
          return res.status(422).json("invalid email or password");
        }
      })
      .catch((error) => console.log(error));
  });
};

exports.searchUser = (req, res) => {
  User.findOne({ _id: req.params.id })
    .select("-password")
    .then((user) => {
      Post.find({ postedBy: req.params.id })
        .populate("postedBy", "_id name")
        .exec((err, posts) => {
          if (err) return res.status(422).json({ error: err });
          if (posts) return res.status(200).json({ user, posts });
        });
    })
    .catch((err) => {
      return res.status(422).json({ error: "user not found" });
    });
};
exports.followUser = (req, res) => {
  User.findByIdAndUpdate(
    req.body.followId,
    {
      $push: { followers: req.user._id },
    },
    { new: true },
    (err, result) => {
      if (err) return res.status(422).json({ error: err });
      User.findByIdAndUpdate(
        req.user._id,
        {
          $push: { following: req.body.followId },
        },
        { new: true }
      )
        .select("-password")
        .then((result) => {
          res.json(result);
        })
        .catch((err) => res.status(422).json({ erorr: err }));
    }
  );
};

exports.unfollowUser = (req, res) => {
  User.findByIdAndUpdate(
    req.body.unfollowId,
    {
      $pull: { followers: req.user._id },
    },
    { new: true },
    (err, result) => {
      if (err) return res.status(422).json({ error: err });
      User.findByIdAndUpdate(
        req.user._id,
        {
          $pull: { following: req.body.unfollowId },
        },
        { new: true }
      )
        .select("-password")
        .then((result) => {
          res.json(result);
        })
        .catch((err) => res.status(422).json({ erorr: err }));
    }
  );
};

exports.updateProfile = (req, res) => {
  User.findByIdAndUpdate(
    req.user._id,
    { $set: { profile: req.body.profile } },
    { new: true },
    (err, result) => {
      if (err) return res.status(422).json({ error: err });
      if (result) return res.status(200).json(result);
    }
  );
};
exports.searchUsers = (req, res) => {
  let userPattern = new RegExp(`^${req.body.query}`);
  User.find({ email: { $regex: userPattern } })
    .select("_id name")
    .then((user) => res.json({ user }))
    .catch((err) => res.json({ error: err }));
};
