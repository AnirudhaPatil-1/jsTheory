//PRACTICE EG. 1

// let fs = require("fs");
// function callback2(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("File written successfully")
//     }

// }


// function callback(err, data){
//     fs.writeFile("temp1.js", "callback function running", callback2);
//     console.log(data);
// }

// fs.readFile("temp1.js", "utf-8", callback)
// console.log("hello");

// //practice 2

// function callback2(){
//     console.log(`callback function 2 printed after 5 sec`);
// }

// function callback1(){
//     console.log(`callback function 1 printed after 2 sec`);
// }

// setTimeout(callback2, 5000);
// setTimeout(callback1, 2000);

//practice 3

var counter = 0;
job1(function(){
    counter +=1;
    if(counter == 2){
        done();
    }
});

job2(function(){
    counter += 1;
    if(counter == 2){
        done();
    }
});

function done(){
    console.log('done', counter);
}

function job1(callback){
    setTimeout(function(){
        callback();
    },2000);
}

function job2(callback){
    setTimeout(function(){
        callback();
    }, 4000);
}