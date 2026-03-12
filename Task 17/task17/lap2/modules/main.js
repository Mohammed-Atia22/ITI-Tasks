import { Circle } from "./Circle.js";
import { Rectangle } from "./Rectangle.js";
import { Shape } from "./Shape.js";
import { Square } from "./Square.js";

//const s = new Shape('red');
//console.log(s);
//console.log(Shape.calcArea());

// const r = new Rectangle(10,20,'red');
// const r1 = new Rectangle(10,20,'red');
// const r2 = new Rectangle(10,20,'red');
// console.log(r.calcArea());
// console.log(r.calcPerimeter());
// console.log(Rectangle.getCounter());

// const s = new Square(10,20,'red');
// console.log(s.calcArea());
// console.log(s.calcPerimeter());
// console.log(s.printColor());
// console.log(s.toString());

const c = new Circle(10,10,10,'red');
console.log(c.calcArea());
console.log(c.calcPerimeter());
console.log(c.Color);