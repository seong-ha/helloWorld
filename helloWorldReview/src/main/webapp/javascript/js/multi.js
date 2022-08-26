
let num = 30;
console.log(`num의 값은 ${num} 입니다.`);

let str = '';
function guguDan(number) {
    let num = number;
    for (let i = 1; i < 10; i++) {
        str += `<p>${num} × ${i} = ${num * i}</p>`;
    }

    return str;
}

let result = guguDan(3);
document.write(result);

