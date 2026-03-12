import { Car } from "./Car.js";
export class EV extends Car{
    #charge
    constructor(speed,charge){
        super('',speed);
        this.Charge = charge;
    }
    set Charge(c){
        this.#charge=c;
    }
    get Charge(){
        return this.#charge;
    }
    chargeBattery(chargeTo){
        this.Charge = chargeTo;
        return(this.Charge);
    }
    accelerate(){
        this.Speed += 20;
        this.Charge -= 1;
        return(this.Speed+" "+this.Charge);
    }
    brake(){
        this.Speed -= 5;
        return this.Speed;
    }

}