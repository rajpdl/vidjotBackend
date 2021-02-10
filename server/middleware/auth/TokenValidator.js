const jwt = require("jsonwebtoken");
const { Account } = require("./../../model/Account");
const { SECRETE } = require("./../../config/secreteConfig");
module.exports = async (req, res, next) => {
  const token = req.header("x-auth");
  let decode;
  try {
    decode = jwt.verify(token, SECRETE);
  } catch (error) {
    return res.sendStatus(401);
  }
  req.user = {
    _id: decode._id,
    role: decode.role,
    accessType: decode.accessType,
  };
  next();
};
