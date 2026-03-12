import { Car } from "./Car.js";
import {EV} from "./EV.js";


// const c = new Car("car1",50);
// const c1 = new Car("car1",50);
// const c2 = new Car("car1",50);
// console.log(c.accelerate());
// console.log(c.accelerate());
// console.log(c.accelerate());
// console.log(c.brake());
// console.log(Car.getCount());

const e = new EV("car1",100,50);
console.log(e.accelerate());
console.log(e.accelerate());
console.log(e.accelerate());
e.chargeBattery(100);
console.log(e.accelerate());
console.log(e.accelerate());
console.log(e.accelerate());