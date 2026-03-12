import { Car } from "./Car.js";

export class EV extends Car{
    #charge;
    constructor(name,speed,charge){
        super(name,speed);
        this.#charge=charge;
    }
    set Charge(charge){
        this.#charge=charge;
    }
    get Charge(){
        return this.#charge;
    }
    chargeBattery(ch){
        this.#charge = ch;
        //return this.Charge;
    }
    accelerate(){
        this.Speed += 20;
        this.#charge -= 1;
        return `you speed = ${this.Speed} and your charge = ${this.Charge}`;
    }
}