const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const SECRET = "mynameis";
const jwt = require("jsonwebtoken");

const StudentSchema = mongoose.Schema({
  id: {
    type: Number,
  },
  email: {
    type: String,
  },
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  username: {
    type: String,
  },
  password: {
    type: String,
  },
  score: {
    type: String,
  },
});

StudentSchema.methods.isCorrectPassword = function (password, callback) {
  bcrypt.compare(password, this.password, function (err, same) {
    if (err) {
      callback(err);
    } else {
      callback(err, same);
    }
  });
};

StudentSchema.pre("save", function (next) {
  if (this.isNew || this.isModified("password")) {
    const document = this;
    bcrypt.hash(document.password, saltRounds, function (err, hashedPassword) {
      if (err) {
        next(err);
      } else {
        document.password = hashedPassword;
        next();
      }
    });
  } else {
    next();
  }
});

//new way

StudentSchema.methods.generateToken = function (cb) {
  var user = this;
  var token = jwt.sign(user._id.toHexString(), SECRET);

  user.token = token;
  user.save(function (err, user) {
    if (err) return cb(err);
    cb(null, user);
  });
};

StudentSchema.statics.findByToken = function (token, cb) {
  var user = this;

  jwt.verify(token, SECRET, function (err, decode) {
    user.findOne({ _id: decode, token: token }, function (err, user) {
      if (err) return cb(err);
      cb(null, user);
    });
  });
};

//on log out
StudentSchema.methods.deleteToken = function (token, cb) {
  var user = this;

  user.update({ $unset: { token: 1 } }, (err, user) => {
    if (err) return cb(err);
    cb(null, user);
  });
};

module.exports = mongoose.model("students", StudentSchema);
