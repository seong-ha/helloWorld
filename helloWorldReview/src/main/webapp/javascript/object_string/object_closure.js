let fnc = function() {
    console.log('함수 호출!!');
}

let num = [1,2,3];
num.forEach(val => console.log(val));

function outerFunc(name) {
    let saying = name + '안녕!!';

    return function () {
        return saying;
    }
}

let closure1 = outerFunc('전서앟');
console.log(closure1);
console.log(closure1());


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
plusCnt();
plusCnt();