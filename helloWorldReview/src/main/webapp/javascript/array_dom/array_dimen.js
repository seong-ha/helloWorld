const members = [
    ['홍길동', 20],
    ['김익수', 25],
    ['손봉호', 23]
];
let objMembers = [];
members.forEach(member => {
    let obj = {
        name: member[0],
        age: member[1]
    };

    objMembers.push(obj);
});
console.log(objMembers);

let arrMembers = [];
objMembers.forEach(member => {
    let arr = [member.name, member.age];

    arrMembers.push(arr);
})

console.log(arrMembers);