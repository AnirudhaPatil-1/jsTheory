function car(brand, model, color){
    this.Brand = brand
    this.Model = model
    this.Color = color

    this.drive = function(){
        console.log(`I am driving ${this.Brand}`);
    }
}

let car1 = new car("maruti", "alto", "white"); // this returns new object in this case
// console.log(car1);
//OUTPUT -> car { Brand: 'maruti', Model: 'alto', Color: 'white' }
let car2 = new car("maruti", "ritz", "white");
// console.log(car2);

car1.Brand = "XYZ";
// console.log(car1); //car { Brand: 'XYZ', Model: 'alto', Color: 'white' }
// console.log(car1.Model); // alto

car1.drive(); //I am driving XYZ