const formidable = require("formidable");
const ProductModel = require("../models/product");
const fs = require("fs");

const sendJSONResponse = (res, status, content) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(status).json(content);
};

module.exports.getList = function (req, res) {
  const searchObj = req.query.searchParams || {};

  ProductModel.find(searchObj)
    .populate("owner")
    .exec(function (err, books) {
      if (err)
        return sendJSONResponse(res, 500, {
          success: false,
          err: { msg: "Fetch faild!" },
        });

      sendJSONResponse(res, 200, { success: true, data: books });
    });
};

module.exports.add = function (req, res, next) {
  let num = 0;
  let product;
  console.log("req.body");
  console.log(req.body);
  const form = formidable({ multiples: true });
  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    console.log("files.photo");
    console.log(files.photo);
    product = new ProductModel({
      name: fields.name,
      availability: fields.availability,
      price: parseFloat(fields.price),
      description: fields.description,
      photo: {
        data: fs.readFileSync(files.photo.filepath),
        contentType: files.photo.mimetype,
      },
    });
  });
  form.on("end", function (d) {
    console.log("3333333333");
    num++;
    //Помилка модуля (викликається двічі)
    if (num == 1) {
      //Збереження моделі і відключення від бази даних
      product.save(function (err, savedProduct) {
        if (err) {
          sendJSONResponse(res, 500, {
            success: false,
            err: { msg: "Saving faild!" },
          });
          return;
        }
        sendJSONResponse(res, 201, { success: true, data: savedProduct });
      });
    }
  });
};

module.exports.update = function (req, res, next) {
  let num = 0;
  let product;
  const form = formidable({ multiples: true });
  form.parse(req, (err, fields, files) => {
    console.log("111111");
    if (err) {
      next(err);
      return;
    }

    //Створення об’єкта моделі
    product = {
      name: fields.name,
      availability: fields.availability,
      price: parseFloat(fields.price),
      description: fields.description,
    };
    req.body.id = fields._id;
    req.body.product = product;
    console.log("req.body.id");
    console.log(req.body.id);
    console.log("req.body.product");
    console.log(req.body.product);
    if (files.photo.originalFilename) {
      //Якщо надіслано нове фото, то змінюємо поле фото
      product.photo = {
        data: fs.readFileSync(files.photo.filepath),
        contentType: files.photo.mimetype,
      };
    }
  });
  form.on("end", function (d) {
    console.log("3333333333");
    num++;
    //Помилка модуля (викликається двічі)
    if (num == 1) {
      //Збереження моделі і відключення від бази даних
      ProductModel.findByIdAndUpdate(
        req.body.id,
        req.body.product,
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
    }
  });
};

// module.exports.add = function (req, res, next) {
//   let product = new ProductModel({
//     title: req.body.title,
//     price: parseFloat(req.body.price),
//     photo: req.body.photo,
//     owner: req.body.owner,
//   });
//   product.save(function (err, savedProduct) {
//     if (err) {
//       sendJSONResponse(res, 500, {
//         success: false,
//         err: { msg: "Saving faild!" },
//       });
//       return;
//     }
//     sendJSONResponse(res, 201, { success: true, data: savedProduct });
//   });
// };

module.exports.delete = function (req, res) {
  console.log("---------req.body");
  console.log(req.body);
  ProductModel.findByIdAndDelete(req.body.id, function (err) {
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
  //Пошук об"єкта-книги за id
  ProductModel.findById(req.params.id)
    .populate("owner")
    .exec(function (err, searchProduct) {
      if (err) {
        sendJSONResponse(res, 500, {
          success: false,
          err: { msg: "Find product faild!" },
        });
        return;
      }
      sendJSONResponse(res, 200, { success: true, data: searchProduct });
    });
};
