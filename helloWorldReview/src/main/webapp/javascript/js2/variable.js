
let fname = 'Hong';
fname = 'Hwang';
console.log(fname);

const PI = 3.14;
// PI = 2.14;

console.log(age);
var age = 20;

function localFnc() {
    var age = 30;
    // age = 35;
    console.log(age);

    let fname = 'Kim';
    console.log('localFnc: fname = ' + fname);
}

localFnc();
console.log(age);

{
    let fname = 'Park';
    console.log(fname);
    var age = 22;
    console.log(age);
}

console.log(age);

console.log(this.age);
console.log(this.fname);