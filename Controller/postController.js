const { validationResult } = require("express-validator");
const { post } = require("../models/Post");

const postController = {
  getAll: (req, res) => {
    museum.find({}, (err, docs) => {
      if (!err) {
        res.json(docs);
      } else {
        res.status(500).json(err);
      }
    });
  },
  add: (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    let pp = new post({
      title: req.body.title,
      description: req.body.description,
    });

    pp.save((err, doc) => {
      if (!err) {
        res.status(201).json(doc);
      } else {
        res.status(500).json(err);
      }
    });
  },
  getById: (req, res) => {
    let id = req.params.id;
  },
  deleteById: (req, res) => {
    let id = req.params.id;

    post.findById(id, (err, doc) => {
      if (!err) {
        doc.isdeleted = true;
        doc.save();
        res.json(doc);
      } else res.status(500).json(err);
    });
  },
};

module.exports = {
  postController,
};
