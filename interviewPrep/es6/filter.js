let words = ['spray', 'limit', 'xyz', 'anirudha', 'desctruction'];
//get words that length greater than 8

// let narr = [];
// for(let i = 0; i < words.length; i++){
//     let word = words[i];
//     if(word.length > 5){
//         narr.push(word);
//     }
// }
// console.log(narr);

let nArr = words.filter(function (ele) {
    // console.log(ele);
    return ele.length > 6;
});
console.log(nArr);