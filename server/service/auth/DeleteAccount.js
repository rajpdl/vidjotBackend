const { Account } = require("../../model/Account");

module.exports = async (req, res) => {
  try {
    const result = await Account.findByIdAndRemove(req.params.id);
    if (!result) {
      return res.status(404).send({ text: "Id not found." });
    }
    res.status(200).send(result);
  } catch (error) {
    res.sendStatus(500);
  }
};
