const members = [
    {mid: 'admin', mname: '관리자', mphone: '010-1111-2222'},
    {mid: 'hongc', mname: '홍철', mphone: '010-2222-3333'},
    {mid: 'parkgr', mname: '박규림', mphone: '010-3333-4444'}
];


// addEventListener(이벤트방식, 이벤트핸들러, 버블링(default) or 캡쳐링)
//                                             하위->상위    상위->하위
// dom이 다 그려진 다음에 실행해라.(이벤트등록메서드)
document.addEventListener('DOMContentLoaded', function () {

    // 먼저 멤버들 보여주기.
    showMember();
    // 등록버튼 이벤트
    let addBtn = document.querySelector('button');
    // addBtn.onclick = function () { // 속성이오면 속성이되고 함수가 오면 함수가 된다.
    addBtn.addEventListener('click', addMember);


    let findBtn = document.getElementById('findMember');
    findBtn.addEventListener('click', findMember);

    let chkbox = document.getElementById('allChecked');
    chkbox.addEventListener('change', allchecked);
});

function showMember() {
    let table = document.getElementById('list');
    members.forEach(member => {
        /*
        let mValueArr =[];
        for (let prop in member) {
            mValueArr.push(member[prop]);
        }
        */

        /*
        위에꺼를 한번에 해주는 신기한 메서드(객체의 키나 값을 배열로 만들어줌.)
        Object.values(member): [값, 값, ..] | Object.keys(member): [속성, 속성, ..]
        */
        let mValueArr = Object.values(member);

        let tr = makeTr(mValueArr);
        table.appendChild(tr);
    })
};

function addMember() {
    let mid = document.getElementById('mid');
    let mname = document.getElementById('mname');
    let mphone = document.getElementById('mphone');

    // 저장 값이 없으면 warning 후 return
    if (!mid.value || !mname.value || !mphone.value) {
        alert('필수 값을 입력하세요.')

        if (!mid.value) {
            mid.focus();
            return;
        } else if (!mname.value) {
            mname.focus();
            return;
        } else if (!mphone.value) {
            mphone.focus();
            return;
        }
    }

    // console.log(mid.value, mname.value, mphone.value);
    const mvalues = [mid.value, mname.value, mphone.value];

    let tr = makeTr(mvalues);
    document.getElementById('list').appendChild(tr);

    // 초기화 하고 첫 input태그에 커서.
    mid.value = '';
    mname.value = '';
    mphone.value = '';
    mid.focus();
};

function makeTr(arr) {
    let tr = document.createElement('tr'); // tr 만들고
    tr.addEventListener('click', function () {
        //firstElementChild: 자식을 태그기준으로 첫번째꺼 가져옴
        //firstChild: 자식 노드기준으로 첫번째꺼 가져옴
        // alert(this.firstElementChild.innerText); // <td>"user1"</td>
        // alert(this.firstElementChild.innerHTML); // <td>"<button>user1</button>"</td>
        // console.log(this.firstChild.innerText);

        // tr범위이다 보니, 삭제버튼 눌러도 실행됨.
        // 버블링, 캡쳐링.


        // tr 클릭하면 해당 아이디, 이름, 연락처가 위의 input태그에 찍히게 하기.
        let clkId = (this.firstElementChild.nextSibling.innerText);
        let clkName = (this.firstElementChild.nextSibling.nextSibling.innerText);
        let clkPhone = (this.firstElementChild.nextSibling.nextSibling.nextSibling.innerText);

        document.getElementById('mid').value = clkId;
        document.getElementById('mname').value = clkName;
        document.getElementById('mphone').value = clkPhone;
    })

    let chkbox = document.createElement('input');
    // tr 이벤트 발생하지 않도록
    chkbox.addEventListener('change', function(e) {
        e.stopPropagation();
    })

    // 전부 체크되어있으면 맨위에도 체크
    chkbox.addEventListener('change', function() {
        let checkProp = document.querySelectorAll('tbody input[type="checkbox"]');
        // [...checkProp]: 나머지 파라미터를 배열로 만들어줌.
        document.getElementById('allChecked').checked = [...checkProp].every(item => item.checked);
        // document.getElementById('allChecked').checked = [...checkProp].every(item => {return item.checked == true});
    })
    let chktd = document.createElement('td');
    chkbox.setAttribute('type','checkbox');
    chktd.appendChild(chkbox);
    tr.appendChild(chktd);
    

    arr.forEach(mval => {
        /*
        id, name, phone 각각각 td만들고
        그아래 txd 만들어서 td 자식으로 넣어주고
        td를 tr자식으로 넣어준다.
        */
        let td = document.createElement('td');
        let txd = document.createTextNode(mval);
        td.appendChild(txd);
        tr.appendChild(td);
    });

    // 삭제 버튼 추가
    let td = document.createElement('td');
    let btn = document.createElement('button');
    let txd = document.createTextNode('삭제');
    btn.appendChild(txd);
    td.appendChild(btn);
    tr.appendChild(td);

        // 삭제버튼 이벤트 리스너 만듦. 클릭하면 해당 row 삭제
    btn.addEventListener('click', function(e) {
        if (confirm("정말 삭제하시겠습니까??") == true){    //확인
            this.parentElement.parentElement.remove();
        }else{   //취소
            return false;
        }

        e.stopPropagation(); // 이벤트 전파 차단.
    });

    return tr;
}

// 회원찾기를 클릭했을 때 input 태그에 적힌 id와 테이블의 id가 같으면 배경색 표시.
// 그리고 수정.
function findMember() {
    let IdValue = document.getElementById('mid').value;
    let nameValue = document.getElementById('mname').value;
    let phoneValue = document.getElementById('mphone').value;

    let trs = document.getElementsByTagName('tbody')[0].children;
    trs = document.querySelectorAll('tbody>tr');
    console.log(trs)
    trs.forEach(tr => {
        tr.className = '';
    });

    trs.forEach(tr => {
        if (tr.firstElementChild.nextSibling.textContent == IdValue) {
            console.log(tr);
            tr.setAttribute('class','focus');

            // tr.firstElementChild.nextSibling.textContent = nameValue;
            // tr.firstElementChild.nextSibling.nextSibling.textContent = phoneValue;

            let childTd = tr.children;
            console.log(childTd);
            childTd[2].textContent = nameValue;
            childTd[3].textContent = phoneValue;
        }
    });
}

function allchecked() {

    let chks = document.querySelectorAll('tbody input[type="checkbox"]');

    chks.forEach(chk => {
        // 여기서 this...
        // 그냥 함수에서는 전역객체를 가리키지만, 화살표 함수에서는 이벤트 대상을 가리킨다.
        console.log(this);
        chk.checked = this.checked;
    })
}
