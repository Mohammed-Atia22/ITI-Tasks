// import { Shape } from "./Shape.js";

// export class Circle extends Shape{
//     #x;
//     #y;
//     #radius;
//     constructor(x,y,radius,color){
//         super(color);
//         this.#x=x;
//         this.#y=y;
//         this.#radius=radius;
//     }
//     set X(x){
//         this.#x=x;
//     }
//     get X(){
//         return this.#x;
//     }
//     set Y(y){
//         this.#y=y;
//     }
//     get Y(){
//         return this.#y;
//     }
//     set Radius(r){
//         this.#radius = r;
//     }
//     get Radius(){
//         return this.#radius;
//     }
//     calcArea(){
//         return this.X*this.Y;
//     }
//     calcPerimeter(){
//         return 2*this.X*this.Y;
//     }
// }

class Circle extends Shape{
    #x;
    #y;
    #radius;
    constructor(x,y,radius,color){
        super(color);
        this.#x=x;
        this.#y=y;
        this.#radius=radius;
    }
    set X(x){
        this.#x=x;
    }
    get X(){
        return this.#x;
    }
    set Y(y){
        this.#y=y;
    }
    get Y(){
        return this.#y;
    }
    set Radius(r){
        this.#radius=r;
    }
    get Radius(){
        return this.#radius;
    }
    toString(){
        return `x = ${this.X} , y = ${this.Y} , radius = ${this.Radius} , color = ${this.Color}`;
    }
}