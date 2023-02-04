// Array.prototype.myFunction = function(){
//     console.log(this);
// }

let arr = [1, 2, 3, 4];

// arr.myFunction();

Array.prototype.myMap = function(cb){
    let newArr = [];
    for(let i = 0; i < this.length; i++){
        newArr.push(cb(this[i]));
    }
    return newArr;
}

function square(x){
    return x*x;
}

let myMapfunction = arr.myMap(square);
console.log(myMapfunction);