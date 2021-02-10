const { Account } = require("../../model/Account");

module.exports = async (req, res) => {
  try {
    const result = await Account.find({});
    res.status(200).send(result);
  } catch (error) {
    res.sendStatus(500);
  }
};
