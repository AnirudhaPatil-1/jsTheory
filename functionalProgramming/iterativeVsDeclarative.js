//is square of a number odd or even

const x = 5;
const squared = x*x;
let isEven;

if(squared % 2 === 0){
    isEven = true;
}else{
    isEven = false;
}
console.log(isEven);

//declarative

const isSquareEven = (x) => ((x*x) % 2 === 0? true: false);
console.log(`declarative code answer: ${isSquareEven(4)}`);

