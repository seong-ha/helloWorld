let addBtn = document.querySelector('button');

addBtn.onclick = function () { // 속성이오면 속성이되고 함수가 오면 함수가 된다.

    let mid = document.getElementById('mid');
    let mname = document.getElementById('mname');
    let mphone = document.getElementById('mphone');

    // 저장 값이 없으면 warning 후 return
    if (!mid.value) {
        alert('id 값을 입력해야지..')
            mid.focus();
            return;
        } else if (!mname.value) {
            alert('이름 값을 입력해야지..')
            mname.focus();
            return;
        } else if (!mphone.value) {
            alert('연락처 값을 입력해야지..')
            mphone.focus();
            return;
        }

    // console.log(mid.value, mname.value, mphone.value);
    const mvalues = [mid.value, mname.value, mphone.value];

    let tr = document.createElement('tr'); // tr 만들고
    mvalues.forEach(mval => {
        /*
        id, name, phone 각각각 td만들고
        그아래 txd 만들어서 td 자식으로 넣어주고
        td를 tr자식으로 넣어준다.
        */
        let td = document.createElement('td');
        let txd = document.createTextNode(mval);
        td.appendChild(txd);
        tr.appendChild(td);
    })
    document.getElementById('list').appendChild(tr);

    // 초기화 하고 첫 input태그에 커서.
    mid.value = '';
    mname.value = '';
    mphone.value = '';
    mid.focus();

    // let tr = document.createElement('tr');
    // let td = document.createElement('td'); // id위치
    // let txd = document.createTextNode(mid.value);
    // td.appendChild(txd);
    // tr.appendChild(td);

    // document.getElementById('list').appendChild(tr);

    // tr = document.createElement('tr');
    // td = document.createElement('td'); // id위치
    // txd = document.createTextNode(mname.value);
    // td.appendChild(txd);
    // tr.appendChild(td);

    // document.getElementById('list').appendChild(tr);

    // tr = document.createElement('tr');
    // td = document.createElement('td'); // id위치
    // txd = document.createTextNode(mphone.value);
    // td.appendChild(txd);
    // tr.appendChild(td);

    // document.getElementById('list').appendChild(tr);
}