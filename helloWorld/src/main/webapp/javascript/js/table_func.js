
// 상수
const members = [
    {id: 'user1', name: '양세윤', score: 100, phone: 010-123-123},
    {id: 'user2', name: '문세찬', score: 50, phone: 010-234-234},
    {id: 'user3', name: '양세형', score: 25, phone: 010-345-345}
];

// members = ''; 상수는 값 변경 불가.

let str = '<table border="1">';

// --------------------------------------------그냥 Ver


// str += '<tr><th>아이디</th><th>이름</th><th>점수</th></tr>';

// for (member of members) {
    //     str += '<tr>';
    //     str += `<td>${member.id}</td><td>${member.name}</td><td>${member.score}</td>`
    //     str += '</tr>';
    // }

// --------------------------------------------함수 Ver

function makeTr(mem={}) {
    let tr = '<tr>';
    for (let prop in mem) {
        tr += `<td>${mem[prop]}</td>`;
    }
    tr += '<td><button>확인</button></td>';
    tr += '</tr>';
    return tr;
}

function makeHd() {
    let titles = ['아이디', '이름', '점수', '연락처', '확인'];
    let tr = '<tr>';

    for (let title of titles) {
        tr += `<th>${title}</th>`;
    }
    
    tr += '</tr>';
    return tr;
}


str += makeHd();
for (member of members) {
    str += makeTr(member);
}

// ---------------------------------------  마무으리

str += '</table>'
document.write(str);