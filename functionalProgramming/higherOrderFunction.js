//map
const arr = [1, 2, 3, 4, 5];
let mappedArr = arr.map(function(x){
    return x*x;
})
console.log(arr);
console.log(mappedArr);
//OUTPUT -> [ 1, 4, 9, 16, 25 ]

//filter
let filteredArr = arr.filter(function(x){
    return x%2 === 0;
});
console.log(filteredArr);
//OUTPUT -> [ 2, 4 ]

//reduce
let reducedArr = arr.reduce(function(accumulator, x){
    return accumulator + x;
}, 0)
console.log(reducedArr);
//OUTPUT -> 15