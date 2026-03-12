interface Student{
    id:number,
    name4:string,
    email?:string,
    isActive:boolean,
    grades:number[]
}

let students: Student[] = [];
function addStudent(_id:number,_name:string,_email:string,_isActive:boolean,_grades:number[]):void{
    const student:Student={
        id:_id,
        name4:_name,
        email:_email,
        isActive:_isActive,
        grades:_grades

    }
    students.push(student);
}

addStudent(1, "Ali", "ali@example.com", true, [90, 85, 88]);


function calcAverage(student:Student):number{
    let sum:number=0;
    for(let i:number=0;i<student.grades.length;i++){
        sum += student.grades[i]!;
    }
    return sum/student.grades.length;
}

let grade:number = calcAverage(students[0]!);

if(grade < 50){
    console.log("Needs improvement");
}
else if(grade >= 50 && grade < 70){
    console.log("Average");
}
else if(grade >= 70 && grade < 90){
    console.log("Good");
}
else if(grade >= 90){
    console.log("Excellent");
}