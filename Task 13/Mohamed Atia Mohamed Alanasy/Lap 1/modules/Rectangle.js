import { Shape } from "./Shape.js";

export class Rectangle extends Shape{
    #width;
    #height;
    static staticnum=0;
    constructor(width,height,color){
        super(color);
        Rectangle.staticnum++;
        this.Width = width;
        this.Height = height;
    }
    set Width(w){
        this.#width = w;
    }
    get Width(){
        return this.#width;
    }
    set Height(h){
        this.#height = h;
    }
    get Height(){
        return this.#height;
    }
    static returnStatic(){
        return Rectangle.staticnum;
    }
}