var configValues = require('./config');

var mySql = require('mysql');

var dbConnection = mySql.createConnection({
    user        :   configValues.user,
    host        :   configValues.host,
    password    :   configValues.password,
    database    :   configValues.database
});

var connection = dbConnection.connect(function(err){
    if(err) throw err;
    console.log('Database connection is established');
})

module.exports = dbConnection;