// let firstName = "Bhavesh";
// let lastName = 'Bansal';
// let age = 20;

// console.log(firstName + " " + lastName);

// let fullName =  `${firstName} ${lastName}`;
// console.log(fullName);

// console.log(`my name is ${fullName} and my age is ${age}`);

//STRING METHODS

//string length
let str = "Bhavesh Bansal";
// console.log(str);
// console.log(str.length); //14 calculates including spaces

//SLICE
// console.log(str.slice(2, 6));
//.slice(start index, end index + 1);
//.substring(start index, end index + 1);
// console.log(str.substring(2, 6));
//slice and substring works same only diff = slice can take negative value

// console.log(str.slice(-10,6));
// console.log(str.substring(-10, 6)); 
//when negative value is given to substring it defaults to 0 index

//SUBSTR => .substr is DEPRECATED   
//.substr(start index,length );
// console.log(str.substr(2, 3));// start index 2 and print length is 3

//TRIM METHOD 
//removes spaces before and after the string
// let str1 = "                Bhavesh Bansal    ";
// console.log(str1.length);
// str1 = str1.trim();
// console.log(str1.length);

//REPLACE method => replaces only the first appearance
let str2 = "Bhavesh Bhavesh Bansal";
// console.log(str2.replace("Bhavesh", "Manish"));

//UPPERCASE
console.log(str2.toUpperCase());

//LOWERCASE
console.log(str2.toLowerCase());

let string = "Anirudha";
console.log(string.charAt(0)); 
console.log(string.charCodeAt(0));

console.log(string[0]);

//string are inmutable
str[0] = "B"; //does not do any work as strings are inmutable
console.log(string);

