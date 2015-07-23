var user = require("../models/user.js");

module.exports = function (app) {
    app.post('/updateUsers', function (req, res, next) {
        user.updateUsers({
            sql: "update user SET username=?,password=?,age=?,info=? WHERE id = ?",
            params: [ req.body.username, req.body.password, req.body.age, req.body.info, req.body.id ]
        }, function (data) {
            res.send(data);
        });
    });

    app.post('/deleteUsers', function (req, res, next) {
        user.deleteUsers({
            sql: "DELETE FROM user WHERE id = " + req.body.id
        }, function (data) {
            res.send(data);
        });
    });

    app.post('/addUsers', function (req, res, next) {
        user.addUsers({
            data: {
                username: req.body.username,
                password: req.body.password,
                age: req.body.age,
                info: req.body.info
            },
            sql: "INSERT INTO user SET ?"
        }, function (data) {
            res.send(data);
        });
    });
};