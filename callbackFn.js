function print(value){
    console.log(value);
}

function sum(a, b, print){
    let c = a + b;
    print(c );
}

sum(2, 3, print);

//working of callback fn 
//JS is single threaded. has a stack when get to callback fn it is moved to remote api
// after that the fn is moved to queue where the it is checked by ** ** where the stack is empty
//if yes the callback fn is moved to stack and then executed