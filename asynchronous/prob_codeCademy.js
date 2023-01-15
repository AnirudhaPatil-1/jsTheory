
const inventory = {
    sunglasses:  1900,
    pants: 1088,
    bags: 1344
};

//write code below
function myExecutor(resolve, reject){
    if(inventory.sunglasses > 0){
        resolve('Sunglasses order processed.');
    }else{
        reject('That item is sold out.')
    }
}

 promise = new Promise(myExecutor);

// promise.then((data) =>{
//     console.log(data);
// })
//2.
function orderSunglasses(){
    return new Promise(myExecutor);
}

//3.
let orderPromise = orderSunglasses();
console.log(orderPromise);
//OUTPUT -> Promise { 'Sunglasses order processed.' }