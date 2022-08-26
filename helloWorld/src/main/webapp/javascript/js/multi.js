// 구구단 출력

let str = '';
// for (let i = 2; i < 10; i++) {
//     for (let j = 1; j < 10; j++) {
//         console.log(i + ' × ' + j + ' = ' + (i*j));
//         // str += '<p>' + i + ' × ' + j + ' = ' + (i*j) + '</p>';
//         str += `<p>${i} × ${j} = ${i*j} </p>`;
//     }
// }
// document.write(str);

let num = 30;
console.log(`num의 값은 ${num} 입니다.`)

// `` 안에서 ${}에 담긴 변수는 값을 반환. 나머지는 잇는 그대로 출력 


// 구구단 함수 정의
function gugudan(numb) {
    let num = numb;
    for (let j = 1; j < 10; j++) {
        // str += '<p>' + i + ' × ' + j + ' = ' + (i*j) + '</p>';
        str += `<p>${num} × ${j} = ${num*j} </p>`;
    }
    return str;
}

// 8단 받아와서 넣기
let result = gugudan(8);
// document에 출력
document.write(result);