// require("chromedriver");

// let wd = require("selenium-webdriver");
// let chrome = require("selenium-webdriver/chrome");
// let browsers = [new wd.Builder().forBrowser('chrome').build(), new wd.Builder().forBrowser('chrome').build(), new wd.Builder().forBrowser('chrome').build(), new wd.Builder().forBrowser('chrome').build(),new wd.Builder.forBrowser('chrome').build(),new wd.Builder().forBrowser('chrome').build()];

// let urls = ["https://www.youtube.com", "https://www.facebook.com", "https://www.youtube.com", "https://www.youtube.com", "https://www.youtube.com", "https://www.facebook.com"];
// let arr = [];
// let arr1 = [];

// for(let i in urls){
//     arr.push(browsers[i].get(urls[i]));
// }

// async function main(){
//     await Promise.all(arr);
//     console.log("all websites opened");
//     for(let i in browsers){
//         arr1.push(browsers[i].close());
//     }
//     await Promise.all(arr1);
//     console.log("all browser closed");
// }


// //2. 
// const timeOut = (t) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`completed in ${t}`)
//         }, t)
//     })
// }

// timeOut(1000).then(result => console.log(result));
// Promise.all([timeOut(1000), timeOut(2000)]).then(result => console.log(result)) 


// //
// require("chromedriver");

// let wd = require("selenium-webdriver");
// let chrome = require("selenium-webdriver/chrome");
// let browsers = [new wd.Builder().forBrowser('chrome').build(), new wd.Builder().forBrowser('chrome').build(), new wd.Builder().forBrowser('chrome').build(), new wd.Builder().forBrowser('chrome').build(),new wd.Builder.forBrowser('chrome').build(),new wd.Builder().forBrowser('chrome').build()];

// let urls = ["https://www.youtube.com", "https://www.facebook.com", "https://www.youtube.com", "https://www.youtube.com", "https://www.youtube.com", "https://www.facebook.com"];
// let arr = [];
// let arr1 = [];

// for(let i in urls){
//     arr.push(browsers[i].get(urls[i]));
// }

// async function main(){
//     await Promise.all(arr);
//     console.log("all websites opened");
//     for(let i in browsers){
//         arr1.push(browsers[i].close());
//     }
//     await Promise.all(arr1);
//     console.log("all browser closed");
// }


//2. 
// const timeOut = (t) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`completed in ${t}`)
//         }, t)
//     })
// }

// timeOut(1000).then(result => console.log(result));
// Promise.all([timeOut(1000), timeOut(2000)]).then(result => console.log(result)) 


//3.
const timeOut = (t) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(t === 2000){
                reject(`Rejected in ${t}`);
            }else{
                resolve(`Completed in ${t}`);
            }
        }, t)
    })
}

const durations = [1000, 2000, 3000];

const promises = [];

durations.map((duration) => {
    promises.push(timeOut(duration))
})

Promise.all(promises)
.then(response => console.log(response))
.catch(error => console.log(`Error in handling ${error}`));

//OUTPUT -> Error in handling Rejected in 2000