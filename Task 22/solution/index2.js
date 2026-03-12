class Mercedes{
    print(){
        console.log("Mercedes");
    }
}
class BMW{
    print(){
        console.log("BMW");
    }
}
class Audi{
    print(){
        console.log("Audi");
    }
}
class CarShop{
    constructor(car){
        this.car = car;
    }
    getCar(){
        switch(this.car){
            case "Mercedes":
                return new Mercedes();
            case "BMW":
                return new BMW();
            case "Audi":
                return new Audi();
        }
    }
}

let shop1 = new CarShop("BMW");
console.log(shop1.getCar());
let bmw1 = shop1.getCar();
console.log(bmw1.print());