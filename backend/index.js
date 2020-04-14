const express = require("express");
const cookieparser = require("cookie-parser");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const router = express.Router();
const path = require("path");
const port = process.env.PORT || 8080;

//middleware, function when routes are hit
const withAuth = require("./middleware");

router.get("/api/secret", withAuth, function (req, res) {
  res.send("password");
});
const studentModel = require("./routes/student");
const scoreModel = require("./routes/score");
require("dotenv/config");

mongoose.connect(
  process.env.MONGOD_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connected to port " + port)
);
app.use(bodyParser.json());
app.use(cookieparser());
app.use(cors());

app.use(express.static("public"));
app.use("/players", studentModel);
app.use("/score", scoreModel);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("/build"));
  app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  });
}
app.listen(port, () => {
  console.log(`Server running at PORT: ${port}`);
});
