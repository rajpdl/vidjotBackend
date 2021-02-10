const { Account } = require("./../model/Account");

module.exports.init = async () => {
  const takenAccount = await Account.findOne({
    username: "Admin",
    email: "admin@gmail.com",
    password: "admin7252",
    role: "admin",
  });
  if (!takenAccount) {
    const account = new Account({
      username: "Admin",
      email: "admin@gmail.com",
      password: "admin7252",
      role: "admin",
    });
    await account.save();
    return "Admin account created.";
  }
  return 'Admin account already created.';
};
