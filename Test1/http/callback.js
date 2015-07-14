function learn(something){
    console.log(something);
}

function we(callback,something){
    something += "ios";
    callback(something);
}

we(learn,"nihao ");