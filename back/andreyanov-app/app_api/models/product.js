const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productScheme = new Schema({
  name: String,
  availability: String,
  price: Number,
  descriptionFirstParagraph: String,
  descriptionSecondParagraph: String,
  photo: {
    data: Buffer,
    contentType: String,
  },
  category: String,
  characteristics: String,
  license: Array,
});
//Створення моделі
const ProductModel = mongoose.model("Product", productScheme);

module.exports = ProductModel;
