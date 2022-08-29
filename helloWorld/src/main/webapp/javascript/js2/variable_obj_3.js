
let strArr = [];

for (let i = 0; i < 10; i ++) {
    strArr[i] = 'i' + i;
}


//  배열 for .. of
for (let str of strArr) {
    console.log(str);
}


// 객체 for .. in
let obj = {
    fname: '길동',
    lname: '홍',
    age: 20,
    fullName: function() {
        return this.lname + ' ' + this.fname;
    }
}

for (let prop in obj) {
    console.log(prop, obj[prop]); // 속성명 속성값       obj.prop => obj의 prop속성. 없음. 오류
}



// 배열 [{객체}, {객체}, {객체}]
let members = [
    {id: 'user1', name: '사용자1'},
    {id: 'user2', name: '사용자2'},
    {id: 'user3', name: '사용자3'}
];

let str = '<table border="1">';
str += '<caption>for .. of로 만듦</caption>';
str += '<tr style="background-color: aquamarine"><th style="padding: 7px;">ID</th>'
    +'<th style="padding: 7px;">이름</th><th style="padding: 7px;">버튼</th></tr>';

for (let member of members) {
    str += '<tr style="background-color: aliceblue">';
    for (let prop in member) {
        str += `<td style="padding: 7px; font-weight: bold;">${member[prop]}</td>`;
        console.log(prop, member[prop]);
    }
    str += '<td><button>버튼</button></td>';
    str += '</tr>';
    console.log('=== 다음(prop, member[prop]) ===')
}

str += '</table>';
document.write(str);



// forEach()
str = '<table border="1">';
str += '<caption>forEach로 만듦</caption>';

members.forEach(createTable);

function createTable(val, idx) {
    if (idx == 0) {
        str += '<tr style="background-color: aquamarine">';
        for (let prop in val) {
            str += `<th style="padding: 7px;">${prop}</th>`
        }
        str += '<th style="padding: 7px;">버튼</th>';
        str += '</tr>';
    }

    str += '<tr style="background-color: aliceblue">';
    for (let prop in val) {
        str += `<td style="padding: 7px; font-weight: bold;">${val[prop]}</td>`;
    }
    str += '<td><button onclick="alertName(event)">버튼</button></td>';
    str += '</tr>';
}

str += '</table>';
document.write(str);

function alertName(e) {
    e.target.parentElement.parentElement.style.color = 'yellow';
    e.target.parentElement.parentElement.remove();
    // console.log(e.target.parentElement.parentElement.style.color = 'yellow');
    // window.alert(e);
}