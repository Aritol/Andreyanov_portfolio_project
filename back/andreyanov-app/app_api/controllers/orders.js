const formidable = require("formidable");
const OrderModel = require("../models/order");
const fs = require("fs");

const sendJSONResponse = (res, status, content) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(status).json(content);
};

module.exports.getList = function (req, res) {
  const searchObj = req.query.searchParams || {};

  OrderModel.find(searchObj)
    .populate("orderList.product")
    .exec(function (err, orders) {
      // orders.orderList.product.populate("orderList");
      if (err)
        return sendJSONResponse(res, 500, {
          success: false,
          err: { msg: "Fetch faild!" },
        });
      console.log("-----orders--------");
      console.log(orders);
      sendJSONResponse(res, 200, { success: true, data: orders });
    });
};

module.exports.update = function (req, res, next) {
  console.log("- updat ---------");
  console.log(req.body);
  // console.log(req.body.objToUpdate);
  let order = {
    status: req.body.status,
  };
  // if (req.body.photo) {
  //   //Якщо надіслано нове фото, то змінюємо поле фото
  //   book.photo = req.body.photo;
  // }
  OrderModel.findByIdAndUpdate(
    req.body.id,
    order,
    { new: true }, //у колбек передається оновлений документ
    function (err) {
      // mongoose.disconnect()
      if (err) {
        sendJSONResponse(res, 500, {
          success: false,
          err: { msg: "Update faild!" },
        });
        return;
      }

      sendJSONResponse(res, 200, { success: true });
    }
  );
};

// module.exports.update = function (req, res, next) {
//   let num = 0;
//   let product;
//   const form = formidable({ multiples: true });
//   form.parse(req, (err, fields, files) => {
//     console.log("111111");
//     if (err) {
//       next(err);
//       return;
//     }
//     let separetedLicense = [];
//     separetedLicense = fields.license.split(",");
//     //Створення об’єкта моделі
//     product = {
//       name: fields.name,
//       availability: fields.availability,
//       price: parseFloat(fields.price),
//       descriptionFirstParagraph: fields.descriptionFirstParagraph,
//       descriptionSecondParagraph: fields.descriptionSecondParagraph,
//       category: fields.category,
//       characteristics: fields.characteristics,
//       license: separetedLicense,
//     };
//     req.body.id = fields._id;
//     req.body.product = product;
//     console.log("req.body.id");
//     console.log(req.body.id);
//     console.log("req.body.product");
//     console.log(req.body.product);
//     if (files.photo.originalFilename) {
//       //Якщо надіслано нове фото, то змінюємо поле фото
//       product.photo = {
//         data: fs.readFileSync(files.photo.filepath),
//         contentType: files.photo.mimetype,
//       };
//     }
//   });
//   form.on("end", function (d) {
//     console.log("3333333333");
//     num++;
//     //Помилка модуля (викликається двічі)
//     if (num == 1) {
//       //Збереження моделі і відключення від бази даних
//       ProductModel.findByIdAndUpdate(
//         req.body.id,
//         req.body.product,
//         { new: true }, //у колбек передається оновлений документ
//         function (err) {
//           // mongoose.disconnect()
//           if (err) {
//             sendJSONResponse(res, 500, {
//               success: false,
//               err: { msg: "Update faild!" },
//             });
//             return;
//           }

//           sendJSONResponse(res, 200, { success: true });
//         }
//       );
//     }
//   });
// };

module.exports.add = function (req, res, next) {
  let order = new OrderModel({
    userName: req.body.userName,
    userSurname: req.body.userSurname,
    userPhoneNumber: req.body.userPhoneNumber,
    userMail: req.body.userMail,
    address: req.body.address,
    message: req.body.message,
    status: "В обробці",
    totalPrice: parseInt(req.body.totalPrice),
    date: req.body.date,
    orderList: req.body.productList,
  });
  order.save(function (err, savedOrder) {
    if (err) {
      sendJSONResponse(res, 500, {
        success: false,
        err: { msg: "Saving faild!" },
      });
      return;
    }
    sendJSONResponse(res, 201, { success: true, data: savedOrder });
  });
};

module.exports.delete = function (req, res) {
  console.log("---------req.body");
  console.log(req.body);
  OrderModel.findByIdAndDelete(req.body.id, function (err) {
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
  OrderModel.findById(req.params.id)
    .populate("orderList.product")
    .exec(function (err, searchOrder) {
      if (err) {
        sendJSONResponse(res, 500, {
          success: false,
          err: { msg: "Find product faild!" },
        });
        return;
      }
      sendJSONResponse(res, 200, { success: true, data: searchOrder });
    });
};

// module.exports.getById = function (req, res) {
//
//   console.log("norm");
//   console.log(req.params.id);
//   OrderModel.findById(req.params.id, function (err, searchOrder) {
//     if (err) {
//       sendJSONResponse(res, 500, {
//         success: false,
//         err: { msg: "Find product faild!" },
//       });
//       return;
//     }
//     sendJSONResponse(res, 200, { success: true, data: searchOrder });
//   });
// };
