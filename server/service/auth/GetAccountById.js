const { Account } = require("../../model/Account");

module.exports = async (req, res) => {
  try {
    const result = await Account.findById(req.params.id);
    if (!result) {
      return res.status(404).send({ text: "Id Not Found..." });
    }
    res.status(200).send(result);
  } catch (error) {
    res.sendStatus(500);
  }
};
