const { ObjectID } = require("mongodb");

module.exports = (req, res, next) => {
    var ID = req.params.id;
    if(!ObjectID.isValid(ID)){
        return res.status(400).send({text: "Id Not Validate."});
    }
    next();
}