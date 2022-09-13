// mysource.js

document.addEventListener('DOMContentLoaded', function () {
    showBoard();

    let addBtn = this.getElementById('addBtn');
    addBtn.addEventListener('click', addBoard);

    let delBtn = document.getElementById('delBtn');
    delBtn.addEventListener('click', delBoards)

    let allchk = document.querySelector('thead>tr>th>input');
    allchk.addEventListener('change', allchecked);
})

function showBoard() {
    // 조회 관련 ajax
    fetch('./board')
        .then(result => result.json())
        .then(printTable)
        .catch(error => console.error(error));
}

function printTable(result) {
    let boards = result;

    let tbody = document.getElementById('list');

    boards.forEach(board => {
        let tr = makeTr(board);
        tbody.append(tr);
    });
}

function makeTr(board) {
    let tr = document.createElement('tr');

    let chkbox = document.createElement('input');
    chkbox.setAttribute('type', 'checkbox');

    chkbox.addEventListener('change', function() {
        let checkProp = document.querySelectorAll('tbody input[type="checkbox"]');
        document.querySelector('thead>tr>th>input').checked = [...checkProp].every(item => item.checked);
    })
    
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

    btn.addEventListener('click', deleteBoard);
    let txd = document.createTextNode('삭제');
    btn.appendChild(txd);
    td.appendChild(btn);
    tr.appendChild(td);

    return tr;
}

function addBoard() {
    let title = document.getElementById('title').value;
    let content = document.getElementById('content').value;
    let writer = document.getElementById('writer').value;

    let param = 'title=' + title + '&content=' + content + '&writer=' + writer + '&job=insert';

    // 등록 관련 ajax
    fetch('./board', {
        method: 'POST',
        headers: {'Content-type': 'application/x-www-form-urlencoded'},
        body: param
      })
      .then(result => result.json())
      .then(addBoardCallback)
      .catch(error => console.error(error));

}

function addBoardCallback(result) {

    if (result.returnCode == 'success') {
        let tbody = document.getElementById('list');
        let tr = makeTr(result);
        tbody.append(tr);
    } else if (result.returnCode == 'fail') {
        alert('처리 중 에러 발생');
    }
    
}

function deleteBoard() {
    let targetTr = this.parentElement.parentElement;
    let targetBno = targetTr.children[1].textContent;

    // 삭제 관련 ajax
    fetch('./board', {
        method: 'POST',
        headers: {'Content-type': 'application/x-www-form-urlencoded'},
        body: 'bno=' + targetBno + '&job=delete'
      })
      .then(result => result.text())
      .then(result => {
          console.log(result);
        if (result == 'success') {
            targetTr.remove();
          } else {
            alert('처리 중 에러발생!');
          }
      })
      .catch(error => console.error(error));
}

function delBoards() {
    
    let chkboxs = document.querySelectorAll('#list input[type="checkbox"]');
    
    let checkedTrs = [];	// 체크된 input의 tr들(tr 삭제할 때 사용하려고)
    let checkedBnos = [];	// 체크된 input의 td 옆동네 td에 사는 bno 값들.(bno 뽑아내려고)

    chkboxs.forEach(chkbox => {
        if (chkbox.checked) {
            checkedTrs.push(chkbox.parentElement.parentElement);
            checkedBnos.push(chkbox.parentElement.nextSibling.textContent);
        }
    })

    let bnosStr = checkedBnos.join(',');	// [1, 3, 5, 6, ...] => 1,3,5,6,... 

    // 체크된것들 삭제 관련 ajax
    fetch('./board', {
        method: 'POST',
        headers: {'Content-type': 'application/x-www-form-urlencoded'},
        body: 'bno=' + bnosStr + '&job=delete'
      })
      .then(result => result.text())
      .then(result => {
          console.log(result);
        if (result == 'success') {
            checkedTrs.forEach(tr => {
                tr.remove();
            })
          } else {
            alert('처리 중 에러발생!');
          }
      })
      .catch(error => console.error(error));
}

function allchecked() {

    let chks = document.querySelectorAll('tbody input[type="checkbox"]');

    chks.forEach(chk => {
        chk.checked = this.checked;
    })
}