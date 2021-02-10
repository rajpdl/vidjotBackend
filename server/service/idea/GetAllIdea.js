const { Idea } = require("../../model/Idea");

module.exports = async (req, res) => {
  try {
    const result = await Idea.find({ _creator: req.user._id }).populate('_creator');
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
