let person1 = {
    name: "Adam",
    age: 25
}

function showDetails(city, state){
    console.log(this.name + " " + this.age + " " + city + " " + state);
}

// let showDetailsBind = showDetails.bind(person1, "Noida", "UP");
// showDetailsBind();

Function.prototype.myBind = function(...args){
    let obj = this;
    let params = args.slice(1);
    return function(...args2){
        obj.apply(args[0], [...params, ...args2]);
    }
}

let showDetailsBind = showDetails.myBind(person1, "Kolhapur");
showDetailsBind("Delhi");