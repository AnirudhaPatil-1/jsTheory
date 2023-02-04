const person1 = {
    name: "adam",
    age: 31
}
//mutable
// const person2 = person1;
// person2.name = "steve";

// immutable
// 1. method Object.assign({}, );
// const person2 = Object.assign({}, person1);
// person2.name  = "steve";
//2. spread operator
const person2 = {...person1};

person2.name = "steve";

console.log(person1);
console.log(person2);