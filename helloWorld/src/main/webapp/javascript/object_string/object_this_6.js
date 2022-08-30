// 1. 객체에서 this는 객체를 가리킴.
// 2. 함수에서 this는 전역객체(window)를 가리킴.
// 3. 이벤트에서 this는 이벤트를 받는 대상을 가리킴.

let obj = {};

console.log(this); // 전역객체(window):  document라서

obj.act = function () { // 메소드
    console.log(this); // 1. obj:  객체 안이라서
    function innerAct() {
        // console.log(this); // 2. 전역객체(window):   객체 안에서 다시 함수안으로 들어와서.
        this.value = 'innerAct value';
        console.log('innerAct: ' + this.value);
    }

    this.value = 'default value';

    function innerReact(caller) {
        caller.value = 'innerReact value';
        console.log('this.value: ' + this.value);
        console.log('caller.value: ' + caller.value);
    }

    innerAct();
    console.log('obj객체의 this.value: ' + this.value);

    innerReact(this)
    console.log('obj객체의 this.value: ' + this.value);
}

obj.act();


// 이벤트
let btn = document.createElement('button'); // == <button></button>
btn.innerHTML = '클릭'; // 클릭이라는 label을 붙임.
btn.onclick = function () {
    console.log(this); // 3. 이벤트를 받는 대상을 가리킴. => btn
}

console.log(btn); // 확인해봄.
document.querySelector('body').append(btn); // body태그의 하위요소에다가 btn을 append