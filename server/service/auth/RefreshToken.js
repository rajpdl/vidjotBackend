const jwt = require("jsonwebtoken");
const { SECRETE } = require("../../config/secreteConfig");
const { Account } = require('./../../model/Account');

module.exports = async (req, res) => {
    const refreshToken = req.header('x-refresh');
    let decode;
    try{
        decode = jwt.verify(refreshToken, SECRETE);
        const token = jwt.sign(
            { _id: decode._id, email: decode.email, role: decode.role, accessType: "auth" },
            SECRETE,
            {expiresIn: 3600}
          );
        res.status(200).send({authToken: token});
    }catch(error) {
        res.sendStatus(401);
    }
}  