const app = require("express")();
const recordsRoute = require("./routes/records");
const bodyParser = require("body-parser");
const { handleError } = require("./helpers/error");

app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.status(200).json({ message: "hello world" });
});
app.use("/api/records", recordsRoute);
app.use(handleError);

module.exports = app;
