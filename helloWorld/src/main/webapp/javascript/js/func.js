function sum(num1, num2) {
    return num1 + num2;  // return undefined. 반환값은 정해지지 않았고 걍 그때그때 잘 반환함.
}

let num;
console.log(num); // undefined.

console.log(sum(1,2)); 

// 매개변수 많아도 정의된 함수의 매개변수 만큼만 계산해서 반환.
console.log(sum(1,2,3)); 
// 매개변수 적어도 그것만 가지고 계산 후 반환. 근데 NaN (Not a Number)반환 => 1 + undefined (오류는 아님)
console.log(sum(1));  



// sum()(NaN) + sum(2,3)(Number) = NaN
console.log(sum() + sum(2,3));
// => 그래서 함수 매개변수에서 초기값 설정해주거나, (function sum(num1 = 0, num2 = 0) {})
// => 함수 내에서 유효성 검사 해주면 됨 
/*
boolean: 0, null, undefined, '' => false
   function sum(num1, num2) {
    if (!num1 && !num2) {
        return num1 + num2;
    } else {
        return 0;
    }
    }*/

let ddd = null;
console.log(ddd);

// 같은 함수 2번 선언 ㄴㄴ. 근데 뭐 덮어쓰기는 가능
/*let*/ sum = function (num1, num2) {
    return num1 + num2;
}


let showInfo = function (name) {
    return `안녕하세요. ${name}님.`;
}

console.log(showInfo('전성하'));

// 함수를 변수에 담기.
let welcome = showInfo;
console.log(welcome('함수명 바꿈'));

let members = ['노은경', '이준의', '정민선'];
for (let member of members) {
    console.log(welcome(member));
}




/* ※ let과 var 그리고 const 
var는 전역변수이면서 호이스팅(위로 끌어올림)을 한다.
그래서 어떠한 스코프 안에 선언되어 있어도, 스코프 밖에서 사용이 된다.
그리고 아래쪽에서 선언을 하고 초기화를 해둬도 위에서 사용은 할 수 있다. 하지만 값은 default로 되어있다.
그냥 존재만 감지한다.

하지만 let은 전역변수는 아니다. 그래서 스코프 안에 있는 것을 밖에서는 못 쓴다.
물론 전역변수화하는 걸로 만들 수는 있다.

const는 그냥 상수. final이다. 한번 값 들어가면 변경불가.
*/