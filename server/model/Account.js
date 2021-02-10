var { mongoose } = require("./../config/dbConfig");
const jwt = require("jsonwebtoken");
const { SECRETE } = require("./../config/secreteConfig");

const AccountSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 4,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  role: {
    type: String,
    required: true,
  },
  ideas: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Idea'
    }
  ]
});

AccountSchema.methods.generateAuthToken = function () {
  const user = this;
  const token = jwt.sign(
    { _id: user._id, email: user.email, role: user.role, accessType: "auth" },
    SECRETE,
    {expiresIn: 3600}
  );
  return token;
};

AccountSchema.methods.generateRefreshToken = function () {
  const user = this;
  const token = jwt.sign(
    { _id: user._id, email: user.email, role: user.role, accessType: "refreshToken" },
    SECRETE,
    {expiresIn: 86400}
  );
  return token;
};

AccountSchema.methods.json = function () {
  const user = this;
  return {
    _id: user._id,
    username: user.username,
    email: user.email,
    role: user.role,
  };
};

AccountSchema.statics.findByToken = async function (token) {
  const User = this;
  let decode;
  try {
    decode = jwt.verify(token, SECRETE);
  } catch (error) {
    return null;
  }
  const newUser = await User.findOne({ _id: decode._id, email: decode.email });
  return newUser;
};

var Account = new mongoose.model("Account", AccountSchema);

module.exports = { Account };
