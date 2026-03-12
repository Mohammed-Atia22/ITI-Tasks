// export class Shape{
//     #color;
//     constructor(color){
//         if (new.target === Shape) {
//             throw new Error("this is abstract class");
//         }
//         this.#color = color;
//     }
//     set Color(color){
//         this.#color = color;
//     }
//     get Color(){
//         return this.#color;
//     }
//     calcArea(){
//         return 0;
//     }
//     calcPerimeter(){
//         return 0;
//     }
// }

class Shape{
    #color;
    constructor(color){
        this.#color = color;
        if(this.constructor == Shape){
            return new Error("this is a abstract class");
        }
    }
    set Color(c){
        this.#color = c;
    }
    get Color(){
        return this.#color;
    }
    printColor(){
        return 0;
    }
    calcArea(){
        return 0;
    }
    calcPerimeter(){
        return 0;
    }
}