
let items = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde quo voluptatem, exercitationem officiis nesciunt facere reiciendis, officia alias doloremque esse expedita inventore minus laboriosam sed provident dolor pariatur similique excepturi.';

let body = document.querySelector('body'); // body태그 찾아서 변수에 할당
let div = document.createElement('div');  // div태그 찾아서 생성
body.append(div)  // body태그 자식요소로 붙임.

let words = items.split(' ');
words.forEach(word => {
    let span = document.createElement('span'); // <span></span>
    span.innerText = word;
    
    div.append(span);
});

let input = document.createElement('input'); // input태그 찾아서 생성
let button = document.createElement('button');  // button태그 찾아서 생성
button.innerText = '찾기';
button.onclick = function() {
    // 버튼을 클릭하면...
    let findWord = input.value;
    let spans = document.querySelectorAll('span');
    // console.log(spans);

    spans.forEach(function (span) {
        // <span>Lorem,</span>   <span>ipsum</span>
        // 입력값과 같은 거 지워주고 input란 비워주기.
        if (findWord == span.innerText) {
            span.remove();
            document.querySelector('input').value = '';
        }
    })
}
document.querySelector('div').after(input, button); // div태그 찾아서 그 다음에 놓음.