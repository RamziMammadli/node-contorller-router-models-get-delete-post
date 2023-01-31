const { default: mongoose } = require("mongoose");
const { Schema } = mongoose;

const postSchema = new Schema({
  id: String,
  name: String,
  body: String,
  likeCount: Number,
});

const post = mongoose.model("post", postSchema);

module.exports = {
  post,
};
