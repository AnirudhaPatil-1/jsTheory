//impure function
// let a = 2;

// function sum (b){
//     console.log(`sum is: `, a + b);
// }
// sum(3);

//pure function
// 1.
// function sum( a, b){
//     console.log(`the sum is:`, a + b);  //side effects
// }

// sum(2, 3);

//2.
function sum(a, b){
    return (a + b);
}

console.log(sum(2, 3));