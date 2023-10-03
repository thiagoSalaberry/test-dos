"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cors = require("cors");
var app = express();
var port = process.env.PORT || 3000;
//La siguiente línea se encarga de servir todas las rutas del frontend
app.use(express.static("./dist"));
app.use(express.json());
app.use(cors());
app.get("/", function (req, res) {
    res.send("Hello World");
});
app.get("/env", function (req, res) {
    res.send(process.env.ENVIRONMENT);
});
app.get("*", function (req, res) {
    res.sendFile(__dirname + "/dist/index.html");
});
app.listen(port, function () {
    console.log("Server is running on port ".concat(port));
});
