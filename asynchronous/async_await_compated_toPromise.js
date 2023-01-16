const { escapeRegExp } = require("pdf-lib");

let abc = new Promise(function(resolve, reject){
    console.log(1);
    browser.get("https://www.google.com");
    console.log(2);
    resolve(3);

})

// In the above code the browser.get creates new promise and the code below it goes into its .then part. 

// also when we use await before async fn -> the await stores the resolve part of the promise in the variable and the code below goes in .then part.In
// eg. 
// let abc = await browser.get("https://www.google.com");
// console.log(1);
// console.log(2);  