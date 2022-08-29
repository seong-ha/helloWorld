myFunc('world');
myFunc2('welcome', 'home');

function myFunc(param) {
    console.log('Hello ' + param);
}

function myFunc2(param1, param2) {
    console.log(param1 + ' ' + param2);
}


let myFunc3 = function (param) {
    document.write('<p>Hello, ' + param + '</p>');
}

myFunc3('전성하');

let myFunc4 = myFunc3;
myFunc4('sweetie');


function mySum(n1 = 0, n2 = 0) {
    console.log(arguments);
    let sum = 0;
    for (let num of arguments) {
        sum += num;
    }
    console.log(sum);
};

mySum(1, 3, 4, 5);

function mySym5(a, b) {
    console.log(a + b);
}