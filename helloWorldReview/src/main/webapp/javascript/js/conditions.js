function callFunc(fnc) {
    let name = 'Jeon';
    fnc(name);
}

// function welcomeFnc(param) {
//     console.log('welcome, ' + param);
// }

// let welcomeFnc = function (param) {
//     console.log('welcome, ' + param);
// }

let welcomeFnc = (param) => {
    console.log('welcome, ' + param);
}

callFunc(welcomeFnc);


const members = [
    {id: 'user1', name: '양세윤', score: 100, phone: '010-123-123', gender: 'M'},
    {id: 'user2', name: '문세찬', score: 70, phone: '010-234-234', gender: 'W'},
    {id: 'user3', name: '양세형', score: 25, phone: '010-345-345', gender: 'M'},
    {id: 'user4', name: '문천식', score: 12, phone: '010-456-456', gender: 'W'}
];

const passMember = [];
// for (let i = 0; i < members.length; i++) {
//     if (members[i].score > 60) {
//         console.log('이름: ' + members[i].name);
//         passMember[passMember.length] = members[i].name;
//     }
// }

for (let member of members) {
    if (member.score > 60) {
        console.log('이름: ' + member.name);
        passMember[passMember.length] = member.name;
    }
}
console.log(passMember);


const women = [];
for (let member of members) {
    if (member.gender == 'W') {
        console.log('이름: ' + member.name);
        women[women.length] = member.name;
    }
}
console.log(women);





function makeTr(member = {}) {
    let tr = '';

    if (member.gender == 'M') {
        tr += '<tr style="color: blue; text-align: center;">';
    } else {
        tr += '<tr style="color: red; text-align: center;">';
    }

    for (let prop in member) {
        tr += `<td>${member[prop]}</td>`;
    }

    tr += '</tr>';

    return tr;
}

function makeHd() {
    let tr = '<tr style="background-color: beige;">'
    let columns = ['아이디', '이름', '점수', '연락처', '성별'];
    for (let col of columns) {
        tr += `<th>${col}</th>`;
    }

    tr += '</tr>';
    return tr;
}

let str = '<table border="1">';
str += makeHd();
for (let member of members) {
    str += makeTr(member);
}
str += '</table>';
document.write(str);