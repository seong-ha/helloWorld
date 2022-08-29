// 1 ~ 100 사이의 임의의 수를 생성 => 배열에 저장[5].
// 배열 값 중 최대값을 구하는 반복문 작성.


let arr = [];
for (let i = 0; i < 5; i++) {
    arr[i] = Math.floor(Math.random() * 100) + 1
}

let max = arr[0];
arr.forEach((val, idx) => {
    document.write(`<p>arr[${idx}] = ${val}</p>`);
    if (max < val) {
        max = val;
    }
});

console.log('arr 최대값: ' + max);





// 함수 스코프 체인.
var a = 1;
var b = 5;

outerFunc();

function outerFunc() {
    function innerFunc() {
        a = b;
    }
    console.log(a); // 1
    a = 2;
    b = 4;
    console.log(b);
    innerFunc();
    console.log(a); // 2 -> 4
    var b = 2;  // 호이스팅되어서 지역변수 안에서 따로 위에 선언되어짐. 그래서 위쪽에서도 4가 나옴.
    console.log(b); // 2
}
console.log(b);

