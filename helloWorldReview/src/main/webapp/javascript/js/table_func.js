const members = [
    {id: 'user1', name: '전성하', score: 100, phone: '010-010-010'},
    {id: 'user2', name: '백진희', score: 90, phone: '011-011-011'},
    {id: 'user3', name: '김아현', score: 80, phone: '012-012-012'}
];

function makeTr(member={}) {
    let tr = '<tr>';
    for (let prop in member) {
        tr += `<td>${member[prop]}</td>`;
    }
    tr += '</tr>';
    return tr;
}

function makeHd() {
    let tr = '<tr>';
    let columns = ['id', 'name', 'score', 'phone'];
    for (let col of columns) {
        tr += `<th>${col}</th>`
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
document.write(str)

