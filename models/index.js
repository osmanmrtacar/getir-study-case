const mongoose = require("mongoose");
mongoose.Promise = Promise;
mongoose.connect("mongodb://dbUser:dbPassword1@ds249623.mlab.com:49623/getir-case-study", {
  keepAlive: true 
});

module.exports.Record = require("./record"); 