// 1. 
let arr = [1, 2, 3, 4, 5];
//double each element of the array

// let nArr = [];
// for(let i = 0; i < arr.length; i++){
//     nArr[i] = 2*arr[i];
// }
// console.log(nArr);

//map method
let nArr = arr.map(function(ele){
    return ele*ele;
});
console.log(arr);
console.log(nArr);
