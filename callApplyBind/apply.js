let person1 = {
    name: "Adam",
    age: 27
}

let showDetails = function(city, car){
    console.log(`${this.name} is ${this.age} old. He lives in ${city} and drives ${car}`);
}

showDetails.call(person1, "Pune", "Ford");
//Adam is 27 old. He lives in Pune and drives Ford

showDetails.apply(person1, ["Kolhapur", "Mercedes"]);
//Adam is 27 old. He lives in Kolhapur and drives Mercedes

