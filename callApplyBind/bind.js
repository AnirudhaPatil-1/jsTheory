let person1 = {
    name: "Adam",
    age: 27
}

let showDetails = function(city, car){
    console.log(`${this.name} is ${this.age} old. He lives in ${city} and drives ${car}.`);
}

// showDetails.call(person1, "Pune", "Ford");
// showDetails.apply(person1, ["Kolhapur", "Tata"]);
let  showDetailsBind = showDetails.bind(person1, "Banglore", "VW");
// console.log(showDetailsBind);
//OUTPUT -> [Function: bound showDetails]
showDetailsBind();
//OUTPUT ->  Adam is 27 old. He lives in Banglore and drives VW.
