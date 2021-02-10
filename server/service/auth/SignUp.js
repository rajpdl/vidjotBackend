var { Account } = require("./../../model/Account");

module.exports = async (req, res) => {
  const { username, email, password } = req.body;
  const takenUsername = await Account.findOne({ username });
  if (takenUsername) {
    return res.status(400).send({ text: "Username already taken..." });
  }
  const takenEmail = await Account.findOne({ email });
  if (takenEmail) {
    return res.status(400).send({ text: "Email already taken..." });
  }
  try {
    const newAccount = await new Account({ username, email, password, role: 'user' }).save();
    res.status(201).send(newAccount.json());
  } catch (error) {
    res.sendStatus(500);
  }
};
