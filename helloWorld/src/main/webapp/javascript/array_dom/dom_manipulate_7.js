/*
element 생성: createElement()
textNode 생성: createTextNode()
부모-자식 관계 형성: appendChild()

*/

// form태그부터 만들어볼까요오
let frm = document.createElement('form');
frm.setAttribute('action', 'addMember.jsp');
frm.setAttribute('method', 'post');

// 자식 요소

    // label
let idLabel = document.createElement('label');
idLabel.setAttribute('for', 'user_id');
idLabel.innerText = '사용자아이디';

let pwLabel = document.createElement('label');
pwLabel.setAttribute('for', 'user_pw');
pwLabel.innerText = '비밀번호';

    // input
let idInput = document.createElement('input');
idInput.setAttribute('type', 'text');
idInput.setAttribute('name', 'user_id');
idInput.setAttribute('id', 'user_id');

let pwInput = document.createElement('input');
pwInput.setAttribute('type', 'password');
pwInput.setAttribute('name', 'user_pw');
pwInput.setAttribute('id', 'user_pw');
pwInput.setAttribute('placeholder', '8자이상입력하셈');

    // button
let btn = document.createElement('button');
btn.innerText = '버튼';

// 부모-자식 형성.(frm - [label, input, button])
frm.appendChild(idLabel);
frm.appendChild(idInput);
frm.appendChild(pwLabel);
frm.appendChild(pwInput);
frm.appendChild(btn);

console.log(frm);

// div#show의 자식요소로 지정.
document.getElementById('show').appendChild(frm);