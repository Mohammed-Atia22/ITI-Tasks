
export class Shape{
    #color;
    constructor(color) {
        if (this.constructor.name == "Shape")
            throw new Error("can not take instance from Shape");
        this.Color = color;
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
    calcArea(width,height){
        return 0;
    }
    calcPerimeter(width,height){
        return 0;
    }
}