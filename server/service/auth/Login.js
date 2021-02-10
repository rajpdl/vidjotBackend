var { Account } = require("./../../model/Account");

module.exports = async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await Account.findOne({ email, password });
    if (!result) {
      return res.status(401).send({ error: "unauthorized access..." });
    }

    return res.status(200)
      .send({"x-auth": result.generateAuthToken(), "x-refresh": result.generateRefreshToken()});
  } catch (error) {
    res.sendStatus(500);
  }
};
