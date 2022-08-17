function createObj(a, b, c, d) {
    this.lignt = a;
    this.engine = b;
    this.ground_height = c;
    this.sunProof = d;
}
createObj.prototype.newFeatures = function(e, f, g) {
    this.wheel_size = e;
    this.Price = f;
    this.color = g;
}
createObj.prototype.sound = 4000;
createObj.prototype.gearbox = "powerfull";

let car1 = new createObj(2, "front", 22, "top");
car1.newFeatures(2.5, 2000000, "black");
let car2 = new createObj(2, "back", 30, "front");
car2.newFeatures(3, 4000000, "white");
let car3 = new createObj(4, "sides", 18, "back");
car3.newFeatures(3.5, 6000000, "gray");

console.log(car1.Price, car2.color, car3.wheel_size);
console.log(car1, car2, car3);
console.log(car1.sound, car2.gearbox, car3.gearbox);

// let car = {
//     light : 2,
//     engine : "front",
//     ground_height : 22,
//     sunProof : "side" 
// }
// let car1 = Object.create(car);
// car1.color="green";
// let car2 = Object.create(car);
// car2.color="black";
// let car3 = Object.create(car);
// car3.color = "gray";

// console.log(car1, car2, car3);
// console.log(car1.color, car3. sunProof);