const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageScheme = new Schema({
  userName: { type: String, required: true, minlength: 3, maxlength: 50 },
  mail: { type: String, required: true, minlength: 3, maxlength: 40 },
  phoneNumber: { type: String, required: true, minlength: 4, maxlength: 20 },
  message: { type: String, required: true, minlength: 3, maxlength: 500 },
  day: { type: String, required: true, maxlength: 10 },
  month: { type: String, required: true, maxlength: 10 },

  year: { type: String, required: true, maxlength: 10 },
});
//Створення моделі
const MessageModel = mongoose.model("Message", messageScheme);

module.exports = MessageModel;
