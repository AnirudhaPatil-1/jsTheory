// let str = "Bhavesh Bansal";
// let ans = "";

// for(let i = 0; i < str.length; i++){
//     ans += str[i] + ", ";
// }
// console.log(ans);
//output=>  B, h, a, v, e, s, h,  , B, a, n, s, a, l,

// for(let i = 0; i < str.length; i++){
//     ans += str.charCodeAt(i) + ", ";
// }
// console.log(ans);
//output=>66, 104, 97, 118, 101, 115, 104, 32, 66, 97, 110, 115, 97, 108,

// let str1 = "adghalfa";
// //Q. number of times "a" is present
// let count = 0;
// for(let i = 0; i < str1.length; i++){
//     if(str1.charAt(i) == "a"){
//         count++;
//     }   
// }
// console.log(count);

// let str2 = "12";
// console.log(str2); // while colored output means string
// console.log(parseInt(str2)); //yellow colored output means integer

//Q. cal the sum of the given str
// let str = "123456789";
// let sum = 0;
// for(let i = 0; i < str.length; i++){
    // sum += parseInt(str[i]);
// }
// console.log(sum);

//Q. cal the sum of double digit of the given string
// let str = "9797942942841";
// let ans = 0;
// for(let i = 0; i < str.length; i+=2){
//     // console.log(str.substr(i, 2));
//     ans += parseInt(str.substr(i, 2));
// }
// console.log(ans);

// Q. take ascii value of alphabets and add to integers
// let str = "1A2";
// let ans = 0;
// for(let i = 0; i < str.length; i++){
//     // if(str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57){
//     if( isNaN(str[i])){
//         ans += str.charCodeAt(i);
//     }else{
//         ans += parseInt(str[i]);
//     }
// }
// console.log(ans);

// Q.Reverse the given string
// let str = "Bhavesh Bansal";
// let ans = "";
// for(let i = str.length -1; i >= 0; i--){
//     ans += str[i];
// }
// console.log(ans);

//Q. revere the string wordwise
//Approach 1: travel right to left
// let str = "Bhavesh Bansal";
// let revStr = "";

// for(let i = str.length - 1; i >= 0; i--){
//     revStr += str[i];
// }
// ans ="";
// let ep = revStr.length;
// let sp = undefined;
// for(let i = revStr.length - 1; i>= 0; i--){
//     if(revStr[i] == " " || i == 0){
//         if(i == 0){
//             sp = i;
//         }else{
                // sp = i+1;

            // }
//         
//         ans += revStr.slice(sp, ep) + " ";
//         ep = i;
//     }
// }
// console.log(ans);

// //Approach 2: travel left to right
// let str = "Bhavesh Bansal";
// let revStr = "";
// for(let i = str.length-1; i >= 0; i--){
//     revStr += str[i];
// }
// let ans = "";
// let sp = 0;
// let ep;
// for(let i = 0; i <= revStr.length - 1; i++){
//     if(revStr[i] == " " || i == revStr.length - 1){
//         if( i ==revStr.length - 1 ){
//             ep = i + 1;
//         }else{
//             ep = i;
//         }
//         ans = revStr.slice(sp, ep) + " " + ans;
//         sp = i + 1;
        
//     }
// }
// console.log(revStr);
// console.log(ans);

//Q. Palindrome?
let str = "abbba";
let ans = true;
for(let i = 0, j = str.length - 1; i <= j; i++, j--){
    if(str[i] != str[j]){
        ans = false;
        break;
    }
}

console.log(ans);