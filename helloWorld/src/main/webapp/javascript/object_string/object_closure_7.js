
// 1. 함수는 변수에 대입 가능
let fnc = function() {
    console.log('함수 호출!!');
}

// 2. 메서드의 매개값으로 대입 가능
let num = [1,2,3];
num.forEach(function (val) {
    console.log(val);
});

// 3. 결과 값으로 함수 반환도 가능
function outerFunc(name) {
    let saying = name + ' 안녕!!';

    return function ()  {
        return saying;
    }
}

let closure1 = outerFunc('고길동동'); // 함수를 반환
console.log(closure1);
console.log(closure1());    // 반환한 그 함수 안의 변수를 기억하고 실행



// closure 사용예.   cnt를 밖으로 빼면 축적되는데 값이 노출되-면 안된다. 그래서 함수 안에다가 선언한다.
function initCnt() {
    let cnt = 10;

    return function addCnt() {
        cnt++;
        console.log(cnt);
    }

    // addCnt();
}

let plusCnt = initCnt();
plusCnt();
plusCnt();
plusCnt();