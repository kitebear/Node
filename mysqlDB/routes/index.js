var action_user = require("../action/user.js");
var conn_user = require("../models/user.js");
module.exports = function (app) {
    //所有的路由信息
    app.get('/', function (req, res) {
        conn_user.getUsers(function (data) {
            if (data.status) {
                data.title = "增删改查";
                res.render('demo', data);
            } else {
                res.render('error', {message: "信息加载失败"});
            }
        });
    });

    action_user(app);
};