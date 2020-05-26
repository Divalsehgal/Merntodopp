const express = require("express");

const bodyParser = require("body-parser");
const routes = require("./routes/endPoints");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/merntodo",
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  (error) => {
    if (error) {
      console.log("Not connected");
    } else {
      console.log("connected");
    }
  }
);

mongoose.Promise = global.Promise;

const app = express();
var portNo = process.env.PORT || 4000;

app.use(cors());

app.use(bodyParser.json());
app.use("/todo", routes);
if (process.env.NODE_ENV === "production") {
  app.use(express.static("merntodoapp/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "merntodoapp", "build", "index.html"));
  });
}
app.use((err, req, res, next) => {
  console.log(err);
  res.status(400).send({
    error: err.message,
  });
});
git
app.listen(portNo, () => {
  console.log(`listening port  ${portNo}`);
});
