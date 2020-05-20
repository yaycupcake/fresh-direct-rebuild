const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password_digest: { type: String, required: true }
  },
  { timestamps: true }
)
//mongoose documentation says that the first argument should be a capitalized, singular name of the collection your model is for. Doesn't seem like it's breaking anything, but it seems to automatically search for the lowercase, plural version of the string in the first argument. read: https://mongoosejs.com/docs/models.html
module.exports = mongoose.model('users', User)