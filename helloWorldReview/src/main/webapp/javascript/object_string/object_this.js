let obj = {};

console.log(this);

obj.act = function() {
    this.value = 'default value';

    function innerAct() {
        this.value = 'innerAct value';
        console.log('innerAct: ' + this.value);
    }

    function innerReact(caller) {
        caller.value = 'innerReact value';
        console.log('this.value: ' + this.value);
        console.log('caller.value: ' + caller.value);
    }

    innerAct();
    console.log('obj객체의 this.value: ' + this.value);

    innerReact(this);
    console.log('obj객체의 this.value: ' + this.value);
}

// obj.act();
// 전역객체. innerAct value
// obj객체. default value

// 전역객체. innerAct value
// obj객체. innerReact value
// obj객체. innerReact value


let btn = document.createElement('button');
btn.innerHTML = '클릭';
btn.onclick = function() {
    console.log(this);
}
document.querySelector('body').append(btn);