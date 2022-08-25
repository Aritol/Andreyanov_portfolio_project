const formidable = require("formidable");
const MessageModel = require("../models/message");
const fs = require("fs");

const sendJSONResponse = (res, status, content) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(status).json(content);
};

module.exports.getList = function (req, res) {
  const searchObj = {};

  MessageModel.find(searchObj, function (err, messages) {
    if (err)
      return sendJSONResponse(res, 500, {
        success: false,
        err: { msg: "Fetch faild!" },
      });
    else {
      sendJSONResponse(res, 200, { success: true, data: messages });
    }
  });
};

module.exports.add = function (req, res, next) {
  console.log("-------------------req.body---------------");
  console.log(req.body);

  let nowDate = new Date();

  let message = new MessageModel({
    userName: req.body.userName,
    mail: req.body.mail,
    phoneNumber: req.body.phoneNumber,
    message: req.body.message,
    day: nowDate.getDate(),
    month: nowDate.getMonth() + 1,
    year: nowDate.getFullYear(),
  });
  message.save(function (err, savedMessage) {
    if (err) {
      console.log(err);
      sendJSONResponse(res, 500, {
        success: false,
        err: { msg: "Saving faild! some field is empty" },
      });
      return;
    }
    sendJSONResponse(res, 201, { success: true, data: savedMessage });
  });
};

module.exports.delete = function (req, res) {
  MessageModel.findByIdAndDelete(req.body.id, function (err) {
    if (err) {
      console.log("---------err");
      console.log(err);
      sendJSONResponse(res, 500, {
        success: false,
        err: { msg: "Delete faild!" },
      });
      return;
    }
    sendJSONResponse(res, 200, { success: true });
  });
};

module.exports.getById = function (req, res) {
  MessageModel.findById(req.params.id, function (err, searchMessage) {
    if (err) {
      sendJSONResponse(res, 500, {
        success: false,
        err: { msg: "Find product faild!" },
      });
      return;
    }
    sendJSONResponse(res, 200, { success: true, data: searchMessage });
  });
};
