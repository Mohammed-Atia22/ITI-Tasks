// import { Rectangle } from "./Rectangle.js";

// export class Square extends Rectangle{
//     constructor(width,height,color){
//         super(width,height,color)
//     }
//     calcArea(){
//         return this.Width*this.Height;
//     }
//     calcPerimeter(){
//         return 2*this.Width+this.Height;
//     }
//     printColor(){
//         return this.Color
//     }
//     toString(){
//         return `${this.calcArea()}///${this.calcPerimeter()}///${this.printColor()}`;
//     }
// }

class Square extends Rectangle{
    constructor(width,height,color){
        super(width,height,color)
    }
    calcArea(){
        return this.Width*this.Height
    }
    calcPerimeter(){
        return this.Width*4;
    }
    printColor(){
        return this.Color;
    }
    toString(){
        return `width is ${this.Width} height is ${this.Height} color is ${this.Color}`;
    }
}