const { Account } = require("../../model/Account");

module.exports = async (req, res) => {
    const { username, email, password } = req.body;
    const takenUsername = await Account.findOne({username});
    if(takenUsername) {
        return res.status(400).send({text: "Username already taken."});
    }
    const takenEmail = await Account.findOne({email});
    if(takenEmail) {
        return res.status(400).send({text: "Email already taken."});
    }
    const result = await Account.findById(req.params.id);
    if(!result) {
        return res.status(404).send({text: "Unable to find."})
    }
    result.username = username;
    result.email = email;
    result.password = password;
    
    try {
        const updatedAccount = await result.save();
        res.status(200).send(updatedAccount.json());
    } catch (error) {
        res.sendStatus(500);
    }
};