var dbConnection = require('./../config/dbconnection');

module.exports.registerUser = function(request,response) {
    var user = {
        "name"      : request.body.name,
        "email"     : request.body.email,
        "password"  : request.body.password
    }

    dbConnection.query('INSERT INTO users SET ? ',user,function(error,results,fields){
        if(error){
            response.json({
                status: false,
                message:'there are some error with query',
            })
        }else{
            response.json({
                status:true,
                data: results,
                message: 'user registered sucessfully'
            })
        }
    });
}