const express = require("express");
const { postController } = require("../Controller/postController");
const router = express.Router();
const { body } = require("express-validator");

router.get("/", postController.getAll);

router.post(
  "/",
  body("title").notEmpty().withMessage("title field is required!"),
  postController.add
);

router.get("/:id", postController.getById);
router.delete("/:id", postController.deleteById);

router.put('/:id', (req, res) => {
    res.send('ok')
    postController.add
  })

module.exports = router;
