"use strict";
const Models = require("../models");
const axios = require("axios");

const createPost = (data, res) => {
  console.log(data);
  Models.Post.create(data)
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, data: err.message });
    });
};

const getPosts = (res) => {
  Models.Post.findAll({})
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, data: err.message });
    });
};
const getSinglePost = (req, res) => {
  Models.Post.findOne({ where: { animalId: req.params.id } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, data: err.message });
    });
};
const updatePost = (req, res) => {
  let postId = req.params.id;

  const formData = new FormData();
  formData.append("title", req.body.title);
  formData.append("content", req.body.content);

  if (req.file) {
    formData.append("photo", req.file); // add the photo to the form data
  }

  axios
    .put("/api/posts/" + postId, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      res.send({ result: 200, data: response.data });
    })
    .catch((error) => {
      throw error;
    });
};
const deletePost = (req, res) => {
  let postId = req.params.id;

  Models.Post.destroy({ where: { animalId: postId } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

module.exports = {
  createPost,
  getPosts,
  updatePost,
  deletePost,
  getSinglePost,
};
