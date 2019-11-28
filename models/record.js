const mongoose = require("mongoose");

const recordSchema = new mongoose.Schema({
  key: String,
  value: String,
  createdAt: Date,
  counts: [Number]
});

const Record = mongoose.model("Record", recordSchema);
module.exports = Record;
