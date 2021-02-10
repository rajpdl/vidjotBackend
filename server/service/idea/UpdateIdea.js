const { Idea } = require("../../model/Idea");

module.exports = async (req, res) => {
  const { title, detail } = req.body;
  try {
    const idea = await Idea.findOne({_id: req.params.id, _creator: req.user._id});
    if(!idea) {
      return res.status(404).send({text: "Unable to find."})
    }
    idea.title = title;
    idea.detail = detail;
    idea.editedAt = Date.now()
    const result = await idea.save();
    res.status(200).send(result.json());
  } catch (error) {
      res.sendStatus(500);
  }
};
