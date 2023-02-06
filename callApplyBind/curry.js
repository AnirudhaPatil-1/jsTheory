function add(a, b){
    console.log(a + b);
}

add(2, 4);

let add2 = add.bind(this, 2);
add2(5);