let numbers = [12, 33, 14, 52, 77, 55, 16];
// 1) 짝수합 => result.
//   홀수번째합
//   30보다 큰 값만

let result = 0;
let oddth = 0;
let biggerThan30 = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i]%2 == 0) {
        result += numbers[i];
    }

    if (i % 2 != 0) {
        oddth += numbers[i];
    }

    if (numbers[i] > 30) {
        biggerThan30 += numbers[i];
    }
}

console.log('짝수합: ' + result);
console.log('홀수번째 합: ' + oddth);
console.log('30보다 큰 수의 합: ' + biggerThan30);


// 2) 30보다 큰 수의h
// 2) forEach



let result2 = 0;
let oddth2 = 0;
let biggerThan302 = 0;

numbers.forEach((val, idx) => {
    if (val % 2 == 0) {
        result2 += val;
    }
    if (idx%2 != 0) {
        oddth2 += val;
    }

    if (val > 30) {
        biggerThan302 += val;
    }
});

console.log('forEach 짝수합: ' + result2);
console.log('forEach 홀수번째 합: ' + oddth2);
console.log('forEach 30보다 큰 수의 합: ' + biggerThan302);
