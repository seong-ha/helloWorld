var a = 1;
var b = 5;

outerFunc();

function outerFunc() {
    function innerFunc() {
        a = b;
    }
    console.log(a); // 1
    a = 2;
    b = 4;
    console.log(b); // 4
    innerFunc();
    console.log(a); // 4
    var b = 2;
    console.log(b); // 2
}
console.log(b); // 5

const arr = [];

arr.push(10);
arr.push(20);

let obj = {
    sname: 'Hong',
    
}