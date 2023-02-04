//My polyfill of map 
let arr = [1, 2, 3, 4, 5];

// function mapPolyfill(arr){
//     let newArr = [];
//     for(let i = 0; i < arr.length; i++){
//         let squaredVal = squareArr(arr[i]);
//         newArr.push(squaredVal);
//     }
//     console.log(newArr);
// }

// function squareArr(x){
//     return x*x;
// }
// mapPolyfill(arr);
// //OUTPUT -> [ 1, 4, 9, 16, 25 ]

function mapPolyfill(arr, cb){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        newArr.push(cb(arr[i]));
    }
    // console.log(newArr);
}

function squareArr(x){
    return x*x;
}
mapPolyfill(arr, squareArr);
//OUTPUT -> [ 1, 4, 9, 16, 25 ]


//FILTER
function filterPolyfill(arr, cb){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(cb(arr[i])){
            newArr.push(arr[i]);
        }
    }
    return newArr;
    // console.log(newArr);
}
function isEven(x){
    if(x % 2 === 0){
        return x;
    }
}
// console.log(filterPolyfill(arr, isEven));
// //OUTPUT -> [ 2, 4 ]

//my custom reduce
function myReducePolyfill(arr, cb, accumulator){
    
    for(let i = 0; i < arr.length; i++){
        accumulator = sum(arr[i], accumulator);
        // accumulator = val;
    }
    return accumulator;
}

function sum(x, accumulator){
    return accumulator += x;
}

let accumulator = 0;
console.log(myReducePolyfill(arr, sum, accumulator));