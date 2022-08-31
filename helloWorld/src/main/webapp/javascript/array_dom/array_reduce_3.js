
const numbers = [2, 3, 8, 5, 1];
let sum = 0;

numbers.forEach(number => {
    sum += number;
})

console.log(sum);
sum = 0;

/* 
reduce(function(누적 값, 현재인덱스의 값, 현재 인덱스, 배열전체) {
    기능
    return - 반환값은 다음 누적값의 초기값으로 됨.
}, 누적값의 초기값 설정);
*/

// 각 인덱스별 값들의 총 누적 값 도출
let result = numbers.reduce(function(acculationValue, currentValue, idx, array) {  
    console.log(acculationValue, currentValue, idx, array);
    return acculationValue + currentValue;
}, 0); // acculationValue의 초기값설정: 숫자.
console.log(result);




// ==============================================================================


 

// 각 인덱스별 값에 +2 시킨 배열 도출
result = numbers.reduce((acc, val, idx, arr) => {
    console.log(acc, val);
    acc.push(val + 2); // [4(2+2), 5(3+2), 10(8+2), 7(5+2), 3(1+2)]
    return acc;
}, []); // 누적값의 초기값은 배열
console.log('최종결과: ' + result);




// ==============================================================================



 
// 배열을 li태그로 도출 <ul><li>2</li><li>3</li><li>8</li><li>5</li><li>1</li></ul>

result = numbers.reduce((acc, val, idx) => {
    console.log(acc);

    if (idx == 0) {
        acc += '<ul>';
    }

    acc += '<li>' + val + '</li>';

    if (idx == numbers.length - 1) {
        acc += '</ul>';
    }

    return acc;
}, '') // 누적값의 초기값은 문자열

document.write(result);
console.log('최종결과: ', result);




// ==============================================================================


 

// for문으로 배열 요소의 max 값 도출.
let max = numbers[0];
for (let i = 0; i < numbers.length; i++) {
    // 제일 큰 값을 구하는 코드.
    if (numbers[i] > max) {
        max = numbers[i];
    }
}

console.log('max: ' + max);


// 위에서 한 걸 reduce()를 이용해서 도출해보기.
result = numbers.reduce((acc, val) => {
    if (acc < val) {
        acc = val;
    }
    return acc;
}, numbers[0]);

console.log('최종 결과: ' + result);


// 교수님이 한 거.
result = numbers.reduce((acc, val) => {
    return acc > val ? acc : val;
}, Number.MIN_SAFE_INTEGER /* integer최저값 */ );

console.log('교수님 최종 결과: ' + result);



// ★ reduce를 잘하면 나중에 Map, filter 안 쓰고 reduce로 다 구현할 수 있다. ★