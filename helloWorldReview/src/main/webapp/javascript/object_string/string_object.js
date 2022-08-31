let str1 = 'Hello';
let str2 = new String('Hello');

console.log(str1, str2, typeof str2, str1 == str2, str1 === str2);
console.log(str1.substring(0, 3));

console.log(str2.valueOf());
console.log(typeof str2.valueOf());

let result1 = eval('1 + 2 + 3');
console.log(result1);
let result2 = eval(new String('1 + 2 + 3'));
console.log(result2);
let result3 = eval(new String('1 + 2 + 3').valueOf());
console.log(result3);


let trimStr = '   1 23dfg12 3   ';
console.log(trimStr);
console.log(trimStr.trim());

console.log(trimStr.trimStart());
console.log(trimStr.trimEnd());


let obj = {};
let arr = {};
let regExp = /\s+$/;
new RegExp();

console.log(regExp);


String.prototype.strim = function () {
    return this.replace('s', 'S');
}

trimStr += 'aassbbss';
console.log(trimStr.strim());

// \s => 공백문자, g => 문자열 전체
String.prototype.ltrim = function () { // 문자열 앞 한개이상의 공백제거
    return this.replace(/^\s+/, '');
}

String.prototype.rtrim = function () { // 문자열 끝 한개이상의 공백제거
    return this.replace(/\s+$/, '');
}

String.prototype.alltrim = function () {
    return this.replace(/\s/g, '');
}

console.log(trimStr.ltrim());
console.log(trimStr.rtrim());
console.log(trimStr.alltrim());



trimStr = '    how are you  to  day   everyone.  ';
console.log(trimStr.trim().replace(/\s+/g, ' '));


const str = 'The quick brown fox jumps over the lazy dog.';
const strArr = str.split(' ');
console.log(strArr);

console.log(strArr.join('-'));



const trimArr = trimStr.split(' ');
console.log(trimArr);
console.log(trimArr.join('-'));

const filterArr = trimArr.filter(function (str) {
    return str != '';
});

console.log(filterArr);
console.log(filterArr.join(' '));