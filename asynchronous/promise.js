// let cond = true;
// let isItDone = new Promise(function(resolve, reject){
//     if(cond){
//         resolve("work is done");
//     }else{
//         reject("work is not done");
//     }
// });
// console.log(isItDone);// O/P -> Promise { 'work is done' }

// const { promise } = require("selenium-webdriver");

//2. 
// let cond = false;
// let isItDone = new Promise(function (resolve, reject){
//     if(cond){
//         resolve("work is done");
//     }else{
//         reject("work is not done");
//     }
// });
// console.log(isItDone);
// //O/P -> Promise { <rejected> 'work is not done' }

//3.
// let cond = false;
// let isItDone = new Promise(function(resolve, reject){
//     if(cond){
//         resolve("work is done");
//     }else{
//         reject("work is not done");
//     }
// });
// isItDone.then(function(val){
//     console.log(val);
//     //O/P -> work is done
// }).catch(function(err){
//     console.log(err);
//     console.log("Error1");
//     throw new Error("i am new error");
//     //O/P for cond = false => work is not done
// }).catch(function(error){
//     console.log(error);
//     console.log("printed new thrown error")
// })

//4. 
// function job(state){
//     return new Promise(function(resolve, reject){
//         if(state){
//             resolve("success");
//         }else{
//             reject("error");
//         }
//     });
// }

// let promise = job(true);

// promise.then(function(data){
//     console.log(data);
//     return job(false);
// }).catch(function(error){
//     console.log(error);
//     return "error caught";
// }).then(function(data){
//     console.log(data);
//     return job(true);
// }).catch(function(error){
//     console.log(error);
// })
// //OUTPUT ->
// // success
// // error
// // error caught 

//5.
// let cond = true;
// setInterval(() =>{
//     if(cond){
//         console.log("hello");
//     }
// }, 2000);

// setTimeout(() => {
//     cond = false;
// }, 10000);

// // 6.
// promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("some result");
//     }, 1000);
// })

// promise.then((val) => {
//     console.log("then: " + val);
// }).catch((val) => {
//     console.log("catch: " + val);
// });

// console.log("hello1");
// console.log("hello2");
// //OUTPUT => 
// // hello1
// // hello2
// // catch: some result

//MAKING setTimeout SYNCHRONOUS
// let ms = 50000;
function wait(ms){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
            console.log("code is running")
        }, ms);
    });
}
wait(5000);

then((data) => {
    console.log(data);
})


