// require libraries, reference node-modules folder
// set up middleware
// module.exports app for use

"use strict";

var express = require("express"),
	morgan = require("morgan"),
	bluebird = require("bluebird"),
	path = require("path"),
	bodyParser = require("body-parser"),
	cookieParser = require("cookie-parser"), //left for now
	nodeSass = require("node-sass-middleware"), //left for now
	app = express(),
	router = require('./server/routes');

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,"/public")));
app.use(express.static(path.join(__dirname,"/bower_components")));
app.use(router);

// set up routes error handling
// TEMPL: Clean error handling in template for future use
// TEMPL: Also bring over updated routes/index.js with app.get to template for future use
// http://stackoverflow.com/questions/18115411/how-to-merge-specific-files-from-git-branches
app.listen(3001);

module.exports = app;