// for(let i = 4; i < 6; i++){
//     for(let i = 4; i < 5; i++){
//         console.log(i);
//     }
// }
//OUTPUT =>
// 4
// 4


// for(let i = 0; i < 7; i++){
//     for(i = 4; i < 5; i++){
//         console.log(i);
//     }
// }
// OUTPUT => 
// infinite time 
// 4

let arr = [1, 2, 3, 4];
// console.log(arr); 
// output=> [ 1, 2, 3, 4 ]

// for(i in arr){
    // here the i takes the index from 0 to arr.length - 1
//     console.log(i);
// }
// OUTPUT=> 
// 0
// 1
// 2
// 3

// for(i in arr){
    // here i takes 0 and goes till arr.length - 1  i.e. i is index
//     console.log(arr[i]);
// }
// OUTPUT=> 
// 1
// 2
// 3
// 4

// arr.forEach(function(data, index){
    //here the forEach takes data, index and arr as input in callback function
//     console.log(data, index);
// })
// OUTPUT=>
// 1 0
// 2 1
// 3 2
// 4 3

//function hello(data, index){
// }
// arr.map(hello){
// }

// arr.map(function(data, index){
//     console.log(data, index);
// })
// OUTPUT=>
// 1 0
// 2 1
// 3 2
// 4 3
//map can change the original array
// arr = arr.map(function(data, index){
//     return data + 2;
// });
// console.log(arr);
// OUTPUT=> 
// [ 3, 4, 5, 6 ]

// for loop as map function
// for(let i = 0; i < arr.length; i++){
//     arr[i] = arr[i] + 2;
// }
// console.log(arr);
// OUTPUT=> 
// [ 3, 4, 5, 6 ]

//DELETE FUNCTION
// delete arr[1]; 
// removes the data at the given location but size same of array and gives undefined at location
// console.log(arr);
//output=> [ 1, <1 empty item>, 3, 4 ]
// console.log(arr.length);
//output=> 4

//SPLICE 
// arr.splice(1, 2);
// console.log(arr);
// output=>[ 1, 4 ]

//Q. remove even values in the array
//WRONG SOLUTION=>
let arr1 = [1, 2, 3, 4, 5, 6, 8, 10, 12];
// arr1.map(function(data, index){
//     console.log(data);
//     if(data%2 == 0){
//         arr1.splice(index, 1);
//     } 
// })
// console.log(arr1);

//FILTER
//by default the filter method return false on each element
arr1 =arr1.filter(function(data, index){
    if(data%2 == 0){
        return false;
    }else{
        return true;
    }
});
console.log(arr1);
// OUTPUT=>[ 1, 3, 5 ]

