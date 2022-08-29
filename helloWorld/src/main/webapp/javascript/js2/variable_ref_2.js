

// 원시형 vs 참조형
let str1 = 'Hello';  // String.
let str2 = new String('Hello');  // Object.

console.log('str1 == str2: ' + (str1 == str2));  // 값을 비교 (==)
console.log('str1 === str2: ' + (str1 === str2));  // 값과 타입을 비교. (===)

let num1 = 20;  // number.
let num2 = new Number(20);  // Object.

console.log('num1 == num2: ' + (num1 == num2));  // 값을 비교 (==)
console.log('num1 === num2: ' + (num1 === num2));  // 값과 타입을 비교. (===)

let obj;  // undefined.
obj = null; // null.  null도 하나의 값이다.

let sym1 = Symbol('symbol'); // unique한 키 값을 생성.
let sym2 = Symbol('symbol');
console.log('sym == sym2: ' + (sym1 == sym2));


// 객체(Object)  중괄호로 표현
obj = {
    sname: 'Jeon', // 속성: 속성값
    age: 30,
    showAge: function() {  // 속성에 함수정의문이 오면 메소드.
        console.log('나이는 ' + this.age + '입니다.');
    }
}

console.log(obj.sname);
console.log(obj['age']);  // 잘 기억해주시오. 이런 방법도.
obj.showAge();

obj.sname = 'Hwang';  // 값 할당.
console.log(obj.sname);


// 배열   대괄호로 표현
let numbers = [];  // new Array();
numbers[numbers.length] = 10; // 추가
numbers[numbers.length] = 20; // 추가
numbers[numbers.length] = 30; // 추가

numbers.forEach(function(val) {
    console.log(val);
});  // 메소드(콜백함수(값, 인덱스, 배열))



// console.clear();  // 콘솔메세지 초기화.

const randomVals = [];
for (let i = 0; i < 5; i++) {
    let val = Math.ceil(Math.random() * 10); // (0 * 10) <= 임의값 생성 < (1 * 10) / Math.ceil() : 소수점 이하를 올림한다.
    randomVals[i] = val;
}

randomVals.forEach((val) => {
    if (val > 5) {
        console.log('5보다 큰 val: ' + val);
    }
});

/*
    Math.floor() : 소수점 이하를 버림한다.
    Math.ceil() : 소수점 이하를 올림한다.
    Math.round() : 소수점 이하를 반올림한다.
    Math.random() : 0이상 1미만의 임의값 생성.
*/


//21 ~ 50 까지의 임의 값을 생성.
randomVals.splice(0, randomVals.length); // randomVals 배열 요소들 지우기

for (let i = 0; i < 5; i++) {
    randomVals[i] = Math.floor(Math.random() * 30) + 21;
}
console.log(randomVals);

// 짝수만 출력 - 콜백함수
randomVals.forEach(showEven);
function showEven(val) {
    if (val % 2 == 0) {
        console.log('21과 50사이 짝수(콜백함수로): ' +val);
    }
}



// 자료형의 변환
console.log('3' + 4); // 34    +연산자
console.log('3' * 4); // 숫자 형변환 후 곱해줌(나머지연산자들은 본래기능 수행)

console.log(-'3' + 4);  // 1

console.log((3).toString());  // 3 -> '3'   문자열로 변환 toString()


// 절대값과 숫자 부호 얻기 예
console.log('절대값: ' + Math.abs(-20));  // 20
console.log('숫자 부호: ' + Math.sign(-20));  // 양수:1, 0:0, 음수:-1, NaN:NaN

const arr2 = [-3, 2, -45, 0, 4, 7];
const arr3 = arr2.map(function(val) {   // 배열.map() -> 배열의 개수만큼 콜백함수를 실행. -> 새로운 배열을 반환해줌.
    return Math.sign(val);
});
console.log(arr3);


//  NaN, Infinity
console.log(3 / '5'); // 0.6
console.log(3 / 'five'); // NaN
console.log(1 / 0); // Infinity
console.log(-1 / 0); // -Infinity
