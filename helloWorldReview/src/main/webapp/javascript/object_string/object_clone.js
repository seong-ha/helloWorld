let originObj = {
    sname: 'Park',
    age: 10,
    changeAge: function () {
        this.age++;
    }
}

let cloneObj = originObj;
console.log(originObj.sname);

cloneObj.sname = 'Kim';
console.log(originObj.sname);

originObj.changeAge();
console.log(cloneObj.age);


let obj2 = new Object();
let copyObj = Object.assign({}, originObj);

copyObj.sname = 'Beak';
console.log(originObj.sname);



let newObj = {
    sname: 'gak',
    phone: '010-1234-1234',
    age: 10
}

let dupObj = Object.assign(newObj, originObj);
console.log(dupObj);


let s1 = {
    sname: 'No'
}

s1.age = 10;
s1['phone'] = '010-12-123';
s1.friends = [
    {name: '김은채', phone: '011-011-011', age: 21},
    {name: '서나영', phone: '012-012-012', hobbies: ['독서', '수영']},
];

console.log(s1);
console.log(s1.friends[0].name);
console.log(s1.friends[0].age);
console.log(s1.friends[1].hobbies[0]);


class Student {
    constructor(sname, age) {
        this.sname = sname;
        this.age = age;
    }
}

let s2 = new Student('전성하', 30);
Object.defineProperty(s2, 'score', {
    set: function(score) {
        if (score > 100) {
            throw '잘못된 값을 입력했습니다.(100보다 작은 값 입력하시오.)'      
        } else if (score < 0) {
            throw '잘못된 값을 입력했습니다.(0보다 큰 값 입력하시오.)'
        } else {
            this._score = score;
            console.log(this);
        }
    },

    get: function() {
        return this._score;
    }
});

s2.score = 13;
console.log(s2.score);
Student.prototype.showInfo = function() {
    return `이름은 ${this.sname}이고 나이는 ${this.age}입니다.`
}

let s3 = new Student('김민규', 40);
let s4 = new Student('df', 1);
console.log(s2.showInfo());
console.log(s3.showInfo());
console.log(s4.showInfo());