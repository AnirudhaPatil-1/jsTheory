// let cond = true;
// let isItDone = new Promise(function(resolve, reject){
//     if(cond){
//         resolve("work is done");
//     }else{
//         reject("work is not done");
//     }
// });
// console.log(isItDone);// O/P -> Promise { 'work is done' }

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

let cond = false;
let isItDone = new Promise(function(resolve, reject){
    if(cond){
        resolve("work is done");
    }else{
        reject("work is not done");
    }
});
isItDone.then(function(val){
    console.log(val);
    //O/P -> work is done
}).catch(function(err){
    console.log(err);
    console.log("Error1");
    throw new Error("i am new error");
    //O/P for cond = false => work is not done
}).catch(function(error){
    console.log(error);
    console.log("printed new thrown error")
})