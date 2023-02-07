function add(x){
    return function(y){
        console.log(x + y);
    }
}

let add2 = add(2);
// console.log(add2); //Output -> [Function (anonymous)]
add2(3); //output -> 