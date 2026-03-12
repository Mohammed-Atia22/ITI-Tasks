var students = [];
function addStudent(_id, _name, _email, _isActive, _grades) {
    var student = {
        id: _id,
        name4: _name,
        email: _email,
        isActive: _isActive,
        grades: _grades
    };
    students.push(student);
}
addStudent(1, "Ali", "ali@example.com", true, [90, 85, 88]);
function calcAverage(student) {
    var sum = 0;
    for (var i = 0; i < student.grades.length; i++) {
        sum += student.grades[i];
    }
    return sum / student.grades.length;
}
var grade = calcAverage(students[0]);
if (grade < 50) {
    console.log("Needs improvement");
}
else if (grade >= 50 && grade < 70) {
    console.log("Average");
}
else if (grade >= 70 && grade < 90) {
    console.log("Good");
}
else if (grade >= 90) {
    console.log("Excellent");
}
