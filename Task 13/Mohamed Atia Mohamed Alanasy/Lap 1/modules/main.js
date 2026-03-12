import { Rectangle } from "./Rectangle.js";
import { Square } from "./Square.js";
import { Circle } from "./Circle.js";
import { Shape } from "./Shape.js";

let s = new Square(10,10,"red");
let c = new Circle(10,5,5);
let r1 = new Rectangle(10,10,"red");
let r2 = new Rectangle(10,10,"red");
let r3 = new Rectangle(10,10,"red");

console.log(s.calcArea());
console.log(s.calcPerimeter());
console.log(s.printColor());
console.log(c.calcArea());
console.log(c.calcPerimeter());
console.log(Rectangle.returnStatic());