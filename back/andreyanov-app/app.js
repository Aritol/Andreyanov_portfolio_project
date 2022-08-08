var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

var indexRouter = require("./routes/index");
var productsRouter = require("./app_api/routes/products");
var usersRouter = require("./app_api/routes/users");
var messagesRouter = require("./app_api/routes/messages");
var ordersRouter = require("./app_api/routes/orders");

var app = express();

require("dotenv").config();
require("./db");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

//--------------------------
const { parseBearer } = require("./app_api/utils/token");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  next();
});

app.use((req, res, next) => {
  // console.log("req.path");
  // console.log(req.path);
  // const openPathes = [
  //   {
  //     method: "GET",
  //     path: "products/",
  //   },
  //   {
  //     method: "GET",
  //     path: "products/legkovi",
  //   },
  //   {
  //     method: "GET",
  //     path: "products/commerce",
  //   },
  //   {
  //     method: "GET",
  //     path: "products/hydraulics",
  //   },
  //   {
  //     method: "GET",
  //     path: "products/transmisson",
  //   },
  //   {
  //     method: "GET",
  //     path: "products/cold",
  //   },
  //   {
  //     method: "GET",
  //     path: "products/motoGroup",
  //   },
  //   {
  //     method: "GET",
  //     path: "products/garden",
  //   },
  //   {
  //     method: "GET",
  //     path: "products/lubricants",
  //   },
  //   {
  //     method: "GET",
  //     path: "products/autohim",
  //   },
  //   {
  //     method: "POST",
  //     path: "/login",
  //   },
  //   {
  //     method: "POST",
  //     path: "/messages/add",
  //   },
  //   // {
  //   //   method: "",
  //   //   path: "/",
  //   // },
  // ];

  const closePathes = ["/producttttttt"];
  // const closePathes = ["/orders", "/OrderInformation", "/products/edit/id"];
  // let openPathsCheck = false;

  // for (const i of openPathes) {
  //   if (req.path.includes(i.path) && i.method === req.method) {
  //     openPathsCheck = true;
  //   }
  // }
  // if (!openPathsCheck) {
  //   try {
  //     req.user = parseBearer(req.headers.authorization, req.headers);
  //   } catch (err) {
  //     return res.status(401).json({ result: "Access Denied" });
  //   }
  // }
  if (closePathes.includes(req.path)) {
    try {
      console.log("req.headers.authorization");
      console.log(req.headers);
      console.log(req.headers.authorization);

      req.user = parseBearer(req.headers.authorization, req.headers);
    } catch (err) {
      return res.status(401).json({ result: "Access Denied" });
    }
  }
  next();
});
//--------------------------

app.use("/", indexRouter);
app.use("/products", productsRouter);
app.use("/users", usersRouter);
app.use("/messages", messagesRouter);
app.use("/orders", ordersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
