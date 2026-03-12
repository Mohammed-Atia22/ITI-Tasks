class Counter{
    private _counter:number;
    constructor(counter:number=0){
        this._counter=counter;
    }
    set Counter(counter:number){
        this._counter=counter;
    }
    get Counter():number{
        return this._counter;
    }
}

let tr = 0;
let c = new Counter(tr);
console.log(c.Counter);

const counter5 = document.querySelector(".counter") as HTMLParagraphElement;
counter5.innerText = c.Counter.toString();

const Increase = document.querySelector(".Increase") as HTMLButtonElement;
Increase.addEventListener("click",function(e){
    tr += 1;
    c = new Counter(tr);
    counter5.innerText = c.Counter.toString();
})
const Reset = document.querySelector(".Reset") as HTMLButtonElement;
Reset.addEventListener("click",function(e){
    tr = 0;
    c = new Counter(tr);
    counter5.innerText = c.Counter.toString();
})
const Decrease = document.querySelector(".Decrease") as HTMLButtonElement;
Decrease.addEventListener("click",function(e){
    tr -= 1;
    c = new Counter(tr);
    counter5.innerText = c.Counter.toString();
})