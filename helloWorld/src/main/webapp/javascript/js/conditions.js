

// 함수도(정의) 매개값으로 받아올 수 있다.
// 즉, 함수를 매개값으로 받는 함수
function callFunc(fnc) {
    let name = 'Jeon';
    fnc(name);
}

//          =========

// function welcomeFnc(param) {
//     console.log('Welcome, ' + param);
// }

let welcomeFnc = function (param) {
    console.log('Welcome, ' + param);
}

//          =========

// function helloFnc(param) {
//     console.log('Hello, ' + param);
// }

// let helloFnc = function (param) {
//     console.log('Hello, ' + param);
// }

// 화살표 함수 =>
let helloFnc = param => console.log('Hello ' + param);

//=====결과=============

callFunc(welcomeFnc);
callFunc(helloFnc);





// ===========================================================================

const members = [
    {id: 'user1', name: '양세윤', score: 100, phone: '010-123-123', gender: 'M'},
    {id: 'user2', name: '문세찬', score: 70, phone: '010-234-234', gender: 'W'},
    {id: 'user3', name: '양세형', score: 25, phone: '010-345-345', gender: 'M'},
    {id: 'user4', name: '문천식', score: 12, phone: '010-456-456', gender: 'W'}
];

const passMember = [];
for (let i = 0; i < members.length; i++){
    if (members[i].score > 60) {
        console.log('이름: ' + members[i].name);
        passMember[passMember.length] = members[i].name;
    }
}
console.log(passMember);


const women = [];
for (let member of members) {
    if (member.gender == 'W') {
        women[women.length] = member.name;
    }
}
console.log(women);


//   =============== 졸리니깐 이전에 했던 표 형식으로 긔긔해보세요. ===============
/*
<규칙>
성별: 남자 = 파란색 글씨,
      여자 = 빨간색 글씨

makeTr(파란색, 빨간색) / makeBlueTr(), makeRedTr()
*/

let str = '<table border="1">';

str += makeHd();
for (let member of members) {
   str += makeTr(member);
}

str += '</table>'
document.write(str);


function makeTr(mem={}) {
    let tr = '<tr ';
    
    if (mem.gender == 'M') {
        tr += 'style="color: blue;">';
    } else {
        tr += 'style="color: red;">';
    }
    
    for (let prop in mem) {
        tr += `<td>${mem[prop]}</td>`;
    }
    
    tr += '</tr>';
    return tr;
}

function makeHd() {
    let titles = ['아이디', '이름', '점수', '연락처', '성별'];
    let tr = '<tr>';

    for (let title of titles) {
        tr += `<th>${title}</th>`;
    }
    
    tr += '</tr>';
    return tr;
}
