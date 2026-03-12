let arr = [10,20,50,65,84,36,79,92,1,42,2,14,25,17];

arr.sort((a,b)=>{
    return a-b;
})

console.log(arr);

let newarr = arr.filter((a)=> a>50);
console.log(newarr);

let maparr = arr.map((a)=> a = a**2);
console.log(maparr);

let reducearr = arr.reduce((a,b)=>a+b);
console.log(reducearr);

console.log(Math.max(...arr));
console.log(Math.min(...arr));


function fun(a,...b){
    if(a=='sum'){
        let sum = b.reduce((a,b)=>a+b);
        console.log(sum);
    }
    else if(a=='diff'){
        let diff = b.reduce((a,b)=>a-b);
        console.log(diff);
    }
    else if(a=='mul'){
        let mul = b.reduce((a,b)=>a*b);
        console.log(mul);
    }
    else if(a=='div'){
        let div = b.reduce((a,b)=>a/b);
        console.log(div);
    }
}
let arr3 = [10,20,30];
fun('mul',10,19,38);
fun('div',10,19,38,76,3);
fun('sum',10,19);

const id1 = 123;
const name1 = 'mohamed';
const school1 = 'school';

const objkt = {
    id:id1,
    name:name1,
    school:school1,
    getData:function(){
        console.log(`my id is ${this.id} and my name is ${this.name} and school ${this.school}`);
    }
}
objkt.getData();