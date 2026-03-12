import { Car } from "./Car.js";

import { EV } from "./EV.js";

let c1 = new Car("bmw",100);
let c2 = new Car("mercedes",100);

c1.accelerate();
c1.accelerate();
c1.accelerate();
c1.brake();
console.log(Car.returnStatic());

let e = new EV(100,60);
console.log(e.accelerate());
console.log(e.accelerate());
console.log(e.accelerate());
console.log(e.brake());
console.log(e.chargeBattery(90));