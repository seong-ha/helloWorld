let str1 = 'Hello';
let str2 = new String('Hello');

console.log(str1, str2, str1 == str2, str1 === str2);
console.log(str1.substring(0, 3));


// String => string
// valueOf:   객체 -> 기본타입
console.log(str2.valueOf()); // 객체 -> 기본타입
console.log(typeof str2.valueOf());

// eval: 문자열을 실행 가능한 자바스크립트 코드로 변호나하는 전역 메서드.(문자열만 변환함)
let result1 = eval('1 + 2 + 3');
console.log(result1);
let result2 = eval(new String('1 + 2 + 3'));
console.log(result2);
let result3 = eval(new String('1 + 2 + 3').valueOf());
console.log(result3);



// trim: 앞뒤 공백 제거
let trimStr = '   앞뒤 공백을 제거하는 메서 드  ';
console.log(trimStr);
console.log(trimStr.trim());

// trimStart: 앞 공백, trimEnd: 뒷 공백
console.log(trimStr.trimStart());
console.log(trimStr.trimStart().trimEnd());

// String 객체의 메서드 추가 정의
let obj = {};   // new Object();
let arr = {};   // new Array();
let regExp = /\s+$/; new RegExp();



// 프로토타입에 내가 직접 메서드 정의해서 쓰기.
String.prototype.strim = function() {
    return this.replace('s', 'S'); // window.replace(이거를, 이걸로 바꾸겠다.);
}
trimStr += 'aassbbss';
console.log(trimStr.strim());

String.prototype.ltrim = function() {
    return this.replace(/^\s/, ''); // window.replace(이거를, 이걸로 바꾸겠다.);
}
console.log(trimStr.ltrim());

String.prototype.rtrim = function() {
    return this.replace(/\s+$/, ''); // window.replace(이거를, 이걸로 바꾸겠다.);
}
console.log(trimStr.rtrim());


// 정규표현식과 일치하는 모든 문자열 찾기 (P.167)
trimStr = '    how are you  to  day   everyone.  ';
console.log(trimStr.trim().replace(/\s+/g, ' ')); // 하나 이상의 공백을 하나의 공백으로


// split: 어떠한 것 기준으로 잘라서 배열에 넣기.(String -> Array)
const str = 'The quick brown fox jumps over the lazy dog.';
const strArr = str.split(' ');
console.log(strArr);    // ★★★ 굉장히 많이 쓰임.

// 배열 내용물들을 구분자로 연결해서 문자열로 만들어줌.(Array -> String)
console.log(strArr.join('-'));



const trimArr = trimStr.split(' ');
console.log(trimArr);
console.log(trimArr.join('-'));

const filterArr = trimArr.filter(function (str) {
    return str != '';
});
console.log(filterArr.join(' '));




/*
자주 쓰이는 메서드

trim() > trimStart() > trimEnd()
replace(a,b): a문자를 b문자로 변환.
정규표현식: replace(/\s+/, '표현값')
split('구분자'): 문자열로 배열 생성
join('구분자'): 배열 -> 문자열
*/