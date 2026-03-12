// const person = {
//     id:1,
//     name:''
// }

// const employee = {};
// Object.defineProperty(employee,'Salary',{
//     _salary:0,
//     set:function(s){
//         this._salary = s+s*0.2;
//     },
//     get:function(){
//         return this._salary;
//     },
//     enumerable:true,
//     configurable:true
// })
// // employee.Salary = 1000;
// // console.log(employee.Salary);

// Object.setPrototypeOf(employee,person);
// console.log(employee);

// const HRemployee = {
//     location:''
// }
// Object.setPrototypeOf(HRemployee,employee);
// console.log(HRemployee);

// Object.defineProperty(person,'Age',{
//     age:'',
// })
// console.log(person);
// console.log(HRemployee);

// console.log(Object.getPrototypeOf(HRemployee) === employee);
// console.log(Object.getPrototypeOf(employee) === person); 

// console.log(HRemployee.id);
// console.log(HRemployee.name);

// HRemployee.id = 40;
// console.log(HRemployee.id);
// //////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////
// const person2 = {};
// Object.defineProperties(person2,{
//     id:{
//         value:1,
//         writable:true,
//         enumerable:true
//     },
//     name:{
//         value:"",
//         writable:true,
//         enumerable:true
//     }
// })

// const employee2 = {};
// Object.defineProperties(employee2,{
//     Salary:{
//         set:function(s){
//             this._salary = s+s*0.2;
//         },
//         get:function(){
//             return this._salary;
//         },
//         enumerable:true
//     }
// });

// Object.setPrototypeOf(employee2,person2);

// const HRemployee2 = {};
// Object.defineProperties(HRemployee2,{
//     location:{
//         value:" ",
//         writable:true,
//         enumerable:true
//     }
// })

// Object.setPrototypeOf(HRemployee2,employee2);

// console.log(HRemployee2.id);     // 1 (inherited)
// console.log(HRemployee2.name);   // "Empty"

// HRemployee2.id = 55;
// HRemployee2.name = "Omar";

// console.log(person2.id);         // 1 (unchanged)
// console.log(HRemployee2.id);
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
// const person = {
//     id:1,
//     name:"empty"
// }

// const employee = {};
// Object.defineProperty(employee,'Salary',{
//     _salary:0,
//     set:function(s){
//         this._salary = s;
//     },
//     get:function(){
//         return this._salary;
//     }
// })
// Object.setPrototypeOf(employee,person);

// const HRemployee = {
//     location:"location"
// }
// Object.setPrototypeOf(HRemployee,employee);
// console.log(Object.getPrototypeOf(HRemployee) === employee);
// console.log(Object.getPrototypeOf(employee) === person);
// console.log(HRemployee.id);
// console.log(HRemployee.name);

// Object.defineProperty(person,'age',{
//     value:20,
//     writable:true,
//     enumerable:true
// })
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
const person = {};
Object.defineProperties(person,{
    id:{
        value:1,
        writable:true,
        enumerable:true
    },
    name:{
        value:"empty",
        writable:true,
        enumerable:true
    },
    age:{
        value:20,
        writable:true,
        enumerable:true
    }
})

const employee = {
    _salary:0
}
Object.defineProperties(employee,{
    Salary:{
        set:function(s){
            this._salary = s+s*0.2;
        },
        get:function(){
            return this._salary;
        },
        enumerable:true,
        configurable:true
    }
})
Object.setPrototypeOf(employee,person);

const Hremployee = {};
Object.defineProperties(Hremployee,{
    location:{
        value:'location',
        writable:true,
        enumerable:true
    }
})
Object.setPrototypeOf(Hremployee,employee);

console.log(Object.getPrototypeOf(employee) === person);
console.log(Object.getPrototypeOf(Hremployee) === employee);

