// let a = 10;
// a = 20;
// console.log(a);

// var b = 10;
// var b = 20;
// console.log(a);

// const c = 10;
// //  c = 20;
// console.log(c);

// let var const
// let cannot be redeclared
// let can be reassigned

// var can be redeclared
// var can be reassigned

// const cannot be redeclared
// const cannot be reassigned

// scope
// let has block scope i.e. between {}
// var has  function scope
// const has block scope

function abc(){
    
    let a = 10;
    console.log(a);
{
    // console.log(a);
    // let a = 20;
    console.log(a)
    {
        let a = 30;
        console.log(a);
        var b = 12;
    }
    console.log(b);
}
console.log(b);
}

abc();

