let str1 = 'Hello';
let str2 = new String('Hello');

console.log('str1 == str2: ' + (str1 == str2));
console.log('str1 === str2: ' + (str1 === str2));

let num1 = 20;
let num2 = new Number(20);

console.log('num1 == num2: ' + (num1 == num2)); // 값을 비교 (==)
console.log('num1 === num2: ' + (num1 === num2)); // 값과 타입을 비교. (===)

let obj;
obj = null;

let sym1 = Symbol('symbol');
let sym2 = Symbol('symbol');
console.log('sym == sym2: ' + (sym1 == sym2));
console.log(sym2);

let ss;
ss = 1;
console.log(ss);

obj = {
    sname: 'Jeon',
    age: 30,
    showAge: function () {
        console.log('나이는 ' + this.age + '입니다.');
    }
};

console.log(obj.sname);
console.log(obj['sname']);
obj.showAge();

obj.sname = 'Hwang';
console.log(obj['sname']);

let numbers = [];
numbers[numbers.length] = 10;
numbers[numbers.length] = 20;
numbers[numbers.length] = 30;

numbers.forEach(function (val) {
    console.log(val);
})


const randomVals = [];
for (let i = 0; i < 5; i++) {
    let val = Math.ceil(Math.random() * 10);
    randomVals[i] = val;
}

randomVals.forEach(val => {
    if (val > 5) console.log('5보다 큰 val: ' + val);
});

randomVals.splice(0, randomVals.length);

for (let i = 0; i < 5; i++) {
    randomVals[i] = Math.floor(Math.random() * 30) + 21;
}
console.log(randomVals);

randomVals.forEach(showEven);
function showEven(val) {
    if (val % 2 == 0) {
        console.log('21과 50사이 짝수(콜백함수로)' + val);
    }
}



console.log('3' + 4); // 34    +연산자
console.log('3' * 4); // 숫자 형변환 후 곱해줌(나머지연산자들은 본래기능 수행)

console.log(-'3' + 4);  // 1

console.log(typeof (3).toString());  // 3 -> '3'   문자열로 변환 toString()


console.log(Math.abs(-120));
console.log(Math.sign(-21));

console.log(3 / '5');
console.log(3 / 'five');
console.log(1 / 0);
console.log(-1 / 0);