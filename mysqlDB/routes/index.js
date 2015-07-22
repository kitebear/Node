var serviceUser = require("../service/userImpl.js");

module.exports = function(app){
    console.log("链接");
    //所有的路由信息
    app.get('/', function(req, res) {
        console.log("zhix ");
        res.render('demo');
    });

    serviceUser(app);
};