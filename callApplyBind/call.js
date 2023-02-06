let person1 = {
    name: "Adam",
    age: 25,
    // showDetails: function(){
    //     // console.log(`${this.name} is ${this.age} old.`)
    //     console.log(this.name + " is " + this.age + " old.");
    // }
}

let person2 = {
    name: "Steve",
    age: 20,
    // showDetails: function(){
    //     console.log(this.name + " is " + this.age + " old.");
    // }
}

// person1.showDetails();
// person2.showDetails(); //  OUTPUT -> Steve is 20 old.

//function burrowing
// person1.showDetails.call(person2); //OUTPUT -> Steve is 25 old.


let showDetails = function(city, car){
    // console.log(this.name + " is " + this.age + " old.");
    console.log(`${this.name} is ${this.age} old. He is from ${city} and drives ${car}.`);
}

// showDetails.call(person1); //Adam is 25 old.
// showDetails.call(person2); //Steve is 20 old.
showDetails.call(person1, "Kolhapur", "Amaze");
//OUTPUT -> Adam is 25 old. He is from Kolhapur and drives Amaze.
showDetails.call(person2, "Pune", "Verna"); 
//OUTPUT  -> Steve is 20 old. He is from Pune and drives Verna.