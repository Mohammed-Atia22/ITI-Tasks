// function createCounter(){
//     let count=4;
//     // function increment(){
//     //     count++;
//     // }
//     function getCount(){
//         return count;
//     }
//     return getCount();
// }
// console.log(createCounter());

// function sum1(x){
//     return function sum2(y){
//         return x+y;
//     }
//     //return sum2;
// }
// const r = sum1(5);
// console.log(r(5));

const employees = [
  { id: 1, name: "Ali", salary: 4000, dept: "IT" },
  { id: 2, name: "Sara", salary: 5000, dept: "HR" },
  { id: 3, name: "Omar", salary: 6000, dept: "Finance" }
];

function getName(){
    return function getemp(x){
        return x.name
    }
}
const fun = getName();
console.log(fun(employees[0]));
//////////////////////////////////
//////////////////////////////////
//////////////////////////////////
function counter(){
    let count = 0;
    return function increase(){
        count++;
        return count;
    }
}
const c1 = counter();
console.log(c1());
console.log(c1());
console.log(c1());
//////////////////////////////////
//////////////////////////////////
//////////////////////////////////
function addFixed(x){
    return function(y){
        return x+y;
    }
}
const f1 = addFixed(10)(10);
console.log(f1);
//////////////////////////////////
//////////////////////////////////
//////////////////////////////////
function applyBonus(b){
    return function(e){
        e.salary = e.salary + e.salary*b;
        return e
    }
}
const b = applyBonus(0.2)(employees[1]);
console.log(b);
//////////////////////////////////
//////////////////////////////////
//////////////////////////////////
function greeting(d){
    return function(){
        console.log("hello from department  "+d);
    }
}
const g = greeting("CS");
g();
//////////////////////////////////
//////////////////////////////////
//////////////////////////////////
function GetNames(employees){
    return function(){
        employees.map(emp=>console.log(emp.name));
    }
}
GetNames(employees)();
//////////////////////////////////
//////////////////////////////////
//////////////////////////////////
function filters(employees){
    return function(){
        const e = employees.filter(emp=>emp.salary>4500);
        return e;
    }
}
const f4 = filters(employees);
console.log(f4());
//////////////////////////////////
//////////////////////////////////
//////////////////////////////////
function getTotal(){
    return function(employees){
        const su = employees.reduce((sum,sal) => sum+sal.salary,0);
        return su;
    }
}
const g7 = getTotal();
console.log(g7(employees));