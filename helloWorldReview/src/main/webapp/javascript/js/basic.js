let student = {};
student.id = 'st1';
student.name = 'nara';
student['score'] = 80;

console.log(student);
for (let prop in student) {
    console.log(student[prop]);
}

console.log('=========================');


let numbers = [];
numbers[0] = 90;
numbers[1] = 80;
numbers[2] = 75;
numbers[3] = 72;

for (let num of numbers) {
    console.log(num);
}


let students = [];
let stu1 = {
    sNo: 1001,
    sName: '정다슬',
    score: 100
};

let stu2 = {
    sNo: 1002,
    sName: '백진희',
    score: 90
};

let stu3 = {
    sNo: 1003,
    sName: '김두영',
    score: 80
};

students[0] = stu1;
students[1] = stu2;
students[2] = stu3;

let str = '<ul>'

for (let student of students) {
    console.log('학번: ' + student.sNo + ', 이름: ' + student.sName + ', 점수: ' + student.score);
    str += `<li>학번: ${student.sNo}, 이름: ${student.sName}, 점수: ${student.score}`;
}

str += '</ul>';
document.write(str);