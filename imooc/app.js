var express = require('express');
var port = process.env.PORT || 3000;
var app = express();

app.set("views","./views");
app.set("views engine",'jade');
app.listen(port);

console.log('imooc started on port' + port);