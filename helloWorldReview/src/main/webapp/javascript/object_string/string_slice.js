let str = 'Good, Morning!';

console.log(str.slice(2,7));
console.log(str.slice(2,-2));
console.log(str.slice(-2));

console.log(str.substring(0,7));

console.log(str.indexOf('orn'));

console.log(str.indexOf(',', 0));
console.log(str.indexOf(', ', 9));


const members = [
    {name: '황병걸', age: 25},
    {name: '김효인', age: 22},
    {name: '이상욱', age: 18},
    {name: '최근석', age: 29}
]

let searchKey = prompt('찾을 이름 입력');
let searched = 0;

members.forEach((val, idx) => {
    if (val.name.indexOf(searchKey) != -1) {
        console.log(`${val.name}의 나이는 ${val.age}살입니다.`);
        searched++;
    }

    if (idx == members.length -1 && searched == 0) {
        console.log('해당 이름의 객체가 없습니다.')
    }
})