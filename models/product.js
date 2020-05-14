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

module.exports = mongoose.model('products', Product)