function Shape(color){
    if(new.target == Shape){
        throw new Error('this is abstract method');
    }
    this.color = color;
}

Shape.prototype.calcArea = function(){
    return 0;
}
Shape.prototype.calcPerimeter = function(){
    return 0;
}
Shape.prototype.printColor = function(){
    return this.color;
}


function Rect(width,height,color){
    Shape.call(this,color);
    this.width = width;
    this.height = height;
    Rect.count++;
}
Rect.prototype = Object.create(Shape.prototype);
Rect.prototype.constructor = Rect;
Rect.count = 0;
Rect.getCounter = function(){
    return Rect.count;
}



function Square(width,height,color){
    Rect.call(this,width,height,color);
}
Square.prototype = Object.create(Rect.prototype);
Square.prototype.constructor = Square;

Square.prototype.calcArea = function(){
    return this.width*this.height;
}
Square.prototype.calcPerimeter = function(){
    return 4*this.width;
}
Square.prototype.printColor = function(){
    return this.color;
}
Square.prototype.toString = function () {
    return `Square => Color: ${this.color}, Area: ${this.calcArea()}, Perimeter: ${this.calcPerimeter()}`;
};

// const sh = new Shape('red');
// console.log(sh);

// const r = new Rect(10,20,'red');
// const r1 = new Rect(10,20,'red');
// const r2 = new Rect(10,20,'red');
// console.log(Rect.getCounter());

const s = new Square(10,20,'red');
console.log(s.calcArea());
console.log(s.calcPerimeter());
console.log(s.printColor());
console.log(s.toString());