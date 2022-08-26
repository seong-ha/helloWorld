const members = [
    {id: 'user1', name: '양세윤', score: 100, phone: '010-123-123', gender: 'M'},
    {id: 'user2', name: '문세찬', score: 70, phone: '010-234-234', gender: 'W'},
    {id: 'user3', name: '양세형', score: 25, phone: '010-345-345', gender: 'M'},
    {id: 'user4', name: '문천식', score: 12, phone: '010-456-456', gender: 'W'}
];

function makeTr(member = {}, color) {
    let tr = `<tr style="color: ${color}; text-align: center;">`;

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

members.forEach((val) => {
    if (val.gender == 'M') {
        str += makeTr(val, 'blue');
    } else {
        str += makeTr(val, 'red');
    }
})
str += '</table>';
document.write(str);