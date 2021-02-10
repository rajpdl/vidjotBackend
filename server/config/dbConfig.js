var mongoose = require('mongoose');
const dbPath = process.env.DB_PATH || 'mongodb://localhost:27017/VidJot';
mongoose.connect(dbPath, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(r => {
        console.log('Mongodb is connected.');
    })
    .catch(e => {
        console.log('Mongodb is unable to connect.');
    })
mongoose.Promise = global.Promise;
module.exports = {
    mongoose 
}