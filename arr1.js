// let arr = [];
// let arr = new Array();
// console.log(arr);
// console.log(arr.length);
// let arr = ["bhavesh", 22, 22.5, true, "b"];
// console.log(arr);
// arr.push("hello");
// console.log(arr);
// arr.pop();
// console.log(arr);



//Q. cal the frequency of alphabet in a string and print their frequency
//my solution =>
//let a = 0index and z = 25 index 
//a ascii value is 97 and z ascii value is 122
// let str = "abcdefghijklmnopqrstuvwxyzabcdefasljaltaoiautpqoiuwyvmxvslarq";
// let arr = [];
// for(let i = 0; i <= 25; i++){
//     arr.push(0); 
// }
// // console.log(arr);
// for(let i = 0; i <= str.length - 1; i++){
//     let index = str.charCodeAt(i) - 97;
//     arr[parseInt(index)]++;
// }
// console.log(arr);


//ARRAY and  STRING  relation:

//SPLIT METHOD => used to convert string to array
// let str1 = "Bhavesh";
// let str2 = "Bhavesh Bansal";
// let str3 = "Apple,Mango,tBanana";
// console.log(str1.split(""));
// console.log(str2.split(" "));
// console.log(str3.split(","));

//JOIN METHOD => used to convert array to string
// let arr = ["a", "b", "c", "d", "e"];
// console.log(arr.join(""));
// console.log(arr.join("#"));
// console.log(arr.join("|"));

//CONCAT METHOD =>
// let arr1 = ["a", "b", "c"];
// let arr2 = ["d", "f", "h"];
// let arr3 = arr1.concat(arr2);
// console.log(arr3);//output => [ 'a', 'b', 'c', 'd', 'f', 'h' ]

//FOR LOOP TYPES
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// //type 1 normal 
// for(let i = 0; i <= arr.length -1; i++){
//     console.log(arr[i] + " " + typeof(arr[i]));
//     //yellow color shows given number is integer
// }
// //type 2 => i is index just like normal for loop
// for(let i in arr){
//     console.log(i + " " + typeof(i));
//     //white color shows given number is string
// }
// //type 3 => i is arr value
// for(let i of arr){
//     console.log(i + " " + typeof(i));
// }

console.log("a" + 1 + 2); //string concatenation => a12

console.log(1 + 2 + "a"); //integer addition then string concatenation => 3a

console.log("a".charCodeAt(0));


