//1.
// console.log(this); //returns empty object
//this runs in non strict mode in node environment

//2.
// function checkThis(){
//     console.log(this);
// }

// checkThis();
// //when this in inside function return a global object

//3.
// let obj = {
//     name: "Adam",
//     f: function(){
//         console.log(this);
//     }
// }

// obj.f();
// //returns the complete object

//4. this inside object function function
let obj = {
    name: "Adam",
    f: function(){
        function g(){
            console.log(this);
        }
        g();
    }
}

obj.f();
//returns global object