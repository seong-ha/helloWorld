const members = [
    {id: 'user1', name: '양세윤', score: 100, phone: '010-123-123', gender: 'M'},
    {id: 'user2', name: '문세찬', score: 70, phone: '010-234-234', gender: 'W'},
    {id: 'user3', name: '양세형', score: 25, phone: '010-345-345', gender: 'M'},
    {id: 'user4', name: '문천식', score: 12, phone: '010-456-456', gender: 'W'}
];


/* // for 반복문. 배열메소드(forEach)
        members.forEach(function (val, idx, arr) { // (val, index, array)
            console.log(val);
        });

 => 만약에 코드 길면 함수를 따로 빼서 하면 됨.
        members.forEach(callBackFnc);
        function callBackFnc (val, ind, ary) {
            console.log(val);
        }
*/

let str = '<table border="1">';
str += makeHd();

members.forEach(function (val, idx, arr) { // (val, index, array)

    if (val.gender == 'M') {
        str += makeTr(val, 'blue');
    } else {
        str += makeTr(val, 'red');
    }

});

str += '</table>'
document.write(str);

function makeTr(mem={}, color) {
    let tr = `<tr style="color: ${color};">`;
    
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