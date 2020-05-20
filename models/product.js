const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Product = new Schema(
  {
    brand: { type: String, required: true },
    productName: { type: String, required: true },
    size: { type: String, required: false },
    price: { type: Number, required: true },
    unit: { type: String, required: false },
    salePrice: { type: String, required: false },
    unitPrice: { type: String, required: false },
    category: { type: String, required: false },
    imageUrls: [{ type: String, required: true }]
  },
  { timestamps: true }
)
//mongoose documentation says that the first argument should be a capitalized, singular name of the collection your model is for. Doesn't seem like it's breaking anything, but it seems to automatically search for the lowercase, plural version of the string in the first argument. read: https://mongoosejs.com/docs/models.html
module.exports = mongoose.model('products', Product)