import { Rectangle } from "./Rectangle.js";

export class Square extends Rectangle{
    constructor(width,height,color){    
        super(width,height,color);
    }
    calcArea(){
        return this.Width*this.Height;
    }
    calcPerimeter(){
        return this.Width*this.Height;
    }
    printColor(){
        return this.Color;
    }
}