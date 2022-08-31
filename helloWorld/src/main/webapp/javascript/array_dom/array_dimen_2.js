
const members = [
    ['홍길동', 20],
    ['김익수', 25],
    ['손봉호', 23]
];

members.push(['전성하', 30]);
members[0][1] = 21;

console.table(members);         // ㅗㅜㅑ 이렇게 좋은 것이 있었다니..

members.forEach(member => {
    console.log(`이름: ${member[0]}, 나이: ${member[1]}`); // 배열 속 배열을 출력.
});




// =========================================================================


 
/*
<<< 실습1 >>>
 
    배열 안의 "배열"들을(members) -> 배열 안의 "객체"들로(objMembers) 만들기.

    결과:const objMembers = [
            {name: '홍길동', age: 21},
            {name: '김익수', age: 25},
            {name: '손봉호', age: 23},
            {name: '전성하', age: 30}
        ];
*/

const objMembers = [];

members.forEach(member => {
    // objMembers.push({name: member[0], age: member[1]});   내가 한거

    // 교수님이 한거
    let obj = { 
        name: member[0],
        age: member[1]
    };
    objMembers.push(obj);

});

console.log(objMembers);



// =========================================================================

 

/*
<<< 실습2 >>>
 
    다시, 배열 안의 "객체"들을(objMembers) -> 배열 안의 "배열"들로(arrMembers) 만들기.

    결과:const objMembers = [
            ['홍길동', 21],
            ['김익수', 25],
            ['손봉호', 23],
            ['전성하', 30]
        ];
*/

const arrMembers = [];

objMembers.forEach(member => {
    let arr = [member.name, member.age];
    arrMembers.push(arr);
})

console.log(arrMembers);