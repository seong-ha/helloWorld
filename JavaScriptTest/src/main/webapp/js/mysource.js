// mysource.js

document.addEventListener('DOMContentLoaded', function () {
    showBoard();
    let addBtn = document.querySelector('button');
    addBtn.addEventListener('click', addBoard);

})

function showBoard() {
    let getAjax = new XMLHttpRequest();
    getAjax.open('get', './board');
    getAjax.send();
    getAjax.onload = function () {
        let boards = JSON.parse(getAjax.response);
        console.log(boards);

        let tbody = document.getElementById('list');

        boards.forEach(board => {
            let tr = makeTr(board);
            tbody.append(tr);
        });
    };
}

function makeTr(board) {
    let tr = document.createElement('tr');

    let chkbox = document.createElement('input');
    chkbox.setAttribute('type', 'checkbox');
    let chktd = document.createElement('td');
    chktd.appendChild(chkbox);
    tr.appendChild(chktd);


    for (let prop in board) {
        if (board[prop] != 'success') {
            let td = document.createElement('td');
            let txd = document.createTextNode(board[prop]);
            td.appendChild(txd);
            tr.appendChild(td);
        }
    }

    // 삭제 버튼 추가
    let td = document.createElement('td');
    let btn = document.createElement('button');
    let txd = document.createTextNode('삭제');
    btn.appendChild(txd);
    td.appendChild(btn);
    tr.appendChild(td);

    return tr;
}

function addBoard() {
    let bno = document.getElementById('bno').value;
    let title = document.getElementById('title').value;
    let content = document.getElementById('content').value;
    let writer = document.getElementById('writer').value;
    let now = new Date();
    let createDate = now.getFullYear() + '-' +  `0${now.getMonth()}`.slice(-2) + '-' + `0${now.getDate()}`.slice(-2);

    let param = 'bno=' + bno + '&title=' + title + '&content=' + content + '&writer=' + writer + '&creation_date=' + createDate + '&job=insert';
    console.log(param);

    // 등록하는 서블릿 호출
    let addAjax = new XMLHttpRequest();
    addAjax.open('post', './board');
    addAjax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    addAjax.send(param);
    addAjax.onload = addBoardCallback;
}

function addBoardCallback() {
    console.log(this.response);
    let result = JSON.parse(this.response);
    console.log(result);

    if (result.returnCode == 'success') {
        let tbody = document.getElementById('list');
        let tr = makeTr(result);
        tbody.append(tr);
    } else if (result.returnCode == 'fail') {
        alert('처리 중 에러 발생');
    }
}