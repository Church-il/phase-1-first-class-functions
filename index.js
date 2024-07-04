function receivesAFunction(callback){
  return callback();
}

function returnsANamedFunction(){
  return function namedFunction(){
    console.log("I'm Somebody!");
  };
}

function returnsAnAnonymousFunction(){
  return function(){
    console.log("I'm Anonymous!");
  };
}



















