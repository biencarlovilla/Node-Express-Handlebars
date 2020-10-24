const express = require("express");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const router = require("./controllers/burgers_controller.js");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(methodOverride("_method"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Set up rendering engine, Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Static files and routes (middleware)
app.use(express.static(__dirname + "/public"));
app.use("/", router);

// Start server
app.listen(PORT, function() {
	console.log("Listening on PORT " + PORT);
});