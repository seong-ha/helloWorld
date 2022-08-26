function sum(num1, num2) {
    return num1 + num2;
}

let num;
console.log(num);
console.log(sum(1,2));
console.log(sum(1,2,3));
console.log(sum(1));
console.log(sum('난 ', '성하'));
console.log(sum('난 ', '성하 ', '최고지'));
console.log(sum('난 '));

let ddd = null;
console.log(ddd);

/* let */ sum = function (num1, num2) {
    return num1 + num2;
}

let showInfo = function (name) {
    return `안녕하세요. ${name}님`;
}

console.log(showInfo('전성하'));

let welcome = showInfo;
console.log(welcome('함수명 바꿔봤아'));

let members = ['노은경', '이준의', '정민선'];
for (let member of members) {
    console.log(welcome(member));
}