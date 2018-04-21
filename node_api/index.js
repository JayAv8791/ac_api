var express = require('express');
var bodyParser = require('body-parser');

var node_api = express();

var registerController = require('./controllers/register-controller');

node_api.use(bodyParser.urlencoded({extended:true}));

node_api.use(bodyParser.json());

node_api.post('/api/registerUser', registerController.registerUser);
node_api.listen(1100);
