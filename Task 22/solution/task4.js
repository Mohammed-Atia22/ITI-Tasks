class ConfigureVals{
    constructor(xpoint=0,ypoint=0,shape=null){
        this.xpoint = xpoint;
        this.ypoint = ypoint;
        this.shape = shape;
        if(ConfigureVals.instance){
            return ConfigureVals.instance;
        }
        ConfigureVals.instance = this
    }
    print(){
        console.log(`X-point = ${this.xpoint} , Y-point = ${this.ypoint} , Shape = ${this.shape}`);
    }
}

const val1 = new ConfigureVals(10,20,"Circle");
const val2 = new ConfigureVals();

val1.print();
val2.print();

console.log(val1 === val2);