const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  image: String,
  description: String,
  sizes: [String],
});

module.exports = mongoose.model('Product', productSchema);
