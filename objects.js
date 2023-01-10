// let person = {
//     "name": "Bhavesh",
//     age: 23,
//     "0": "hello"
// }
// console.log(person["name"]);
// console.log(person.age);
// // console.log(person.0); // wrong way
// console.log(person["0"]);
// console.log(person);

// let arr = [1, 2, 3, 4];
// let obj = {
//     0: 1,
//     1: 2,
//     2: 3,
//     3: 4
// }

// console.log(arr);
// console.log(obj);
// console.log(arr[1]);
// console.log(obj[1]);

//add key value pair to objects 2 ways
// obj["company"] = "pepcoding";
// obj.gender = "male"; //not reliable way
// console.log(obj);

// arr["name"] = "anirudha";
// console.log(arr);

// let obj = {
//     1 : "hello1",
//     2 : "hello2"
// }
// console.log(Object.keys(obj));
// //output => [ '1', '2' ]
// console.log(Object.values(obj));
// //output => [ 'hello1', 'hello2' ]

//TRAVERSING ON OBJECT
//method 1: 
// for(let key in obj){
//     console.log(obj[key]);
// }
//output=> 
// hello1
// hello2

//method 2:
// for(let i = 0; i <= Object.keys(obj).length - 1; i++ ){
//     console.log(obj[Object.keys(obj)[i]]);
// }
//output => 
// hello1
// hello2

// let obj = {
//     obj1 : {
//         "obj1.1" : {
//             "obj1.1.1": {},
//             "obj1.1.2": {}
//         }
//     },
//     obj2 : {
//         "obj2.1" : {
//             "obj2.1.1":{}
//         },
//         "obj2.2" : {}
//     }
// }

// for(let key in obj){
//     console.log(key);
//     if(obj[key] == "object"){
//         for(let key2 in obj[key]){]
//             console.log(key2);
//         }
//     }
// }

// function  printKeys(obj){
//     for(key in obj){
//         console.log(key);
//         if(typeof(obj[key]) == "object"){
//             printKeys(obj[key]);
//         }
//     }
// }
// printKeys(obj);

// let obj = {
//     "hello1":{},
//     "hello2": 2
// }
// let newObj = {...obj};
// newObj.hello1["hello1.1"] = "bhavesh";

// console.log(obj);

// let newObj = {};
// for(let key in obj){
//     if(typeof(obj[key] == "object")){
//         newObj[key] = obj[key];
//     }else{
//         newObj[key] = obj[key];
//     }
// }