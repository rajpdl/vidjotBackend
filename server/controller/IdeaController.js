var express = require('express');

var app = express.Router();

var CreateIdea = require('../service/idea/CreateIdea');
var GetAllIdea = require('../service/idea/GetAllIdea');
var GetIdeaById = require('../service/idea/GetIdeaById');
var UpdateIdea = require('../service/idea/UpdateIdea');
var DeleteIdea = require('../service/idea/DeleteIdea');

var IdValidator = require('../middleware/idea/IdValidator');
var ReqBodyValidator = require('../middleware/idea/ReqBodyValidator');

const TokenValidator  = require('./../middleware/auth/TokenValidator');
const AuthRole = require('../middleware/auth/AuthRole');


app.post('/', TokenValidator, AuthRole(['admin', 'user']) ,ReqBodyValidator,  CreateIdea);

app.get('/', TokenValidator,AuthRole(['admin', 'user']) , GetAllIdea);

app.get('/:id', TokenValidator, AuthRole(['admin', 'user']) ,IdValidator,  GetIdeaById);

app.post('/:id', TokenValidator,AuthRole(['admin', 'user']) ,ReqBodyValidator, IdValidator,  UpdateIdea);

app.delete('/:id', TokenValidator,AuthRole(['admin', 'user']) , IdValidator, DeleteIdea);

module.exports = app;