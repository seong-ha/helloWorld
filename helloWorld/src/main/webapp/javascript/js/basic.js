
// object에 property 삽입하기
let student = {};
student.id = 'st1';
student.name = 'nara';
student['score'] = 80;

console.log(student);
for (let prop in student) {
    console.log(student[prop]);
}

// 배열
let numbers = [];
numbers[0] = 90;
numbers[1] = 80;
numbers[2] = 75;
numbers[3] = 85;

for (let num of numbers) {
    console.log(num);
}


// 배열에 객체 넣기
let students = [];
let stu1 = {
    sNo: 1001,
    sName: '김영희',
    score: 90
};

let stu2 = {
    sNo: 1002,
    sName: '김용명',
    score: 100
};

let stu3 = {
    sNo: 1003,
    sName: '안드레아',
    score: 80
};

students[0] = stu1;
students[1] = stu2;
students[2] = stu3;

// 향상 for문으로 console이랑 document에 정보 출력.
let str = '<ul>';
for (let student of students) {
    console.log('학번: ' + student.sNo +', 이름: ' + student.sName + ', 점수: ' + student.score);
    str += '<li> 학번: ' + student.sNo + ', 이름: ' + student.sName + ', 점수: ' + student.score + '</li>';
}
str += '</ul>';
document.write(str);