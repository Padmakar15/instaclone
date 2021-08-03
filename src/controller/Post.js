import express from "express";
import Post from "../models/Post.js";
import mongoose from "mongoose";

const postController = {};

postController.createpost = (req, res) => {
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
postController.getAllPosts = (req, res) => {
  Post.find()
    .populate("postedBy", "_id name")
    .populate("comments.postedBy", "_id name")
    .then((posts) => {
      res.json(posts);
    })
    .catch((err) => console.log(err));
};
postController.getSubPosts = (req, res) => {
  Post.find({ postedBy: { $in: req.user.following } })
    .populate("postedBy", "_id name")
    .populate("comments.postedBy", "_id name")
    .then((posts) => {
      res.json(posts);
    })
    .catch((err) => console.log(err));
};
postController.getPosts = (req, res) => {
  Post.find({ postedBy: req.user._id })
    .populate("postedBy", "_id name")
    .then((posts) => {
      res.json(posts);
    })
    .catch((err) => console.log(err));
};
postController.likePost = (req, res) => {
  Post.findByIdAndUpdate(
    req.body.postId,
    { $push: { likes: req.user._id } },
    { new: true }
  ).exec((err, result) => {
    if (err) return res.status(422).json({ error: err });
    if (result) return res.status(200).json(result);
  });
};
postController.unlikePost = (req, res) => {
  Post.findByIdAndUpdate(
    req.body.postId,
    { $pull: { likes: req.user._id } },
    { new: true }
  ).exec((err, result) => {
    if (err) return res.status(422).json({ error: err });
    if (result) return res.status(200).json(result);
  });
};
postController.comments = (req, res) => {
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
postController.deletePost = (req, res) => {
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

export default postController;
