var klass = require("./class");

exports.add = function(klasses){
    klasses.forEach(function(item,index){
        var _klass= item;
        var teacherNmae= _klass.teacherName;
        var students = _klass.students;
        klass.add(teacherNmae,students);
    });
};