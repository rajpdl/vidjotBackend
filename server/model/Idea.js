const { mongoose } = require('./../config/dbConfig');
const Account = require('./../model/Account');

var newSchema = mongoose.Schema;

var IdeaSchema = new newSchema({
    title: {
        type: String,
        required: true
    },
    detail: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    _creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Account'
    },
    editedAt: {
        type: Date,
        default: Date.now()
    },
    _editor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Account'
    }
});

IdeaSchema.methods.json = function() {
    const user = this;
    return {title: user.title, _creator: user._creator};
}

var Idea = new mongoose.model('Idea', IdeaSchema);

module.exports = { Idea };