var express = require('express');
var bodyParser = require('body-parser');

var node_api = express();

var registerController = require('./controllers/register-controller');

node_api.use(bodyParser.urlencoded({extended:true}));

node_api.use(bodyParser.json());

node_api.post('/api/registerUser', registerController.registerUser);
node_api.listen(5500);







// // var authenticateController=require('./controllers/authenticate-controller');

// app.use(bodyParser.urlencoded({extended:true}));

// app.use(bodyParser.json());

// /* route to handle login and registration */
// app.post('/api/test',registerController.register);
// app.listen(8000);

// // app.post('/api/authenticate',authenticateController.authenticate);
