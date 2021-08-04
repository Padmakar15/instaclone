const express = require("express");
const Post = require("../models/Post");
const mongoose = require("mongoose");

exports.createpost = (req, res) => {
  const { title, body, pic } = req.body;
  console.log(title, body, pic);
  if (!title || !body || !pic)
    return res.status(422).json({ error: "please add all the fields" });
  const post = new Post({ title, body, photo: pic, postedBy: req.user });
  req.user.hash_password = undefined;
  post
    .save()
    .then((result) => {
      return res.status(200).json({ post: result });
    })
    .catch((error) => console.log(error));
};
exports.getAllPosts = (req, res) => {
  Post.find()
    .populate("postedBy", "_id name")
    .populate("comments.postedBy", "_id name")
    .then((posts) => {
      res.json(posts);
    })
    .catch((err) => console.log(err));
};
exports.getSubPosts = (req, res) => {
  Post.find({ postedBy: { $in: req.user.following } })
    .populate("postedBy", "_id name")
    .populate("comments.postedBy", "_id name")
    .then((posts) => {
      res.json(posts);
    })
    .catch((err) => console.log(err));
};
exports.getPosts = (req, res) => {
  Post.find({ postedBy: req.user._id })
    .populate("postedBy", "_id name")
    .then((posts) => {
      res.json(posts);
    })
    .catch((err) => console.log(err));
};
exports.likePost = (req, res) => {
  Post.findByIdAndUpdate(
    req.body.postId,
    { $push: { likes: req.user._id } },
    { new: true }
  ).exec((err, result) => {
    if (err) return res.status(422).json({ error: err });
    if (result) return res.status(200).json(result);
  });
};
exports.unlikePost = (req, res) => {
  Post.findByIdAndUpdate(
    req.body.postId,
    { $pull: { likes: req.user._id } },
    { new: true }
  ).exec((err, result) => {
    if (err) return res.status(422).json({ error: err });
    if (result) return res.status(200).json(result);
  });
};
exports.comments = (req, res) => {
  const comment = {
    text: req.body.text,
    postedBy: req.user._id,
  };
  Post.findByIdAndUpdate(
    req.body.postId,
    { $push: { comments: comment } },
    { new: true }
  )
    .populate("comments.postedBy", "_id name")
    .populate("postedBy", "_id name")
    .exec((err, result) => {
      if (err) return res.status(422).json({ error: err });
      if (result) return res.status(200).json(result);
    });
};
exports.deletePost = (req, res) => {
  Post.findOne({ _id: req.params.postId })
    .populate("postedBy", "_id")
    .exec((err, post) => {
      if (err) return res.status(422).json({ error: err });
      if (post.postedBy._id.toString() === req.user._id.toString()) {
        post
          .remove()
          .then((result) => {
            res.json(result);
          })
          .catch((err) => res.json({ error: err }));
      }
    });
};
