export class Car{
    #serial;
    #name;
    #speed;
    static staticNum = 0;
    constructor(name,speed){
        this.Serial=Math.floor(Math.random()*10000);
        this.Name=name;
        this.Speed=speed;
        Car.staticNum++;
    }
    set Serial(s){
        this.#serial=s;
    }
    get Serial(){
        return this.#serial;
    }
    set Name(n){
        this.#name=n;
    }
    get Name(){
        return this.#name;
    }
    set Speed(p){
        this.#speed = p;
    }
    get Speed(){
        return this.#speed;
    }
    accelerate(){
        this.Speed += 10;
        console.log(this.Speed);
    }
    brake(){
        this.Speed -= 5;
        console.log(this.Speed);
    }
    static returnStatic(){
        return Car.staticNum;
    }
}