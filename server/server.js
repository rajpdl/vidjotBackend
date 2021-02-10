var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var { PORT } = require("./config/portConfig");
var IdeaController = require('./controller/IdeaController');
var AuthController = require('./controller/AuthController');
const { init } = require('./config/initAdmin');

(async () => {
    const msg = await init();
    console.log(msg);
})();

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
});

app.use('/idea', IdeaController);
app.use('/auth', AuthController);

app.listen(PORT, () => {
    console.log(`Starting the server on port ${PORT}`);
});