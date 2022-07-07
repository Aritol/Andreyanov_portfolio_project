const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productScheme = new Schema({
  name: String,
  availability: String,
  price: Number,
  description: String,
  photo: {
    data: Buffer,
    contentType: String,
  },
});
//Створення моделі
const ProductModel = mongoose.model("Product", productScheme);

module.exports = ProductModel;
