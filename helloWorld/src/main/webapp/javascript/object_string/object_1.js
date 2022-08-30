
// 객체: {name: "홍길동", age:20, showAge: function() {...}}

class Student {
    // 속성 정의 불가(필드) -> this 키워드와 함께 써야함.
    constructor(sno, name) {
        this.sno = sno;
        this.name = name;
    }

    setGrade(grade) {
        this.grade = grade;
    }

    showInfo() {
        return `이름은 ${this.name}이고 학번은 ${this.sno}입니다.`;
    }
}

let s1 = new Student('s11', '홍길동');
console.log(s1.sno);
s1.setGrade(3);
console.log(s1.grade);

let s2 = new Student('s12', '김민식');
s2.setGrade(2);

const students = [s1, s2, new Student('s13', '최홍식')];
students[2].setGrade(1);

s1.phone = '010-1111-2222';
delete s1.phone; // 속성 삭제.  delete 속성;

students.forEach(student => console.log(`이름: ${student.name}, 학년: ${student.grade}, 연락처${student.phone}`));

students.forEach(student => console.log(student.showInfo()));

