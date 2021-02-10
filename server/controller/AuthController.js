var express = require('express');

var SignUp = require('../service/auth/SignUp');
var Login = require('../service/auth/Login');
var GetAllAccount = require('../service/auth/GetAllAccount');
var GetAccountById = require('../service/auth/GetAccountById');
var UpdateAccount = require('../service/auth/UpdateAccount');
var DeleteAccount = require('../service/auth/DeleteAccount');
var RefreshToken = require('../service/auth/RefreshToken');

var IdValidator = require('../middleware/idea/IdValidator');
var TokenValidator = require('../middleware/auth/TokenValidator');
var ReqBodyValidator = require('../middleware/auth/ReqBodyValidator');
const LoginReqBodyValidator = require('../middleware/auth/LoginReqBodyValidator');
const AuthRole = require('../middleware/auth/AuthRole');


var app = express.Router();

app.post('/signup', ReqBodyValidator,  SignUp);

app.post('/login', LoginReqBodyValidator,  Login);

app.get('/token', RefreshToken);

app.get('/', TokenValidator, AuthRole(['admin']) ,GetAllAccount);

app.get('/:id', TokenValidator, AuthRole(['admin']) ,IdValidator ,GetAccountById);

app.post('/:id', TokenValidator, AuthRole(['admin']) ,IdValidator ,ReqBodyValidator,  UpdateAccount);

app.delete('/:id', TokenValidator, AuthRole(['admin']) ,IdValidator ,DeleteAccount)



module.exports = app;