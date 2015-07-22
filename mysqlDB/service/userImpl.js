module.exports=function(app){
    app.get('/fadsfasd', function (req, res, next) {
        console.log('although this matches');
        res.send('USER');
    });
};

//var mysql = require("mysql");
//
//var express = require("express");
//
//var app = express();
//
//var connection = mysql.createConnection({
//    host     : 'localhost',
//    user     : 'root',
//    password : '81527319',
//    database : 'node_test'
//});
//
//connection.connect(function(err){
//    if(!err) {
//        console.log("Database is connected ... \n\n");
//    } else {
//        console.log("Error connecting database ... \n\n");
//    }
//});
//
//app.get("/",function(req,res){
//    connection.query('SELECT * from user user', function(err, rows, fields) {
//        //connection.end();
//        if (!err)
//            console.log('The solution is: ', rows);
//        else
//            console.log('Error while performing Query.');
//    });
//});
//
//app.listen(3000);