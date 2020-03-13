const express = require("express");
const cookieparser = require("cookie-parser");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const router = express.Router();
const port = process.env.PORT || 8080;


require("dotenv/config");

mongoose.connect(
  process.env.MONGOD_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connected to port " + port)
);
app.use(bodyParser.json());
app.use(cookieparser());
app.use(cors());


if (process.env.NODE_ENV === "production") {
  app.use(express.static("/build"));
  app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  });
}
app.listen(port, () => {
  console.log(`Server running at PORT: ${port}`);
});
