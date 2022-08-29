// 함수 선언식
myFunc('World!'); // argument  
myFunc('welcome ', 'home');

// 함수는 호이스팅 됨.
function myFunc(param) { //  parameter
    console.log('Hello ' + param);
}

function myFunc2(param1, param2) {
    console.log(param1 + param2);
}



// 함수 표현식.
let myFunc3 = function (param) {
    document.write('<p>Hello, ' + param + '</p>');
}

myFunc3('전성하');

let myFunc4 = myFunc3;
myFunc4('월드');

function mySum(n1 = 0, n2 = 0) {
    console.log(arguments);
    /* arguments : 매개변수로 들어온 것들을 관리해주는 객체
                                (선언된 매개변수보다 전달인자가 많이 들어와도 다 받아줌.) */
    // console.log(n1 + n2);
    let sum = 0;
    for (let num of arguments) {
        sum += num;
    }
    console.log(sum);
}

mySum(1, 3, 3, 4);
mySum();


// 화살표 함수
function mySum5(a, b) {
    console.log(a + b);
}

// forEach메소드의 매개값으로 화살표 함수를 사용.
['Hello', 'World'].forEach((val, idx) => console.log(val, idx));

setTimeout((a, b) => {
    console.log(a)
}, 2000); // 2초 뒤에 저 함수를 실행해주는 함수