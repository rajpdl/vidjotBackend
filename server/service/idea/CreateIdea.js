const { Idea } = require("../../model/Idea");

module.exports = async (req, res) => {
  const { title, detail } = req.body;
  
  const titleTaken = await Idea.findOne({ title, _creator: req.user._id });
    if (titleTaken) {
      return res.status(400).send({ text: "Title already taken." });
    }
    try {
      const newIdea = await new Idea({
        title,
        detail,
        _creator: req.user._id,
        _editor: req.user._id
      }).save();
      res.status(201).send(newIdea.json());
    } catch (error) {
      res.sendStatus(500);
    }
};
