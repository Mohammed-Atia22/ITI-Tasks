class CEO{
    constructor(name,age,address){
        this.name = name;
        this.age = age;
        this.address = address;
        if(CEO.instance){
            return CEO.instance;
        }
        CEO.instance = this
    }
    print(){
        console.log(`Name = ${this.name} , Age = ${this.age} , Address = ${this.address}`);
    }
}

const ceo1 = new CEO("Mohamed Atia", 45, "Cairo, Egypt");
const ceo2 = new CEO("Ali Ahmed", 50, "Giza, Egypt");

ceo1.print();

console.log(ceo1 === ceo2);