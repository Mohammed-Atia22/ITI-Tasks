// function Car(name,speed){
//     this.name = name;
//     this.speed = speed;
//     Car.counter++;
// }
// Car.counter = 0;

// Car.prototype.accelerate = function(){
//     this.speed += 10;
//     return this.speed;
// }
// Car.prototype.brake = function(){
//     this.speed -= 5;
//     return this.speed;
// }
// Car.getCounter = function(){
//     return Car.counter;
// }

// // const c = new Car('car1',100);
// // console.log(c.accelerate());
// // console.log(c.accelerate());
// // console.log(c.accelerate());
// // console.log(c.brake());
// // console.log(c.brake());
// // console.log(Car.getCounter());

// function EV(charge,name,speed){
//     Car.call(this,name,speed);
//     this.charge = charge;
// }

// EV.prototype = Object.create(Car.prototype);
// EV.prototype.constructor = EV;

// EV.prototype.chargeBattery = function(charge){
//     this.charge = charge;
// }
// EV.prototype.accelerate = function(){
//     this.speed += 20;
//     this.charge -= 1;
//     return `you speed is ${this.speed} and you battery charge is ${this.charge}`
// }
// EV.prototype.brake = function(){
//     Car.prototype.brake.call(this);
//     return this.speed;
// }

// const e = new EV(50,'car1',100);
// console.log(e.accelerate());
// console.log(e.accelerate());
// console.log(e.accelerate());
// console.log(e.brake());
// console.log(e.brake());
// // console.log(e.chargeBattery(90));


function Car(name,speed){
    this.name = name;
    this.speed = speed;
}
Car.prototype.accelerate = function(){
    this.speed += 10;
    return this.speed;
}
Car.prototype.brake = function(){
    this.speed -= 5;
    return this.speed;
}


function EV(charge,name,speed){
    Car.call(this,name,speed);
    this.charge = charge;
    EV.count++;
    if(new.target == EV){
        throw new Error("this is a abstract method");
    }
}
EV.count = 0;

EV.prototype = Object.create(Car.prototype);
EV.prototype.constructor = EV

EV.prototype.ChargeBattery = function(c){
    this.charge = c;
    return this.charge;
}
EV.prototype.accelerate = function(){
    this.speed += 20;
    this.charge -= 1;
    return `the speed is ${this.speed} and the charge is ${this.charge}`;
}
EV.prototype.brake = function(){
    Car.prototype.brake.call(this);
    return this.speed;
}
EV.getCount = function(){
    return EV.count;
}