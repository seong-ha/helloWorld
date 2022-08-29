let strArr = [];

for (let i = 0; i < 10; i++) {
    strArr[i] = 'i' + i;
}

for (let str of strArr) {
    console.log(str);
}

let obj = {
    fname: '길동',
    lname: '홍',
    age: 20,
    fullName: function() {
        return this.lname + ' ' + this.fname;
    }
}

for (let prop in obj) {
    console.log(prop, obj[prop]);
}

let members = [
    {id: 'user1', name: '사용자1'},
    {id: 'user2', name: '사용자2'},
    {id: 'user3', name: '사용자3'}
];

let str = '<table border="1">';

members.forEach(makeTable);

str += '</table>';
document.write(str);


function makeTable(val, idx) {
    if (idx == 0) {
        str += '<tr>';
        for (let prop in val) {
            str += `<th>${prop}</th>`
        }
        str += '<th>버튼</th>';
        str += '</tr>';
    }

    str += '<tr>';
    for (let prop in val) {
        str += `<td>${val[prop]}</td>`;
    }
    str += '<td><button onclick="alertName(event)">버튼</button></td>';
    str += '</td>';
}

function alertName(e) {
    // e.target.parentElement.parentElement.style.color = 'yellow';
    e.target.parentElement.parentElement.remove();
}