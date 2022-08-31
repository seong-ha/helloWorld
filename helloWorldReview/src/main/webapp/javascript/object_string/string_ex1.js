let items = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos itaque molestias praesentium, voluptatem sunt totam molestiae? Quibusdam illum dolorum vero quasi veniam nisi enim mollitia commodi, maxime, natus odit? Deleniti?';

let body = document.querySelector('body');
let div = document.createElement('div');
body.appendChild(div);

// append와 appendChild
/*
                        append   |  appendChild
                    ----------------------------
노드객체(Node Object)|     O     |       O      |
    문자열(DOMString)|     O     |       X      |
       반환값(return)|     X     |       O      |
         다중 값 허용|     O     |       X      |
*/

let words = items.split(' ');
words.forEach(word => {
    let span = document.createElement('span');
    span.innerText = word;

    div.append(span);
});

let input = document.createElement('input');
let button = document.createElement('button');
button.innerText = '찾기';
button.onclick = function () {
    let findWord = document.querySelector('input').value;
    let spans = document.querySelectorAll('span');

    spans.forEach(val => {
        if (findWord == val.innerText) {
            val.remove();
            document.querySelector('input').value = '';
            document.querySelector('input').focus();
        }
    })
}

document.querySelector('div').after(input, button);