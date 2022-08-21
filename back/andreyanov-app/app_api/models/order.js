const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderScheme = new Schema({
  userName: String,
  userSurname: String,
  userPhoneNumber: String,
  userMail: String,
  address: String,
  message: String,
  status: String,
  totalPrice: Number,
  date: Array,
  orderList: [
    {
      product: { type: Schema.Types.ObjectId, ref: "Product" },
      quantity: Number,
    },
  ],
});
//Створення моделі
const OrderModel = mongoose.model("Order", orderScheme);

module.exports = OrderModel;
