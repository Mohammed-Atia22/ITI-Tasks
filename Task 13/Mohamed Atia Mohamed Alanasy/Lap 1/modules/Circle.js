import { Shape } from "./Shape.js";

export class Circle extends Shape{
    #radius;
    #x;
    #y;
    constructor(radius,x,y,color){
        super(color);
        this.Radius = radius;
        this.X = x;
        this.Y = y;
    }
    set Radius(r){
        this.#radius = r;
    }
    get Radius(){
        return this.#radius;
    }
    set X(x){
        this.#x = x;
    }
    get X(){
        return this.#x;
    }
    set Y(y){
        this.#y = y;
    }
    get Y(){
        return this.#y;
    }
    calcArea(){
        return this.Radius*this.Radius;
    }
    calcPerimeter(){
        return this.Radius*2;
    }
}

// let c = new Circle(10,20,30);
// console.log(c.Radius());