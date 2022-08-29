
// ES6:
let gg;
// console.log(fname);  let은 호이스팅 안됨. 위에서 선언만 한것도 안됨.
let fname = 'Hong'; // 변수 선언. 전역변수 / 지역변수 / block레벨변수.
fname = 'Hwang';
console.log(fname);

// 전역변수 / 지역변수

const PI = 3.14;  // 상수 선언;
// PI = 2.14;  // Uncaught TypeError: Assignment to constant variable.

console.log(age);  // var는 호이스팅이 돼서 변수의 존재는 감지(선언은 되어있다. 초기화는 안돼서 undefined)
var age = 20;

function localFnc() {  // 스코프 안에서는 지역변수가 우선. 지역변수 없으면 전역변수가 다 담당.
    // var age = 30; // 지역변수
    age = 35; // 전역변수
    console.log('지역변수: ' + age);

    let fname = 'Kim';
    console.log('localFnc: fname = ' + fname);
}



localFnc();

{
    let fname = 'Park';
    console.log(fname);
    var age = 22; // 전역변수. 에러X
}

console.log('전역변수: ' + age)

console.log(window);