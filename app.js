const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./routes");
const appError = require("./utils/appError");
const errorHandler = require("./utils/errorHandler");

require("./Database/db");
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(api, router);

app.all("*", (req, res, next) => {
  next(new appError(`The URl ${req.originalUrl} does not exists `, 404));
});
app.use(errorHandler);

app.listen(3000);
console.log("API's client is connected to port 3000");

module.exports = app;
