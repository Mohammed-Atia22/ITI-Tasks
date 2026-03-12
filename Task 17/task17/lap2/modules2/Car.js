export class Car{
    #serial;
    #name;
    #speed;
    static count = 0;
    constructor(name,speed){
        this.#serial=Math.floor(Math.random() * 10000);
        this.#name=name;
        this.#speed=speed;
        Car.count++;
    }
    set Serial(serial){
        this.#serial=serial;
    }
    get Serial(){
        return this.#serial;
    }
    set Name(name){
        this.#name=name;
    }
    get Name(){
        return this.#name;
    }
    set Speed(speed){
        this.#speed=speed;
    }
    get Speed(){
        return this.#speed;
    }
    accelerate(){
        this.Speed += 10;
        return this.Speed;
    }
    brake(){
        this.Speed -= 5;
        return this.Speed;
    }
    static getCount(){
        return Car.count;
    }
}