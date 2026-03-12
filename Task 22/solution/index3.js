function ToyDuck(color,price) {
    this.color = color;
    this.price = price;
}
function ToyCar(color,price,name){
    this.color = color;
    this.price = price;
    this.name = name;
}

function ToyFactory() {}
ToyFactory.createToy = function(type, color, price, name) {
    switch (type) {
        case "duck":
            return new ToyDuck(color, price);
        case "car":
            return new ToyCar(color, price, name);
    }
};

const ducktoy = ToyFactory.createToy("duck", "yellow", 20);
const cartoy = ToyFactory.createToy("car", "red", 40, "BMW");

console.log(ducktoy);
console.log(cartoy); 