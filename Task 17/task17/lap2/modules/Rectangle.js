// import { Shape } from "./Shape.js";

// export class Rectangle extends Shape{
//     #width;
//     #height;
//     static counter=0;
//     constructor(width,height,color){
//         super(color);
//         this.#width=width;
//         this.#height=height;
//         Rectangle.counter++;
//     }
//     set Width(width){
//         this.#width=width;
//     }
//     get Width(){
//         return this.#width
//     }
//     set Height(height){
//         this.#height=height;
//     }
//     get Height(){
//         return this.#height
//     }
//     static getCounter(){
//         return Rectangle.counter;
//     }
// }

class Rectangle extends Shape{
    #width;
    #height
    static count=0;
    constructor(width,height,color){
        super(color);
        this.#width = width;
        this.#height = height;
        Rectangle.count++;
    }
    set Width(w){
        this.#width = w;
    }
    get Width(){
        return this.#width;
    }
    set Height(w){
        this.#height = w;
    }
    get Height(){
        return this.#height;
    }
    static getCount(){
        return Rectangle.count;
    }
}