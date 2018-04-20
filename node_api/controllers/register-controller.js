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
// module.exports.registerUser;
// module.exports.registerUser;

// var dbConnection = require('./../config/dbconnection');

// module.exports.registerUser=function(req,res){
//     var user={
//         "name":req.body.name,
//         "email":req.body.email,
//         "password":req.body.password
//     }
//     dbConnection.query('INSERT INTO users SET ?',user, function (error, results, fields) {
//       if (error) {
//         res.json({
//             status:false,
//             message:'there are some error with query'
//         })
//       }else{
//           res.json({
//             status:true,
//             data:results,
//             message:'user registered sucessfully'
//         })
//       }
//     });
// }