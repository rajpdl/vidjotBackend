const { Idea } = require("../../model/Idea");

module.exports = async (req, res) => {
    try {
        const result = await Idea.findOne({_id: req.params.id, _creator: req.user._id});
    if(!result) {
        return res.status(404).send({text: "Unable to find."});
    }
    res.status(200).send(result);
    } catch (error) {
        res.sendStatus(500);
    }
};