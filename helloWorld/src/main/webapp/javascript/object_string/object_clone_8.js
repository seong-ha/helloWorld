
let originObj = {
    sname: 'Park',
    age: 10,
    changeAge: function () {
        this.age++;
    }
}

let cloneObj = originObj; // originObj 참조값을 cloneObj도 같이 참조함.
console.log(originObj.sname);

cloneObj.sname = 'Kim';
console.log(originObj.sname);

originObj.changeAge();
console.log(cloneObj.age);



// 복사
let obj2 = new Object();
let copyObj = Object.assign({}, originObj); // Object.assign(복사받을(대상) 객체, 복사당할(출처) 객체);

copyObj.sname = 'Baek';
console.log(originObj.sname);



// 복사(비어있지 않은 객체로 복사했을 때)
let newObj = {
    sname: 'gak',
    phone: '010-1234-1234',
    age: 10
}

let dupObj = Object.assign(newObj, originObj);  // 존재하는 속성은 덮어쓰고, 없는 속성은 그대로 둔다.
console.log(dupObj);



// 객체의 속성을 지정할 때
let s1 = {
    sname: 'No'
}

s1.age = 10; // delete s1.age
s1['phone'] = '010-12-123';
s1.friends = [
    {name: '김은채', phone: '011-011-011', age: 21},
    {name: '서나영', phone: '012-012-012', hobbies: ['독서', '수영']},
];

console.log(s1);
console.log(s1.friends[0].name); // 첫번째 친구 이름
console.log(s1.friends[0].age); // 첫번째 친구 나이
console.log(s1.friends[1].hobbies[0]); // 두번째 친구의 첫번째 취미


class Student {
    constructor(sname, age) {
        this.sname = sname;
        this.age = age;
    }
}

let s2 = new Student('전성하', 30);
// Object.defineProperty(대상 객체, 정의할 속성이름, getter, setter)
Object.defineProperty(s2, 'score', {
    set: function (score) { 

        // 유효성 검사를 해서 값을 넣을 수도 잇다.
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

s2.score = 20;
console.log('점수는 ' + s2.score);

let s3 = new Student('김민규', 40);  // 여기서는 따로 score는 지정 못하는데,

// 이렇게 하면 마치 객체에 속성 정의 하듯 정의 된다. 그리고 이 객체를 사용한이용한 모든 곳에서 적용된다.
Student.prototype.showInfo = function() {
    return `이름은 ${this.sname}이고 나이는 ${this.age}입니다.`
}

console.log(s2.showInfo())
console.log(s3.showInfo())