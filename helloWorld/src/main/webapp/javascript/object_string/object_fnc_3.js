// 생성자 함수(Constructor Function) => 책 함 읽어보기.

function Student (sno, sname) {
    this.sno = sno;
    this.sname = sname;
    this.showInfo = function() {
        return `학번은 ${this.sno}, 이름은 ${this.sname}임다.`
    }
}

let s1 = new Student('s11', '고길동');
console.log(`학번은 ${s1.sno}`);
console.log(`이름은 ${s1.sname}`);
console.log(s1.showInfo());
