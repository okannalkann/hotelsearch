const path = require("path");
const express = require("express");
const routes = require("./routes/main");
const service = express();

service.set("view engine", "ejs");
service.set("views", "./service/views");

module.exports = () => {
  service.use(express.json());
  service.use(express.urlencoded({ extended: true }));

  service.use(express.static(path.join(__dirname, "/public")));
  service.use(routes);

  return service;
};